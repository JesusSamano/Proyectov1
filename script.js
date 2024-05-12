const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})
// Función para actualizar el precio de manera aleatoria cada 30 segundos
function updatePrices() {
    const prices = document.querySelectorAll('.price');
    prices.forEach(priceElement => {
        const currentPrice = parseFloat(priceElement.textContent.replace('$', '').replace(/,/g, ''));
        const randomChange = Math.random() * currentPrice * 0.5; // Cambio aleatorio entre 0 y el 50% del precio actual
        const newPrice = currentPrice - randomChange; // Restar el cambio aleatorio al precio actual
        if (newPrice >= currentPrice * 0.5) { // Verificar que el nuevo precio no sea menos del 50% del valor original
            priceElement.textContent = '$' + newPrice.toLocaleString(); // Actualizar precio en pantalla
        }
    });

    // Después de actualizar los precios, llamar a la función para encontrar el precio más bajo y mostrar la alerta
    findLowestPriceAndAlert();
}

// Función para encontrar el precio más bajo de todos los autos y mostrar una ventana emergente
function findLowestPriceAndAlert() {
    const prices = document.querySelectorAll('.price');
    let lowestPrice = Infinity;
    let lowestCarName = '';
    prices.forEach(priceElement => {
        const currentPrice = parseFloat(priceElement.textContent.replace('$', '').replace(/,/g, ''));
        if (currentPrice < lowestPrice) {
            lowestPrice = currentPrice;
            lowestCarName = priceElement.parentElement.querySelector('h2').textContent;
        }
    });
    alert(`El precio más bajo es de ${lowestCarName} con un valor de $${lowestPrice.toLocaleString()}`);
}

// Ejecutar la función updatePrices cada 30 segundos
setInterval(updatePrices, 30000);

// Ejecutar la función findLowestPriceAndAlert después de un tiempo determinado (por ejemplo, 5 minutos)
setTimeout(findLowestPriceAndAlert, 50000); // 300000 milisegundos = 5 minutos
