const api_url = "https://api.adviceslip.com/advice";
const advice = document.getElementById("advice");
const number = document.getElementById("number");





async function getadvice(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data)

    advice.innerHTML = data.slip.advice;
    number.innerHTML = data.slip.id;

}
getadvice(api_url);