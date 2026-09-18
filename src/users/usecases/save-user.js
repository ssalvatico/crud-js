import { User } from "../models/user-model";
import { userModelToLocalHost } from '../mappers/user-to-localhost.mapper';
import { localHostUserToModel } from "../mappers/localhost-user.mapper";

/**
 * Maneja la creación y la actualización de los usuarios
 * @param {Like<User>} userLike
 */
export const saveUser = async ( userLike ) => {

    const user = new User( userLike );
    const userToSave = userModelToLocalHost( user );
    let updatedUser;

    if(user.id){
        updatedUser = await updateUser( userToSave );
    } else {
        updatedUser = await createUser( userToSave );
    }
    
    return localHostUserToModel( updatedUser );
};

/**
 * 
 * @param {Like<User>} user 
 * @returns {}
 */
const createUser = async ( user ) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users`;
    const response = await fetch(url,{ 
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const newUser = await response.json();
    return newUser;
};

/**
 * 
 * @param {Like<User>} user 
 */
const updateUser = async (user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${ user.id }`
    const response = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const updatedUser = await response.json();
    console.log({updatedUser});
    return updatedUser;
}