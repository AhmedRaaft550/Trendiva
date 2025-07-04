"use client";

import React, { useState } from "react";
import styles from "./search.module.css";
import { useProductSearch } from "../../../hooks/useProductSearch";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SearchBar = ({ closeMenu }) => {
  const [query, setQuery] = useState("");
  const { results, loading, showDropdown, setShowDropdown } =
    useProductSearch(query);
  const router = useRouter();

  const handleSelect = (rawId) => {
    setShowDropdown(false);
    closeMenu?.();
    router.push(`/clothesProduct/${rawId}`);
  };

  return (
    <div className={styles.searchWrapper}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.searchInput}
        placeholder="Search products..."
        aria-label="Search products"
        onFocus={() => query && results.length > 0 && setShowDropdown(true)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 150)} // تأخير الإغلاق حتى يكتمل الضغط
      />

      {loading && <div className={styles.loader}>Loading...</div>}

      {showDropdown && (
        <ul className={styles.dropdown} role="listbox">
          {results.length > 0 ? (
            results.map((item) => (
              <li
                key={item.id}
                role="option"
                tabIndex={0}
                onMouseDown={() => handleSelect(item.rawId)}
                className={styles.dropdownItem}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={40}
                  height={40}
                  className={styles.thumbnail}
                />
                <span>{item.title}</span>
              </li>
            ))
          ) : (
            <li className={styles.noResults}>No products found.</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
