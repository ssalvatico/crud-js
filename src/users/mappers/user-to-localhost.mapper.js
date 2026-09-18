import { User } from '../models/user-model';

/**
 * Mapper de elementos de clase User a elementos Like<User>
 * Este modelo sirve para las solicitudes a la base de datos
 * 
 * @param {User} user 
 * @returns {Like<User>}
 */
export const userModelToLocalHost = (user) => {
    
    const {
        avatar,
        balance,
        firstName,
        lastName,
        gender,
        id,
        isActive,
    } = user;

    return {
        avatar,
        balance,
        first_name: firstName,
        last_name: lastName,
        gender,
        id,
        isActive,
    }
};