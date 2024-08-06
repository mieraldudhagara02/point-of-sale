document.getElementById('input').addEventListener('input', (event) => {
    const searchInputValue = event.target.value

    document.querySelectorAll('.products').forEach(product => {
        const productName = product.querySelector('.product-name').innerHTML
        const productPrice = product.querySelector('.price-of-product').innerHTML

        if (
            productName.includes(searchInputValue)
            || productPrice.includes(searchInputValue)
        ) {
            product.style.display = 'block'
        } else {
            product.style.display = 'none'
        }
    })
})

const sortList = (category, event) => {
    const list = {
        'all': 'All Items',
        'sneakers': 'Sneakers',
        'wallet': 'Wallet',
        'cap': 'Cap'
    }

    document.querySelectorAll('.nav-items').forEach((el) => {
        if (el.innerHTML === list[category]) {
            el.classList.add('active-navigation-bar')

            return
        }

        el.classList.remove('active-navigation-bar')
    })

    document.querySelectorAll('.products').forEach((product) => {
        if (category === 'all' || product.getAttribute('data-category') === category) {
            product.style.display = 'block'
        } else {
            product.style.display = 'none'
        }
    });

    localStorage.setItem('selectedCategory', category)
};

const savedCategory = localStorage.getItem('selectedCategory') || 'all'
sortList(savedCategory)
