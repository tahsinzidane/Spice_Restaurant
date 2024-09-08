document.addEventListener("DOMContentLoaded", function () {
    // Greet based on the time
    function greetBasedOnTime() {
        const greetingMessage = document.getElementById('greeting-message');
        const currentTime = new Date().getHours();

        if (currentTime >= 18 || currentTime < 6) {
            greetingMessage.textContent = "Hello sir, Welcome to Spice Py restaurant ❤️ Have a nice night sir! 😊🌙";
        } else {
            greetingMessage.textContent = "Good Morning sir ☀️☁️! Welcome to Spice Py restaurant";
        }
    }

    greetBasedOnTime();

    // Menu and Ordering System
    const menuItems = [
        {
            id: 1,
            name: "Garlic Bread",
            price: 4.99,
            description: "Delicious garlic bread, crispy and golden.",
            img: 'https://images.unsplash.com/photo-1558679582-7fe9071024c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R2FybGljJTIwQnJlYWR8ZW58MHx8MHx8fDA%3D'
        },
        {
            id: 2,
            name: "Caesar Salad",
            price: 6.99,
            description: "Fresh romaine lettuce with Caesar dressing.",
            img: 'https://images.unsplash.com/photo-1512852939750-1305098529bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2Flc2FyJTIwU2FsYWR8ZW58MHx8MHx8fDA%3D'
        },
        {
            id: 3,
            name: "Mozzarella Sticks",
            price: 7.99,
            description: "Crispy mozzarella sticks with marinara sauce.",
            img: 'https://plus.unsplash.com/premium_photo-1664206964134-fa12b507f282?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW96emFyZWxsYSUyMFN0aWNrc3xlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            id: 4,
            name: "Grilled Chicken Alfredo",
            price: 12.99,
            description: "Creamy Alfredo sauce over grilled chicken.",
            img: 'https://plus.unsplash.com/premium_photo-1723490794835-8cbc340cb73b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R3JpbGxlZCUyMENoaWNrZW4lMjBBbGZyZWRvfGVufDB8fDB8fHww'
        },
        {
            id: 5,
            name: "BBQ Beef Burger with Fries",
            price: 11.99,
            description: "Juicy beef burger with BBQ sauce and fries.",
            img: 'https://images.unsplash.com/photo-1561043433-b0bb121aacef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QkJRJTIwQmVlZiUyMEJ1cmdlciUyMHdpdGglMjBGcmllc3xlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            id: 6,
            name: "Margherita Pizza",
            price: 10.99,
            description: "Classic Margherita pizza with fresh mozzarella.",
            img: 'https://images.unsplash.com/photo-1649688423692-308d2fc1027d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWFyZ2hlcml0YSUyMFBpenphfGVufDB8fDB8fHww'
        },
        {
            id: 7,
            name: "Chocolate Lava Cake",
            price: 6.50,
            description: "Rich chocolate cake with a molten center.",
            img: 'https://images.unsplash.com/photo-1673551490812-eaee2e9bf0ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 8,
            name: "New York Cheesecake",
            price: 5.50,
            description: "Creamy cheesecake with a graham cracker crust.",
            img: 'https://plus.unsplash.com/premium_photo-1694599324094-a1f6922b9a6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 9,
            name: "Ice Cream Sundae",
            price: 4.99,
            description: "Ice cream topped with chocolate sauce and nuts.",
            img: 'https://images.unsplash.com/photo-1541996275318-4890e83660a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SWNlJTIwQ3JlYW0lMjBTdW5kYWV8ZW58MHx8MHx8fDA%3D'
        },
        {
            id: 10,
            name: "Soft Drinks",
            price: 2.99,
            description: "Refreshing selection of soft drinks.",
            img: 'https://images.unsplash.com/photo-1598556482684-044135065fad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U29mdCUyMERyaW5rc3xlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            id: 11,
            name: "Coffee/Tea",
            price: 2.50,
            description: "Freshly brewed coffee or tea.",
            img: 'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q29mZmVlJTJGVGVhfGVufDB8fDB8fHww'
        },
        {
            id: 12,
            name: "Lemonade",
            price: 3.50,
            description: "Freshly squeezed lemonade.",
            img: 'https://images.unsplash.com/photo-1507281549113-040fcfef650e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGVtb25hZGV8ZW58MHx8MHx8fDA%3D'
        }
    ];

    const menuCards = document.getElementById('menu-cards');
    const orderList = document.getElementById('order-list');
    const totalBill = document.getElementById('total-bill');
    const foodModal = document.getElementById('food-modal');
    const modalFoodName = document.getElementById('modal-food-name');
    const modalFoodPrice = document.getElementById('modal-food-price');
    const modalFoodDescription = document.getElementById('modal-food-description');
    const modalAddToOrder = document.getElementById('modal-add-to-order');
    const closeModal = document.getElementById('close-modal');

    let currentFoodItem = null;

    // Display menu items as cards
    menuItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <img src=${item.img} height="100" width="200" alt="" srcset="">
            <h3>${item.name}</h3>
            <p>$${item.price.toFixed(2)}</p>
        `;
        card.addEventListener('click', () => {
            // Open modal with food details
            currentFoodItem = item;
            modalFoodName.textContent = item.name;
            modalFoodPrice.textContent = `$${item.price.toFixed(2)}`;
            modalFoodDescription.textContent = item.description;
            foodModal.style.display = 'block';
        });
        menuCards.appendChild(card);
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        foodModal.style.display = 'none';
    });

    // Add to order
    modalAddToOrder.addEventListener('click', () => {
        if (currentFoodItem) {
            const li = document.createElement('li');
            li.textContent = `${currentFoodItem.name} - $${currentFoodItem.price.toFixed(2)}`;
            orderList.appendChild(li);

            let currentTotal = parseFloat(totalBill.textContent);
            currentTotal += currentFoodItem.price;
            totalBill.textContent = currentTotal.toFixed(2);

            // Close modal after adding
            foodModal.style.display = 'none';
        }
    });

    // Close modal if clicked outside of the content
    window.addEventListener('click', (event) => {
        if (event.target === foodModal) {
            foodModal.style.display = 'none';
        }
    });
});
