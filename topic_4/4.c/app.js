// app.js

document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('itemInput');
    const priceInput = document.getElementById('priceInput');
    const addItemButton = document.getElementById('addItemButton');
    const itemList = document.getElementById('itemList');
    const cartList = document.getElementById('cartList');
    const totalPriceElement = document.getElementById('totalPrice');

    let items = [];
    let cart = [];

    addItemButton.addEventListener('click', () => {
        const itemText = itemInput.value.trim();
        const itemPrice = parseFloat(priceInput.value.trim());
        if (itemText && !isNaN(itemPrice) && itemPrice > 0) {
            const item = {
                id: Date.now(),
                text: itemText,
                price: itemPrice,
                quantity: 1
            };
            items.push(item);
            renderItems();
            itemInput.value = '';
            priceInput.value = '';
        }
    });

    itemList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const id = e.target.dataset.id;
            const item = items.find(item => item.id == id);
            if (item) {
                cart.push(item);
                items = items.filter(item => item.id != id);
                renderItems();
                renderCart();
                updateTotalPrice();
            }
        }
    });

    cartList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const id = e.target.dataset.id;
            const action = e.target.dataset.action;
            const item = cart.find(item => item.id == id);
            if (action === 'remove') {
                cart = cart.filter(item => item.id != id);
            } else if (action === 'increase') {
                item.quantity++;
            } else if (action === 'decrease' && item.quantity > 1) {
                item.quantity--;
            }
            renderCart();
            updateTotalPrice();
        }
    });

    function renderItems() {
        itemList.innerHTML = '';
        items.forEach(item => {
            const itemElement = document.createElement('li');
            itemElement.className = 'item';
            itemElement.innerHTML = `
                <span>${item.text} - $${item.price.toFixed(2)}</span>
                <button data-id="${item.id}">Add to Cart</button>
            `;
            itemList.appendChild(itemElement);
        });
    }

    function renderCart() {
        cartList.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <span>${item.text} - $${item.price.toFixed(2)} x ${item.quantity}</span>
                <div>
                    <button data-id="${item.id}" data-action="increase">+</button>
                    <button data-id="${item.id}" data-action="decrease">-</button>
                    <button data-id="${item.id}" data-action="remove">Remove</button>
                </div>
            `;
            cartList.appendChild(cartItem);
        });
    }

    function updateTotalPrice() {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalPriceElement.textContent = `Total Price: $${total.toFixed(2)}`;
    }
});
