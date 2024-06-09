import { createMessage, getGameDetails, getCartOrEmptyCart } from './utility/utils.js';

const resultsContainer = document.querySelector(".game-information");
const headerContainer = document.querySelector(".game-header");
const messageContainer = document.querySelector(".message-container");
const message = createMessage("error", "An error has occured");
const queryString = document.location.search;
const paramsProductPage = new URLSearchParams(queryString);
const id = paramsProductPage.get("id");
const pageURL = "https://v2.api.noroff.dev/gamehub/" + id;

/**
 * This function initialises the loading of the content onto the product page. 
 * It uses a setTimeout function to add the content on to the webpage. 
 * It also inclues a function to store the gamedata to the local storage for use in the shopping cart. 
 */
async function init() {
    try {
        const gameData = await getGameDetails(pageURL);

        resultsContainer.innerHTML = `<div class="spinner-product-page"></div>`;
        setTimeout(function () {
            resultsContainer.innerHTML = "";
            headerContainer.innerHTML = `<h1 class="h1heading">${gameData.title}</h1>`
            resultsContainer.innerHTML = createHTMLProductPage(gameData);

            document.querySelector(".add-to-cart").addEventListener('click', () => {
                addToShoppingCart(gameData);
            });
        }, 1000, gameData);
    }
    catch (error) {
        messageContainer.innerHTML = message;
    }
};

/**
 * Creates the HTML for the product page
 * @param {*} gameData - the results fom the call to the API
 * @returns - the HTML for the product page. 
 */
function createHTMLProductPage(gameData) {
    return `<div class="container-gamepage" data-id="${gameData.id}">
                                    <img class="product-page-image " src="${gameData.image.url}" alt = "${gameData.title}">
                                    <div class="info-gamepage"> 
                                        <div><p>${gameData.genre}</p></div>
                                        <div><h2>${gameData.title}</h2></div>

                                        <div>
                                        <fieldset class="game_page">
                                        <label for="digital" id="price-radio" class="label-gamepage">Digital copy: $${gameData.price}</label>
                                        <input type="radio" name="price-check" class="form-input one">
                                        </fieldset>

                                        <fieldset class="game_page">
                                        <label for="Physical" id="price-radio" class="label-gamepage">Physical copy: $${gameData.price}</label>
                                        <input type="radio" name="price-check" class="form-input two">
                                        </fieldset>
                                        </div>

                                        <div class="button-boxes-product-page">
                                            <button type="button" class="cta-gamepage add-to-cart">Add to cart</button>
                                            <a href="contact.html" class="cta-heart"><i class="fa-solid fa-heart heart-icon-gamespage"></i></a>
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
                                        <h2>${gameData.title}</h2></div>
                                        <p>${gameData.description}</p>
                                        <p>Released: ${gameData.released}</p>
                                        </div>
                                    </div>`;
}

/**
 * Adds a game to the local storage. 
 * @param {*} gameData - the game information from the API call. 
 */
function addToShoppingCart(gameData) {
    let cart = getCartOrEmptyCart();
    cart.push(gameData);
    localStorage.setItem('shoppingCart', JSON.stringify(cart))
};

init();

//resultsContainer.innerHTML = createHTMLProductPage(gameData);