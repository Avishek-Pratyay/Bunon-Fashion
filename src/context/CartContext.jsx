import { createContext, useContext, useEffect, useMemo, useReducer } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "bunon.cart.v1";

function loadInitialState() {
  if (typeof window === "undefined") return { items: [] };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { items: [] };
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed.items)) return { items: [] };
    return parsed;
  } catch {
    // Corrupted or blocked storage shouldn't crash the app.
    return { items: [] };
  }
}

// A cart line is unique per product + size + color combination, since
// "Add to Cart" for a Medium Navy shirt is a different line than a Large one.
function lineKey(productId, size, color) {
  return `${productId}::${size ?? "-"}::${color ?? "-"}`;
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, size, color, quantity } = action.payload;
      const key = lineKey(product.id, size, color);
      const existing = state.items.find((item) => item.key === key);

      if (existing) {
        return {
          items: state.items.map((item) =>
            item.key === key
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }

      return {
        items: [
          ...state.items,
          {
            key,
            productId: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            size,
            color,
            quantity,
          },
        ],
      };
    }

    case "UPDATE_QUANTITY": {
      const { key, quantity } = action.payload;
      if (quantity <= 0) {
        return { items: state.items.filter((item) => item.key !== key) };
      }
      return {
        items: state.items.map((item) =>
          item.key === key ? { ...item, quantity } : item
        ),
      };
    }

    case "REMOVE_ITEM":
      return { items: state.items.filter((item) => item.key !== action.payload.key) };

    case "CLEAR_CART":
      return { items: [] };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, loadInitialState);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignore write failures (private browsing, storage full, etc.)
    }
  }, [state]);

  const value = useMemo(() => {
    const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = state.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    return {
      items: state.items,
      itemCount,
      subtotal,
      addItem: (product, { size, color, quantity = 1 } = {}) =>
        dispatch({ type: "ADD_ITEM", payload: { product, size, color, quantity } }),
      updateQuantity: (key, quantity) =>
        dispatch({ type: "UPDATE_QUANTITY", payload: { key, quantity } }),
      removeItem: (key) => dispatch({ type: "REMOVE_ITEM", payload: { key } }),
      clearCart: () => dispatch({ type: "CLEAR_CART" }),
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside a <CartProvider>");
  }
  return ctx;
}
