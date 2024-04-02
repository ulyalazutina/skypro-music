import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { playlistReducer } from "./feautures/playlistSlice";

export const makeStore = () => {
    return configureStore({
        reducer: combineReducers({
            playlist: playlistReducer,
        }),
    });
};

// Тип AppStore представляет собой тип нашего хранилища Redux, который возвращает функция makeStore.
export type AppStore = ReturnType<typeof makeStore>;

// Тип RootState представляет собой тип состояния нашего приложения, который возвращает функция getState хранилища Redux.
export type RootState = ReturnType<AppStore["getState"]>;

// Тип AppDispatch представляет собой тип функции диспетчера, который возвращает функция dispatch хранилища Redux.
export type AppDispatch = AppStore["dispatch"];