let productsCards = document.querySelectorAll('.article');
let productsDesc = [];
productsCards.forEach(function (productCard) {
    let productName = productCard.querySelector('.featured_name').innerText;
    let productData = productCard.querySelector('.featured_data').innerText;
    let productPrice = productCard.querySelector('.featured_priceValue').innerText;
    productsDesc.push({
        productName,
        productData,
        productPrice
    });
});
console.log(productsDesc);