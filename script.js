const btnEl=document.getElementById('btn')
const APIkey='V6ifW5RmIVfxKm7hD4rXAw==PlwaQ0h9tZDZxjKW'
const options={
    method: 'GET',
    headers: {
        'X-Api-Key': APIkey,
    }
}
const apiURL='https://api.api-ninjas.com/v1/dadjokes?limit=1'
const jokeEl=document.getElementById('joke')

async function getJoke() {
    try {
    jokeEl.innerText='Loading...'
    btnEl.disabled=true
    btnEl.innerText='Loading...'
    const response=await fetch(apiURL, options)
    const data=await response.json()
    //console.log(data[0].joke);
    btnEl.disabled=false
    btnEl.innerText='TELL ME'
    jokeEl.innerText=data[0].joke
    } catch (error) {
        jokeEl.innerText='Error happened, try again'
        btnEl.disabled=false
        btnEl.innerText='TELL ME'
        console.log(error);
    }
}

btnEl.addEventListener('click', getJoke)