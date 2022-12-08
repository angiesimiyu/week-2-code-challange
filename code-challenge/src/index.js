// Your code here


  document.addEventListener("DOMContentLoaded", () => {
    const characterNames = document.getElementById("character-bar")
    const characterInfo = document.querySelector("div.characterInfo")

    // Creating a span tag with the characters names retrieved from the server
    // Fetching data from the server

    fetch("http://localhost:3000/characters")
    .then(response => response.json())
    .then(data => {
        data.forEach(character => {
            displayNames(character)

        });
    })

    function displayNames(character) {
        const spanInfo = document.createElement("span")
        spanInfo.innerText = character.name
        characterNames.append(spanInfo)

        spanInfo.dataset.id = character.id;

        spanInfo.addEventListener("click", clickForCharacters)
    }

    //Fetching character details

    function displayDetails(id) {
        return fetch(`http://localhost:3000/characters/${id}`)
        .then(response => response.json())
    }

    function clickForCharacters(event) {
        displayDetails(event.target.dataset.id)
        .then(renderCharacterDetails);
    }



    function renderCharacterDetails(character) {

        const charName = document.getElementById("name");
        charName.innerText = character.name

        const charImg = document.getElementById("image");
        charImg.src = character.image

        const charVotes = document.getElementById("vote-count");
        charVotes.innerText = character.votes

    }

    //Form Submission


document.getElementById("votes-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const formVotes = event.target;
    const votes = document.getElementById("vote-count")
    votes.innerText = parseInt(formVotes.votes.value) + parseInt(votes.innerText);
    formVotes.reset();


    // Reset button

document.getElementById("reset-btn").addEventListener("click", () => {
    document.getElementById("vote-count").innerText = 0;
})
})


})






