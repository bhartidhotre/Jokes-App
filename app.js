let btn = document.querySelector("button");
let fact = document.querySelector(".fact");
// let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";
let url = "https://official-joke-api.appspot.com/random_joke";

async function getInfo() {
    let res = await fetch(url);
    let data = await res.json();
    return data;
}

btn.addEventListener("click", async () => {  
    fact.innerHTML = "";

    let get  = await getInfo();
  
    let h3 = document.createElement("h3");
    let p = document.createElement("p");

    h3.innerText = get.setup;
    fact.appendChild(h3);
    
    setTimeout(() => {
        p.innerText = get.punchline;
        fact.appendChild(p);
    }, 5000);
})

