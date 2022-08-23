'use strict';

const pathToImages = 'img';
const pathToProductsImages = `${pathToImages}/featured`;
const featuredItemsEl = document.querySelector('.content');

/**
 * @param {ProductDTO} product объект с информацией о продукте
 * @returns {string} html-разметка карточки товара
 */

function getProductMarkup(product) {
    return `
        <div class="article">
            <div class="article_overlay">
                <button type="button" class="article_overlay_add" data-productId="${product.id}">
                    <img class="article_overlay_add_click" src="${pathToImages}/cart_add.svg" alt="add">
                    <span class="article_overlay_add_click">Add to Cart</span>
                </button>
            </div>
            <img src="${pathToProductsImages}/${product.image}" alt="${product.name}">
            <div class="featured_name">
                <p class="name_article">${product.name}</p>
            </div>
            <div class="featured_data">
                <p class="pg_article">${product.description}</p>
            </div>
            <div class="featured_price">
                <p class="price_article">$<span class="featured_priceValue">${product.price}</span></p>
            </div>
        </div>
    `
}
/**
 * Функция вставляет карточки товаров в страницу.
 * @param {ProductDTO[]} products массив товаров из файла products.js
 * @param {HTMLDivElement} featuredItemsEl элемент с классом .featuredItems
 */
function insertProductsIntoPage(products, featuredItemsEl) {
    let productsMarkup = '';
    for (let product of products) {
        productsMarkup += getProductMarkup(product);
    }
    featuredItemsEl.insertAdjacentHTML('afterbegin', productsMarkup);
}


function AddCartListeners() {
    let AddToCartAlerts = document.querySelectorAll('button[data-productId]');
    AddToCartAlerts.forEach(function (button) {
        button.addEventListener('click', addedProductHandler)
    });
};
/**
 * Функция-обработчик по клику.
 * @param {MouseEvent} event
 */

function addedProductHandler(event) {
    const productId = event.currentTarget.getAttribute('data-productId');
    addProductIntoBasket(productId)
}

insertProductsIntoPage(products, featuredItemsEl);
AddCartListeners();