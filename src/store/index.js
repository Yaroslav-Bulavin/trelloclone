import {createStore} from "redux";
import throttle from "lodash.throttle";
import defaults from "./defaults";
import {reducers} from "./reducers";
import {persistedState, saveState} from "./state";

const store = createStore(reducers, persistedState);

store.subscribe(
    throttle(() => {
        saveState(store.getState());
    }, 1000)
);

if (!store.getState().board.lists.length) {
    defaults(store);
}

export default store;
