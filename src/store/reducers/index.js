import {combineReducers} from "redux";
import {board} from "./board";
import {listsById} from "./lists";
import {cardsById} from "./cards";

export const reducers = combineReducers({
    board,
    listsById,
    cardsById
});
