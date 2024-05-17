const url = "https://v2.api.noroff.dev/gamehub/";

const allGamesContainer = document.querySelector(".container-games-page");
const genreContainer = document.querySelector(".headings-container")

async function getListofGames() {
    try {

        const response = await fetch(url);

        const results = await response.json();

        const games = results.data;

        //console.log(games);


        const genres = ["Action", "Sports", "Adventure", "Horror"];
        let gamesHTML = "";

        for (let genre of genres) {
            gamesHTML += `<div class="genre-container">
            <h2 class="h2-title-games-page">${genre}</h2>`;
            for (let game of games) {
                if (game.genre === genre) {
                    gamesHTML += `
                                            <div class="game">
                                            <h3>${game.title}</h3>
                                            <img class="games-page-image" src="${game.image.url}" alt = "${game.tile}">
                                            <p>$${game.price}</p>
                                            <div class="buttons-gamespage">
                                                <a href="product-page.html?id=${game.id}" class="cta_gamespage">View</a> 
                                                <i class="fa-solid fa-heart heart_icon_gamepage cta_heart_gamespage""></i>
                                            </div>
                                            
                                            </div>`
                }
            }
            gamesHTML += `</div>`
        }

        allGamesContainer.innerHTML = gamesHTML;

        /* for (let i = 0; i < games.length; i++) {
            console.log(games[i].title)

            allGamesContainer.innerHTML += `<div class="game">
                                            <h3>${games[i].title}</h3>
                                            <img class="games-page-image" src="${games[i].image.url}" alt = "${games[i].tile}">
                                            <p>$${games[i].price}</p>
                                            <div class="buttons-gamespage">
                                                <a href="product-page.html?id=${games[i].id}" class="cta_gamespage">View</a> 
                                                <i class="fa-solid fa-heart heart_icon_gamepage cta_heart_gamespage""></i>
                                            </div>
                                            
                                            </div>`





        }
 */

    }

    catch {
        console.log(error);
    }
};

getListofGames();