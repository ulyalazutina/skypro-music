"use client";
import { FilterItem } from "@components/FilterItem/FilterItem";
import styles from "./Filter.module.css";
import { useCallback, useState } from "react";
import { categories } from "./categories";
import { getListItem } from "../../libs/getListItems";
import { useAppSelector } from "../../hooks";

export function Filter() {
  const playlist = useAppSelector((store) => store.playlist.playlist);

  const [activeFilterPopUp, setActiveFilterPopUp] = useState<string | null>(null);
  const handleFilterClick = useCallback((newFilter: categories) => {
    setActiveFilterPopUp((prev) => (newFilter === prev ? null : newFilter));
  },[])

  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      <FilterItem
        onClick={() => handleFilterClick(categories.Authors)}
        isOpened={activeFilterPopUp === "authors"}
        list={getListItem("author", playlist)}
        filter = {categories.Authors}
      >
        исполнителю
      </FilterItem>
      {/* <FilterItem 
        onClick={() => handleFilterClick(categories.Years)} 
        isOpened={activeFilterPopUp === "years"} 
        list={getListItem("release_date", playlist)}>
        году выпуска
      </FilterItem> */}
      <FilterItem
        onClick={() => handleFilterClick(categories.Genres)}
        isOpened={activeFilterPopUp === "genres"}
        list={getListItem("genre", playlist)}
        filter = {categories.Genres}
      >
        жанру
      </FilterItem>
    </div>
  );
}
