import { showModal } from '../render-modal/render-modal';
import './render-add-button.css';
import '../render-modal/render-modal.css';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderAddButton = (element,/*callback*/) => {

    const fabButton = document.createElement('button');
    fabButton.innerText = '+';
    fabButton.classList.add('fab-button');
    // fabButton.className = 'fab-button';
    
    element.append(fabButton);

    fabButton.addEventListener('click', (event) => {
        // if(!callback) return;
        // callback();
        showModal();
    });

};