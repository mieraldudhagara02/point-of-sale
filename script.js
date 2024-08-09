function sort_search(category, searchInputValue)
{    
    let found = false
    document.querySelectorAll('.products').forEach(product => {
        
        const matchesCategory = category === 'all' || product.getAttribute('data-category') === category;
        const matchesSearch = product.querySelector('.product-name').innerHTML.includes(searchInputValue) ||
                              product.querySelector('.price-of-product').innerHTML.includes(searchInputValue);

        if(matchesCategory && matchesSearch)
        {
            product.style.display = 'block'
            found = true;
        }
        else
        {
            product.style.display = 'none'
        }

        document.getElementById('no-data').style.display = found ? 'none' : 'block'
    })
}

const sortList = (category) => {
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
  
    const searchInputValue = document.getElementById('input').value;
    sort_search(category, searchInputValue);

    localStorage.setItem('selectedCategory', category)
};

const retrieveSavedSearchInputValue = localStorage.getItem('searchProduct') || ''
const retrieveSavedCategory = localStorage.getItem('selectedCategory') || 'all'

document.getElementById('input').value = retrieveSavedSearchInputValue;

document.getElementById('input').addEventListener('input', (event) => {
    const searchInputValue = event.target.value;
    const selectedCategory = localStorage.getItem('selectedCategory') || 'all';
    sort_search(selectedCategory, searchInputValue);
    localStorage.setItem('searchProduct', searchInputValue);
});

sort_search(retrieveSavedCategory, retrieveSavedSearchInputValue)
sortList(retrieveSavedCategory)