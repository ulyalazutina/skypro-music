import styles from "./Title.module.css";

type TitleType = {
    playlistID: string | null
}

export default function Title({ playlistID }: TitleType) {
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
        <h2 className={styles.centerblockTitle}>{playlistID ? TitleData.map((item) => {
            if (item.id === playlistID) {
                return item.text
            }

        }) : "Треки"}</h2>
    );
}