import { User } from "../models/user-model";

/**
 * Mapper de elementos LikeUser a elementos de clase User
 * 
 * Normaliza la representación de la estructura basandose
 * en la definición del modelo de User. 
 * @param {Like<User>} localHostUser 
 * @returns {User}
 */
 export const localHostUserToModel = (localHostUser) => {

    const { avatar,
            balance,
            first_name,
            gender,
            id,
            isActive,
            last_name,
            } = localHostUser;

    return new User({
        avatar,
        balance,
        firstName: first_name,
        gender,
        id,
        isActive,
        lastName: last_name,
    });
};