const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "63z6Fuh4UqAwMYaa5F5INQ==ktXW6oC82NgX5HRx"

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey
    }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes";

const getJoke = async () => {

    joke.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading..."
    
    const response = await fetch(apiURL, options)
    const data = await response.json();

    jokeEl.innerText = data[0].joke
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke"
}

btnEl.addEventListener("click", getJoke)



