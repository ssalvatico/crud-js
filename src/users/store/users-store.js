import { User } from "../models/user-model";
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
    if(state.currentPage === 1) return;
    const users = await loadUsersByPage(state.currentPage - 1);
    state.currentPage -= 1;
    state.users = users;
};

/**
 * @param {User} user
 */
const onUserChanged = (updatedUser) => {
    let flag = false;
    
    state.users = state.users.map(user => {
        if(user.id === updatedUser.id) {
            flag = true;
            return updatedUser;
        }
        return user;
    });

    if(!flag && state.users.length < 10){
        state.users.push( updatedUser );
    }
};

/**
 * ...
 */
const reloadPage = async () => {
    const users = await loadUsersByPage(state.currentPage);
    if(users.length === 0) {
        await loadPreviousPage();
        return;
    }
    state.users = users;
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