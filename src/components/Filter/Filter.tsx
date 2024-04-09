"use client";
import { FilterItem } from "@components/FilterItem/FilterItem";
import styles from "./Filter.module.css";
import { useMemo, useState } from "react";
import { authors, genres, years } from "./data";
import { categories } from "./categories";
import { getListItem } from "../../libs/getListItems";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { setActiveFilter } from "../../store/feautures/playlistSlice";

export function Filter() {
  const playlist = useAppSelector((store) => store.playlist.playlist);
  const selectedAuthors = useAppSelector((store) => store.playlist.activeFilters.authors);
  console.log(selectedAuthors);
  const selectedGenres = useAppSelector((store) => store.playlist.activeFilters.genres);
  const dispatch = useDispatch();

  const [activeFilterPopUp, setActiveFilterPopUp] = useState<string | null>(null);
  const handleFilterClick = (newFilter: categories) => {
    setActiveFilterPopUp((prev) => (newFilter === prev ? null : newFilter));
  };
  // const [localActiveFilter, setLocalActiveFilter] = useState<trackType | null>(null);
  const toggleSelectedAuthors = (author:string) => { 
    dispatch(setActiveFilter({
      authors: selectedAuthors.includes(author) ? selectedAuthors.filter((item)=>{item !== author}): [...selectedAuthors, author]
    }))
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
        toggleSelectedAuthors = {(authors)=>toggleSelectedAuthors(authors)}
      >
        исполнителю
      </FilterItem>
      {/* <FilterItem 
        onClick={() => handleFilterClick(categories.Years)} 
        isOpened={activeFilterPopUp === "years"} 
        list={getListItem("release_date", playlist)}>
        году выпуска
      </FilterItem> */}
      {/* <FilterItem
        onClick={() => handleFilterClick(categories.Genres)}
        isOpened={activeFilterPopUp === "genres"}
        list={getListItem("genre", playlist)}
        toggleSelectedAuthors = {(authors)=>toggleSelectedAuthors(authors)}
      >
        жанру
      </FilterItem> */}
    </div>
  );
}
