// debounce for fake store Api
import { useState, useEffect, useCallback, useRef } from "react";
import debounce from "lodash.debounce";

export const useProductSearch = (query) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const latestQueryRef = useRef("");

  const fetchProducts = useCallback(async (searchTerm) => {
    setLoading(true);
    latestQueryRef.current = searchTerm;

    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      // Ignore outdated results if user typed something new
      if (latestQueryRef.current !== searchTerm) return;

      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      const resultsFormatted = filtered.map((p) => ({
        id: `${p.id}-fakestore`,
        rawId: p.id,
        title: p.title,
        image: p.image,
        price: p.price,
        source: "fakestore",
      }));

      setResults(resultsFormatted);
      setShowDropdown(true);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      if (latestQueryRef.current === searchTerm) {
        setLoading(false);
      }
    }
  }, []);

  const debouncedSearch = useCallback(
    debounce((input) => {
      const trimmed = input.trim();
      if (!trimmed) {
        setResults([]);
        setShowDropdown(false);
        return;
      }
      fetchProducts(trimmed);
    }, 500),
    [fetchProducts]
  );

  useEffect(() => {
    debouncedSearch(query);
    return () => debouncedSearch.cancel();
  }, [query, debouncedSearch]);

  return { results, loading, showDropdown, setShowDropdown };
};
