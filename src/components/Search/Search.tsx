import { useState } from "react";
import styles from "./Search.module.css";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { setActiveFilter } from "../../store/feautures/playlistSlice";

export function Search() {
  const inputText = useAppSelector((store) => store.playlist.activeFilters.searchValue);
  const selected = useAppSelector((store)=>store.playlist.filteredPlaylist);
  // console.log(selected);
  const dispatch = useDispatch();

  const [value, setValue] = useState<string | null>(null);

  // const toggleSelectedAuthors = (resultSearch:string) => {
  //   dispatch(setActiveFilter({
  //     searchValue: inputText.includes(value:string);
  //     // authors: selectedAuthors.includes(value) ? selectedAuthors.filter((item)=>{item !== author}): [...selectedAuthors, author]
  //   }))
  // };

  const toggleSelectedTrack = (value: string) => {
    dispatch(
      setActiveFilter({
        searchValue: inputText.includes(value.toLowerCase()) ? value : value,
        // authors: selectedAuthors.includes(value) ? selectedAuthors.filter((item)=>{item !== author}): [...selectedAuthors, author]
      }),
    );
  };
  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      console.log(value);
      toggleSelectedTrack(value);
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
