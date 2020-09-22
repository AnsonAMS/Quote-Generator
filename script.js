// Get Quote form API
async function getQuote() {
    const proxyUrl= 'https://cors-anywhere.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const respons = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        getQuote();
        console.log('whoopsie, no quote', error);
    }
}

// On Load
getQuote(); 