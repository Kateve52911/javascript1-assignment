import { createMessage, getGameDetails } from './utility/utils.js';

document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.querySelector('.cart-container');

    const cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

    cartContainer.innerHTML = cart.map(item =>
        `<div class="cart-item" data-id="${item.id}">
        <img src="${item.image.url}" alt="${item.title}" class="gameimage-checkout" >
        <div class="details_checkout">
            <h2>${item.title}</h2>
            <p>${item.genre}</p>
            <p>$${item.price}</p>
            <button type="button" class="cta-delete"><i class="fa-solid fa-trash-can" style="color: #feffff;" class="cta-delete"></i></button>
        </div>
    </div>
    `);

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    }

    document.querySelectorAll('.cta-delete').forEach(button => {
        button.addEventListener('click', function () {
            const itemId = this.parentElement.getAttribute('data-id');
            removeFromCart(itemId);
        })
    });
});

function removeFromCart() {
    let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    cart = cart.filter(item => item.id !== item.id);
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    const cartItem = document.querySelector(`.cart-item[data-id="${itemId}"]`);
    if (cartItem) {
        cartItem.remove();
    }

    // Update cart message if the cart is empty
    if (cart.length === 0) {
        const cartContainer = document.querySelector('.cart-container');
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    }
}



/* function deleteItem(event) {
    const itemElement = event.target.closest('li');
    if (itemElement) {
        itemElement.remove();
    }
};

document.querySelectorAll('.cta-delete').forEach(button => {
    button.addEventListener('click', deleteItem);
}); */