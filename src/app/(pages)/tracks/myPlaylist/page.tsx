"use client";
import Main from "@components/Main/Main";
import { useRouter } from "next/navigation";

type ParamsIdType = {params: {id: string}}

export default function MainPlaylistId({params}:ParamsIdType) {
    const router = useRouter();
    if (localStorage.getItem('user')) {
        return <Main isFavorite = {true} isFilter = {false} isSideBar={false} playlistID={params.id} />;        
    } else {
        router.push('/signin');
    }
}
