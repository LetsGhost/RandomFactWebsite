document.getElementById("getfact").addEventListener("click", randomfact)

function randomfact(){
    let request = new XMLHttpRequest();
    request.open("GET", "https://uselessfacts.jsph.pl/random.json?language=de")
    request.send();
    request.onload = () => {
        if(request.status === 200) {
            let fact = JSON.parse(request.response)
            document.getElementById("randomfact").textContent = fact.text;
        }
    }
}