function filterGames(gameData, condition) {
    if (!condition in ["onSale", "favorite"]) {
        console.log("Dingus")
        throw new Error("Dingus.");
    }
    let filteredGamesHTML = addSubheading(condition)
    for (let game of gameData) {
        if (game[condition] === true) {
            filteredGamesHTML += generateGameHTML(
                game.image.url,
                game.title,
                game.description,
                game.id
            )
        }
    }
    return filteredGamesHTML;
}

function addSubheading(subheading) {
    return `<div class="genre-container">
    <h2 class="h2-title-games-page">${subheading}</h2></div>`;
}

function generateGameHTML(gameImageURL, gameTitle, gameDescription, gameID) {
    return `<div class="game-section">
    <img class="index-page-image" src="${gameImageURL}" alt = "${gameTitle}">
        <div class="game-section-info">
            <h3 class="index-game-title">${gameTitle}</h3>
            <p class="game-text">${gameDescription}</p>
            <a href="product-page.html?id=${gameID}" class="cta-homepage">View</a> 
        </div>
    </div>
    `;
}


const url = "https://v2.api.noroff.dev/gamehub/";

const containerIndexPage = document.querySelector(".container-index-games");

async function getGamesIndexPage() {

    const response = await fetch(url);

    const results = await response.json();

    const gameData = results.data;

    console.log(gameData);


    containerIndexPage.innerHTML += filterGames(gameData, "onSale");


    /* for (let i = 0; i < gameData.length; i++) {
        if (gameData[i].favorite === true) {
            containerIndexPage.innerHTML += generateGameHTML(
                gameData[i].image.url,
                gameData[i].title,
                gameData[i].description,
                gameData[i].id
            ); */
    /*             containerIndexPage.innerHTML += `<div class="game-section">
                        <img class="index-page-image" src="${gameData[i].image.url}" alt = "${gameData[i].title}">
                        <div class="game-section-info">
                            <h3 class="index-game-title">${gameData[i].title}</h3>
                            <p class="game-text">${gameData[i].description}</p>
                            <a href="product-page.html?id=${gameData[i].id}" class="cta-homepage">View</a> 
                        </div>
                    </div>
                `; */
}
/*     }
}
 */
getGamesIndexPage();