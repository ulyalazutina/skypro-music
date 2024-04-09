import { useState } from "react";
import styles from "./Search.module.css";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { setActiveFilter } from "../../store/feautures/playlistSlice";

export function Search() {
  const inputText = useAppSelector((store) => store.playlist.activeFilters.searchValue);

  const dispatch = useDispatch();

  const [value, setValue] = useState<string>("");

  const handleSearch = (value: string) => {
    dispatch(
      setActiveFilter({
        searchValue: inputText.includes(value.toLowerCase()) ? "" : value,
      }),
    );
  };
  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
        handleSearch(value);        
    }
  };

  const handleChange = (e: any) => {
    setValue(e.target.value);
    // console.log(e.target.value);
  };
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
    </div>
  );
}
