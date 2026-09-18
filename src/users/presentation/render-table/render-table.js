import usersStore from '../../store/users-store';
import { deleteUserById } from '../../usecases/delete-user-by-id';
import { showModal } from '../render-modal/render-modal';
import './render-table.css';

/** @type {HTMLTableElement} */
let table;

/**
 * Crea los headers de la tabla de usuarios
 * @returns {HTMLTableElement}
 */
const createTable = () => {
    const table = document.createElement('table');
    const tableHeaders = document.createElement('thead');
    tableHeaders.innerHTML = `
        <tr>
            <th>#Id</th>
            <th>Balance</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Active</th>
            <th>Actions</th>
        </tr>
    `;

    const tableBody = document.createElement('tbody');
    table.append(tableHeaders, tableBody);
    return table;
};

/**
 * Maneja el evento 'click' del botón select
 * @param {MouseEvent} event
 * @returns {void}
 */
const tableSelectListener = (event) => {
    const select = event.target.closest('.select-user')
    if(!select) return;
    const id = select.getAttribute('data-id');
    showModal(id);
};

/**
 * Maneja el evento 'click' del botón delete
 * @param {MouseEvent} event 
 * @returns {void}
 */
const tableDeleteListener = async (event) => {
    const deleteUser = event.target.closest('.delete-user');
    if(!deleteUser) return;
    const id = deleteUser.getAttribute('data-id');
    try {
        await deleteUserById(id);
        await usersStore.reloadPage();
        document.querySelector('#current-page').innerText = usersStore.getCurrentPage();
        renderTable();
    } catch {
        alert(`Couldn't delete user ${id}`);
    }
};

/**
 * Renderiza la tabla de usuarios
 * @param {HTMLDivElement} element 
 */
export const renderTable = (element) => {

    const users = usersStore.getUsers();
    
    if( !table ){
        table = createTable();
        element.append(table);

        //Listeners
        table.addEventListener('click', tableSelectListener);
        table.addEventListener('click', tableDeleteListener);
    }    
    
    let tableHTML = '';
    users.forEach(user => {
        tableHTML += `
        <tr>
            <td>${ user.id }</td>
            <td>$${ user.balance }</td>
            <td>${ user.firstName }</td>
            <td>${ user.lastName }</td>
            <td>${ user.isActive }</td>
            <td>
                <a href="#/" class="select-user" data-id="${user.id}">Select</a>
                |
                <a href="#/" class="delete-user" data-id="${user.id}">Delete</a>
            </td>
        </tr>
        `;
    })
    table.querySelector('tbody').innerHTML = tableHTML;
};