const sortList = (category, event) => {
    const list = {
        'all': 'All Items',
        'sneakers': 'Sneakers',
        'wallet': 'Wallets',
        'cap': 'Cap'
    };

    document.querySelectorAll('.nav-items').forEach((el) => {
        if (el.innerHTML === list[category]) {
            el.classList.add('active-navigation-bar')

            return
        }

        el.classList.remove('active-navigation-bar')
    })

    document.querySelectorAll('.products').forEach((el) => {
        if (category === 'all' || el.getAttribute('data-category') === category) {
            el.style.display = 'block'
        } else {
            el.style.display = 'none'
        }
    })
}

sortList('all')
