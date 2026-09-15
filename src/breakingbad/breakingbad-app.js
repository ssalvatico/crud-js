// Considerado como aplicacion (componente)

/**
 * @returns {Promise<Object>} quote info
 */
const fetchQuote = async () => {
   const randId = Math.floor(Math.random() * 86) + 1; // Hay 86 quotes distintas (del 1 al 86)
   const response = await fetch(`/api/breaking-bad/quotes/${randId}`); // falló aca, seguir en mi casa
   
   // Lo que deberia seguir haciendo:
   const { data } = await response.json();
   return data;
};

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBadApp = async (element) => {
    
    document.querySelector('#app-title').innerHTML = 'BreakingBad App';
    element.innerHTML = 'Loading...';
    
    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next quote';
    
    const renderQuote = (data) => {
        quoteLabel.innerHTML = data.quote;
        authorLabel.innerHTML = data.author;
        element.replaceChildren(quoteLabel,authorLabel,nextQuoteButton);
    };
    
    fetchQuote()
        .then(renderQuote)
    
    nextQuoteButton.addEventListener('click', async () => {
        element.innerHTML = 'Loading...';
        fetchQuote.then(renderQuote);
    });

};