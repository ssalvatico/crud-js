import { User } from '../models/user-model';

/**
 * @param {User} user
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