import { localHostUserToModel } from "../mappers/localhost-user.mapper";


/**
 * Se encarga de solicitar los datos a la bd para
 * decidir si hay usuarios para mostrar o no
 * @param {Number} page
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async (page = 1) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const res = await fetch(url);
    const data = await res.json();
    if(page < data.first || page > data.last) return [];
    return data.data.map(localHostUserToModel);
}