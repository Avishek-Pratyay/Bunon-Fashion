import { useEffect, useState } from "react";
import products from "../data/products";

// The catalogue is a local file, but a real storefront always has a network
// hop for its data. Simulating that (briefly) keeps the loading states —
// skeletons, spinners — honest rather than something that only exists in
// theory.
const SIMULATED_LATENCY_MS = 500;

export function useProducts() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);

    const timer = window.setTimeout(() => {
      if (!cancelled) {
        setData(products);
        setIsLoading(false);
      }
    }, SIMULATED_LATENCY_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, []);

  return { products: data ?? [], isLoading };
}

export function useProduct(id) {
  const [product, setProduct] = useState(undefined); // undefined = loading, null = not found
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    setProduct(undefined);

    const timer = window.setTimeout(() => {
      if (cancelled) return;
      const found = products.find((p) => String(p.id) === String(id)) ?? null;
      setProduct(found);
      setIsLoading(false);
    }, SIMULATED_LATENCY_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [id]);

  return { product, isLoading };
}
