let containerCount = 1;

let fetchInfoBtn = document.getElementById('btn');
let animalInfo = document.getElementById('animal-info');

fetchInfoBtn.addEventListener('click', () => {
    let ourRequest = new XMLHttpRequest();
    // console.log(ourRequest.readyState);
    ourRequest.open('GET', `https://learnwebcode.github.io/json-example/animals-${containerCount}.json`);
    // console.log(ourRequest.readyState);
    
    ourRequest.onreadystatechange = function () {
        console.log(ourRequest.readyState, ourRequest.status);
        // let ourData = JSON.parse(this.responseText);
        // console.log(ourRequest.readyState);
        // renderHTML(ourData);
    }
    // console.log(ourRequest.getResponseHeader());

    ourRequest.send();

    if(containerCount < 3) {
        ++containerCount;
    } else {
        containerCount = 1;
    }

});

function renderHTML(data) {
    let htmlElement = "";

    for(let i = 0; i < data.length; i++) {
        htmlElement += "<p><b>" + data[i].name + "</b> is a <b>" + data[i].species + "</b> that likes "; 

        for(let ii = 0; ii < data[i].foods.likes.length; ii++) {
            if(ii === 0) {
                htmlElement += "<b>" + data[i].foods.likes[ii] + "</b>";
            } else {
                htmlElement += " <b>" + data[i].foods.likes[ii] + "</b>";
            }
        }

        htmlElement += " and dislikes ";

        for(let ii = 0; ii < data[i].foods.dislikes.length; ii++) {
            if(ii === 0) {
                htmlElement += "<b>" + data[i].foods.dislikes[ii] + "</b>";
            } else {
                htmlElement += " <b>" + data[i].foods.dislikes[ii] + "</b>";
            }
        }

        htmlElement += "</p>";
    }
    animalInfo.insertAdjacentHTML('beforeend', htmlElement);
    console.log(data)
}