const search = document.getElementById('input')
const totalProducts = document.querySelectorAll('.products')

const filterBySearch = () => {
    const Value = search.value;

    totalProducts.forEach(e => {
        const productName = e.querySelector('.product-name').innerHTML
        const productPrice = e.querySelector('.price-of-product').innerHTML

        if (productName.includes(Value) || productPrice.includes(Value)) {
            e.style.display = 'block' 
        }
        else 
        {
            e.style.display = 'none' 
        }
    });
};
search.addEventListener('input', filterBySearch)

const sortList = (category, event) => {
    const list = {
        'all': 'All Items',
        'sneakers': 'Sneakers',
        'wallet': 'Wallet',
        'cap': 'Cap'
    };

    document.querySelectorAll('.nav-items').forEach((el) => {
        if (el.innerHTML === list[category]) {
            el.classList.add('active-navigation-bar')

            return
        }

        el.classList.remove('active-navigation-bar')
    });

    totalProducts.forEach((el) => {
        if (category === 'all' || el.getAttribute('data-category') === category) 
        {
            el.style.display ='block'
        } 
        else 
        {
            el.style.display = 'none'
        }         
    });

    localStorage.setItem('selectedCategory', category)
    
};

const savedCategory = localStorage.getItem('selectedCategory') || 'all'
sortList(savedCategory)