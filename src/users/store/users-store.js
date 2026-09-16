import { loadUsersByPage } from "../usecases/load-users-by-page";

const state = {
    currentPage: 0,
    users: [],
}

/**
 * Carga la siguiente página de usuarios en caso de que exista
 * @returns {}
 */
const loadNextPage = async () => {
    const users = await loadUsersByPage(state.currentPage + 1);
    if(users.length === 0) return;
    state.currentPage += 1;
    state.users = users;
};

/**
 * Carga la página anterior de usuarios en caso de que exista
 */
const loadPreviousPage = async () => {
    const users = await loadUsersByPage(state.currentPage - 1);
    if(users.length === 0) return;
    state.currentPage -= 1;
    state.users = users;
};
/**
 * ...
 */
const onUserChanged = () => {throw new Error("Implementar");
};
/**
 * ...
 */
const reloadPage = () => {throw new Error("Implementar");
};

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    /** @returns {User[]} */
    getUsers: () => [...state.users],
    /** @returns {Number} */
    getCurrentPage: () => state.currentPage,
};