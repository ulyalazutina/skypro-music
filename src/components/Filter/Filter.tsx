"use client";
import { FilterItem } from "@components/FilterItem/FilterItem";
import styles from "./Filter.module.css";
import { useMemo, useState } from "react";
import { authors, genres, years } from "./data";
import { categories } from "./categories";
import { getListItem } from "../../libs/getListItems";
import { useAppSelector } from "../../hooks";
// import { useDispatch } from "react-redux";

export function Filter() {
  const playlist = useAppSelector((store) => store.playlist.playlist);
  const selectedAuthors = useAppSelector((store) => store.playlist.activeFilters.authors);
  // console.log(selectedAuthors);
  const selectedGenres = useAppSelector((store) => store.playlist.activeFilters.genres);
  // const dispatch = useDispatch();

  const [activeFilterPopUp, setActiveFilterPopUp] = useState<string | null>(null);
  const handleFilterClick = (newFilter: categories) => {
    setActiveFilterPopUp((prev) => (newFilter === prev ? null : newFilter));
  };

  // const toggleSelectedGenres = (genre:string) => {
  //   dispatch(setActiveFilter({
  //     genres: selectedGenres.includes(genre) ? selectedGenres.filter((item)=>{item !== genre}): [...selectedAuthors, genre]
  //   }))
  // };

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
