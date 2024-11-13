let currentStep = 'login'; // Track the current active step
    const cartItems = [];
    let totalPrice = 0;
    // Add item to cart function
    function addItemToCart(name, price) {
        const existingItem = cartItems.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cartItems.push({ name, price, quantity: 1 });
        }
        updateCart();
    }
    // Remove item from cart function
    function removeItemFromCart(name) {
        const itemIndex = cartItems.findIndex(item => item.name === name);
        if (itemIndex > -1) {
            cartItems.splice(itemIndex, 1);
        }
        updateCart();
    }
    // Update quantity of item in cart
    function updateQuantity(name, change) {
        const item = cartItems.find(item => item.name === name);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) removeItemFromCart(name);
            updateCart();
        }
    }
    // Render the cart items and total
    function updateCart() {
        const cartItemsContainer = document.getElementById("cart-items");
        cartItemsContainer.innerHTML = "";

        totalPrice = 0;
        cartItems.forEach(item => {
            const itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;
            cartItemsContainer.innerHTML += `
                <div class="cart-item">
                    <div class="item-details">
                        <span class="item-name">${item.name}</span>
                        <span class="item-price">₹${itemTotal}</span>
                        <span class="remove-btn" onclick="removeItemFromCart('${item.name}')">Remove</span>
                    </div>
                    <div class="item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity('${item.name}', -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity('${item.name}', 1)">+</button>
                    </div>
                </div>
            `;
        });

        document.getElementById("total-price").textContent = `₹${totalPrice}`;
    }    