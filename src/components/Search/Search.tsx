"use client";
import { useState } from "react";
import styles from "./Search.module.css";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { setActiveFilter, setFilteredTracks } from "../../store/feautures/playlistSlice";

export function Search() {
  const inputText = useAppSelector((store) => store.playlist.activeFilters.searchValue);
  const playlist = useAppSelector((store) => store.playlist.playlist);
  const filteredPlaylist = useAppSelector((store) => store.playlist.filteredPlaylist);
  const dispatch = useDispatch();

  const [results, setResults] = useState<string>("");

  const handleSearch = () => {
    dispatch(setActiveFilter({
      searchValue: results
    }))
  }

  function handleKeyPress(event: any) {
    if (event.key === "Enter") {
      handleSearch()
    }
  }

  function handleChange(e: any) {
    const { value } = e.currentTarget;
    if (!value) {
      return setResults("");
    } else {
      setResults(value);
    }
  }

  return (
    <div className={styles.centerblockSearch}>
      <svg className={styles.searchSvg}>
        <use xlinkHref="/image/icon/sprite.svg#icon-search" />
      </svg>
      <input
        onKeyPress={handleKeyPress}
        className={styles.searchText}
        type="search"
        placeholder="Поиск"
        name="search"
        onChange={handleChange}
      />
      {/* <pre>Результаты: {JSON.stringify(results, null, 1)}</pre> */}
    </div>
  );
}
