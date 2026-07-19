import { createContext, useCallback, useContext, useState } from "react";

const ToastContext = createContext(null);
let idCounter = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message) => {
    const id = ++idCounter;
    setToasts((prev) => [...prev, { id, message }]);
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2600);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        className="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex flex-col items-center gap-2 px-4"
        aria-live="polite"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            className="pointer-events-auto flex items-center gap-2 rounded-sm bg-night-950 px-4 py-3 text-sm text-handloom-50 shadow-lift animate-[toast-in_0.25s_ease-out]"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-mustard-400" fill="currentColor">
              <path d="M7.5 13.5 4 10l1.4-1.4 2.1 2.1 6.1-6.1L15 6z" />
            </svg>
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside a <ToastProvider>");
  return ctx;
}
