"use client";
import { FilterItem } from "@components/FilterItem/FilterItem";
import styles from "./Filter.module.css";
import { useState } from "react";
import { authors, genres, years } from "./data";
import { categories } from "./categories";

export function Filter() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const handleFilterClick = (newFilter: categories) => {
    setActiveFilter((prev) => (newFilter === prev ? null : newFilter));
  };

  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      <FilterItem
        onClick={() => handleFilterClick(categories.Authors)}
        isOpened={activeFilter === "authors"}
        list={authors}
      >
        исполнителю
      </FilterItem>
      <FilterItem onClick={() => handleFilterClick(categories.Years)} isOpened={activeFilter === "years"} list={years}>
        году выпуска
      </FilterItem>
      <FilterItem
        onClick={() => handleFilterClick(categories.Genres)}
        isOpened={activeFilter === "genres"}
        list={genres}
      >
        жанру
      </FilterItem>
    </div>
  );
}
