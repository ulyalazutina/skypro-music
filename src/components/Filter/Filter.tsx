"use client";
import { FilterItem } from "@components/FilterItem/FilterItem";
import styles from "./Filter.module.css";
import { useState } from "react";

export function Filter() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const handleFilterClick = (newFilter: string) => {
    setActiveFilter(newFilter);
  };

  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      <FilterItem onClick={() => handleFilterClick("authors")} isOpened={activeFilter === "authors"}>исполнителю</FilterItem>
      <FilterItem onClick={() => handleFilterClick("years")} isOpened={activeFilter === "years"}>году выпуска</FilterItem>
      <FilterItem onClick={() => handleFilterClick("genres")} isOpened={activeFilter === "genres"}>жанру</FilterItem>
    </div>
  );
}
