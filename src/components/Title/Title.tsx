import styles from "./Title.module.css";

export default function Title({ playlistId }: string) {

    const TitleData =
        [
            {
                id: '1',
                text: 'Плейлист дня'
            },
            {
                id: '2',
                text: '100 танцевальных хитов'
            },
            {
                id: '3',
                text: 'Инди зярад'
            }
        ]

    return (
        <h2 className={styles.centerblockTitle}>{playlistId ? TitleData.map((item) => {
            if (item.id === playlistId) {
                return item.text
            }

        }) : "Треки"}</h2>
    );
}