
const generateButton = document.getElementById('generateButton');
const dogImage = document.getElementById('dogImage');
const dogFact = document.getElementById('dogFact');

generateButton.addEventListener('click', () => {
    // Fetch random dog image
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            dogImage.src = data.message;
        })
        .catch(error => console.error('Error fetching dog image:', error));

    // Fetch random dog fact
    fetch('https://dogapi.dog/api/v2/breeds')
    .then(response => response.json())
    .then(data => {
        // Get random breed from the response
        const randomIndex = Math.floor(Math.random() * data.data.length);
        const randomBreed = data.data[randomIndex];
        // Extract the fact (description) from the breed attributes
        const randomFact = randomBreed.attributes.description;
        dogFact.textContent = randomFact;
    })
    .catch(error => console.error('Error fetching dog fact:', error));
});