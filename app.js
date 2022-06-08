//we have 2 ids in results and 2 ids in buttons so;
const cat_result = document.getElementById("cat_result");
const dog_result = document.getElementById("dog_result");
const duck_result = document.getElementById("duck_result");
const cat_btn = document.getElementById("cat_btn");
const dog_btn = document.getElementById("dog_btn");
const duck_btn = document.getElementById("duck_btn");

//for two buttons let's add an eventlistener
// both of them listens clcik and runs the functions withthe click
cat_btn.addEventListener('click' , getRandomCat); 
dog_btn.addEventListener('click' , getRandomDog);
duck_btn.addEventListener('click', getRandomDuck);

function getRandomCat(){
    const url = 'https://aws.random.cat/meow'
    //1. use fetch function which takes the url
    fetch(url)
    //.then get the result and convert it to json
        .then(response => response.json())
        
        .then(data =>{
            cat_result.innerHTML = `<img src=${data.file} alt="cat" />`
        })
}

function getRandomDog(){
    const url = 'https://random.dog/woof.json'
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if(data.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
            dog_result.innerHTML = `<img src=${data.url} alt="dog" />`
        } 
    });
}

function getRandomDuck(){
    const url = 'https://random-d.uk/api/random'
    fetch(url)
        .then(response => response.json())
        .then(data => {
            duck_result.innerHTML = `<img src=${data.url} alt="duck" />`
        });
    }