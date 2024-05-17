const resultsContainer = document.querySelector(".game-information");
const headerContainer = document.querySelector(".game-header");

const queryString = document.location.search;

const paramsProductPage = new URLSearchParams(queryString);

const id = paramsProductPage.get("id")

console.log(id)

const url = "https://v2.api.noroff.dev/gamehub/" + id;

async function getGameDetails() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        const gameInfo = results.data;

        console.log

        //console.log(gameInfo.data.image.url);

        headerContainer.innerHTML = `<h1 class="h1heading">${gameInfo.title}</h1>`

        resultsContainer.innerHTML = `<div class="container-gamepage">
                                    <img class="product-page-image " src="${gameInfo.image.url}" alt = "${gameInfo.tile}">
                                    <div class="info-gamepage"> 
                                        <div><p>${gameInfo.genre}</p></div>
                                        <div><h2>${gameInfo.title}</h2></div>

                                        <div>
                                        <fieldset class="game_page">
                                        <label for="digital" id="price-radio" class="label_gamepage">Digital copy: $${gameInfo.price}</label>
                                        <input type="radio" name="price-check" class="form_input one">
                                        </fieldset>

                                        <fieldset class="game_page">
                                        <label for="Physical" id="price-radio" class="label_gamepage">Physical copy: $${gameInfo.price}</label>
                                        <input type="radio" name="price-check" class="form_input two">
                                        </fieldset>
                                        </div>

                                        <div class="button-boxes-product-page">
                                            <a href="checkout.html" class="cta-gamepage">Add to cart</a>
                                            <a href="contact.html" class="cta-heart"><i class="fa-solid fa-heart heart_icon_gamespage"></i></a>
                                        </div>

                                        <div class="delivery-info">
                                            <div>
                                                <p class="delivery-truck"><i class="fa-solid fa-truck fa-2xl icon-truck"></i></p>
                                            </div>
                                            <div>
                                                <p>Free shipping over $50</p>
                                                <p>Estimated delivery 1-2 days</p>
                                            </div>
                                        </div>

                                        <div class="game-info">
                                        <h2>${gameInfo.title}</h2></div>
                                        <p>${gameInfo.description}</p>
                                        <p>Released: ${gameInfo.released}</p>
                                        </div>
                                    </div>`;
    }

    catch {
        console.log(error);
    }
};

getGameDetails();