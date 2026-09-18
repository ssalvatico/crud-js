import modalHTML from './render-modal.html?raw';
import './render-modal.css';
import { User } from '../../models/user-model';
import { getUserById } from '../../usecases/get-user-by-id';

/** @type {HTMLElement} */
let modal;

/** @type {HTMLFormElement} */
let form;

/** @type {User} */
let loadedUser = {};

/**
 * Renderiza el modal para la creación/actualización de usuarios
 * @param {String|Number} id
 */
export const showModal = async (id) => {
    modal?.classList.remove('hide-modal');
    
    if(!id) return;
    const user = await getUserById(id);
    setFormValues(user);
};

/**
 * Setea los valores del modal en el caso de actualización del usuario
 * @param {User} user 
 */
const setFormValues = (user) => {
    form.querySelector('[name=firstName]').value = user.firstName;
    form.querySelector('[name=lastName]').value = user.lastName;
    form.querySelector('[name=balance]').value = user.balance;
    form.querySelector('[name=isActive]').checked = user.isActive;
    loadedUser = user;
};

/**
 * Oculta el modal y limpia sus campos
 */
export const hideModal = () => {
    modal?.classList.add('hide-modal');
    form?.reset();
};


/**
 * Se encarga del ciclo de uso completo del modal
 * @param {HTMLDivElement} element
 * @param {{userLike} => Promise<void>} saveUserCallback
 */
export const renderModal = (element, saveUserCallback) => {
    if(modal) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHTML;
    modal.className = 'modal-container hide-modal';

    form = modal.querySelector('form');

    modal.addEventListener('click', (event) => {
        if(event.target.className !== 'modal-container') return;
        else hideModal();
    });
    
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        let flagIsActive = false;
        const data = {...loadedUser};
        const formData = new FormData(form);
        
        for(const [k,v] of formData){
            if(k === 'balance') {data[k] = +v; continue;}
            if(k === 'isActive') {
                flagIsActive = true;
                continue;
            }
            data[k] = v;
        }
        data['isActive'] = flagIsActive;
        await saveUserCallback(data);
        hideModal();
    });

    element.append(modal);
};