This web application allows users to generate random dog images and facts with the click of a button. It makes use of two third-party APIs to retrieve the data: Dog CEO API for fetching random dog images and Dog API for retrieving random dog facts.

How it Works
Generating Random Dog Image:
Upon clicking the "Click Me" button, the application makes a fetch request to the Dog CEO API to retrieve a random dog image.
The fetched image is then displayed on the web page.
Generating Random Dog Fact:
Simultaneously, another fetch request is made to the Dog API to retrieve a list of dog breeds.
A random breed is selected from the response, and its description (fact) is extracted.
The retrieved fact is displayed alongside the dog image on the web page.
Interactivity:
Users can click the "Click Me" button multiple times to generate new random dog images and facts.


APIs Used
Dog CEO API: https://dog.ceo/dog-api/
Dog API: https://dogapi.dog/docs/api-v2