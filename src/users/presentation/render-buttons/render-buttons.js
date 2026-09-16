import usersStore from '../../store/users-store';
import { renderTable } from '../render-table/render-table';
import './render-buttons.css';

/**
 * Renderiza los botones `<- Prev`, `Next ->` y el índice de la página actual
 * @param {HTMLDivElement} element
 */
export const renderButtons = (element) => {

    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next ->';
    
    const previousButton = document.createElement('button');
    previousButton.innerText = '<- Prev';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerText = usersStore.getCurrentPage();

    element.append(previousButton, currentPageLabel, nextButton);

    nextButton.addEventListener('click', async (event) => {
        await usersStore.loadNextPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable(element);
    });
    previousButton.addEventListener('click', async (event) => {
        await usersStore.loadPreviousPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable(element);
    });
};