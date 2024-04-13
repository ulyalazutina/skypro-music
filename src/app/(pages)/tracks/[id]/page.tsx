import Main from "@components/Main/Main";

type ParamsIdType = {params: {id: string}}

export default function MainPlaylistId({params}:ParamsIdType) {
    return <Main isFilter = {false} isSideBar={false} playlistID={params.id} />;
}
