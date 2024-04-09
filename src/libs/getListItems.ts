type TrackKeys = Pick<trackType, "author" | "genre" | "release_date">;

export function getListItem(item: keyof TrackKeys, trackList: trackType[]) {
    const listItem: string[] = [];

    trackList?.forEach((track) => {
        if (listItem.includes(track[item]) || track[item] === "-") return;

        listItem.push(track[item]);
    });

    return listItem.sort();
}
