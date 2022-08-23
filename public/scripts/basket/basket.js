'use strict';
const basketCounterEl = document.querySelector('.counter');
const basketEl = document.querySelector('.basket');
const openBasketBtn = document.querySelector('.basketIcon');
const basketTotalEl = document.querySelector('.basketTotal');
const basketTotalValueEl = document.querySelector('.basketTotalValue');

openBasketBtn.addEventListener('click', function () {
    basketEl.classList.toggle('hidden')
})

let basket = {};

/** Методо добавляет объект в корзину
 * @param {number} productId
 */

function addProductIntoObject(productId) {
    if (!(productId in basket)) {
        basket[productId] = 1;
    }
    else {
        basket[productId]++;
    }
}

/** Функция срабатывает когда нужно отрисовать продукт в корзине
 * @param {number} productId
 */

function renderProductIntoBasket(productId) {
    let productExist = document.querySelector(`.productCount[data-productId="${productId}"]`);
    if (productId) {
        increaseProductCount(productId);
        recalculateSumForProduct(productId);
    }
    else {
        renderNewProductIntoBasket(productId);
    }
}

/** Функция отрисовывает новый товар в корзине
 * @param {number} productId
 */

function renderNewProductIntoBasket(productId) {
    let productRow = `
        <div class="basketRow">
            <div>${products[productId].name}</div>
            <div>
                <span class="productCount" data-productId="${productId}">1</span> шт.
            </div>
            <div>$${products[productId].price}</div>
            <div>
                $<span class="productTotalRow" data-productId="${productId}">${products[productId].price}</span>
            </div>
        </div>
    `;
    basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
}

/**
 * Функция увеличивает количество товаров в строке в корзине.
 * @param {number} productId
 */

function increaseProductCount(productId) {
    const productCountEl = document.querySelector(`.productCount[data-productId="${productId}"]`);
    productCountEl.textContent++;
}

/** Функция пересчитывает стоимость товара умноженное на количество товара в корзине
 * @param {number} productId
 */

function recalculateSumForProduct(productId) {
    let productTotalRowEl = document.querySelector(`.productCount[data-productId="${productId}"]`);
    let totalPriceForRow = (basket[productId] * products[productId].price).toFixed(2);
    productTotalRowEl.textContent = totalPriceForRow;
}

/** Функция пересчитывает окончательную сумму в корзине
 * @param {number} productId
 */

function calculateAndRenderTotalBasketSum() {
    let TotalSum = 0;
    for (let productId in basket) {
        TotalSum += basket[productId] * products[productId].price;
    }
    basketTotalValueEl.textContent = TotalSum.toFixed(2);
}

/**
 * Функция увеличивает счетчик количества товаров рядом с иконкой корзины.
 */
function increaseProductsCount() {
    basketCounterEl.textContent++;
}

/**
 * @param {number} productId
 */
function addProductIntoBasket(productId) {
    increaseProductsCount();
    addProductIntoObject(productId);
    renderProductIntoBasket(productId);
    calculateAndRenderTotalBasketSum();
}
