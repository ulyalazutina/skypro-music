// import classNames from "classnames";
import classNames from "classnames";
import styles from "./FilterItem.module.css";
import { MouseEventHandler } from "react";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { setActiveFilter } from "../../store/feautures/playlistSlice";

type FilterItemProps = {
  children: string;
  onClick: () => void;
  isOpened: boolean;
  list: string[];
  filter: string;
  // toggleSelectedAuthors: (authors:string)=>void
};

export function FilterItem({ children, onClick, isOpened, list, filter }: FilterItemProps) {
  const selectedAuthors = useAppSelector((store) => store.playlist.activeFilters.authors);
  console.log(selectedAuthors.length);
  const selectedGenres = useAppSelector((store) => store.playlist.activeFilters.genres);
  const dispatch = useDispatch();

  const toggleSelectedAuthors = (author:string) => { 
    dispatch(setActiveFilter({
      authors: selectedAuthors.includes(author) ? selectedAuthors.filter((item)=>{item !== author}): [...selectedAuthors, author]
    }))
  };
  
  const toggleSelectedGenres = (genre:string) => {
    dispatch(setActiveFilter({
      genres: selectedGenres.includes(genre) ? selectedGenres.filter((item)=>{item !== genre}): [...selectedAuthors, genre]
    }))
  };

  return (
    <div className={styles.container}>
      <div onClick={onClick} className={classNames(styles.filterButton, styles.btnText, isOpened && styles.btnActive)}>
        {children}
      {filter === "authors" && selectedAuthors.length !== 0 ? (<div className={styles.count}><p className={styles.countText}>{selectedAuthors.length}</p></div>): null}
      {filter === "genres" && selectedGenres.length !== 0 ? (<div className={styles.count}><p className={styles.countText}>{selectedGenres.length}</p></div>): null}
      </div>
      {isOpened && (
        <div className={styles.wrapper}>
          <ul className={styles.items}>
            {list.map((item, index) => (
              <li onClick={()=> filter === "authors" ? toggleSelectedAuthors(item) : toggleSelectedGenres(item)} className={styles.item} key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
