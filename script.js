const productContainer = document.getElementById('products_container');
const Products = productContainer.getElementsByClassName('products');

function sortList(category, event) {
    
    for (let i = 0; i < Products.length; i++) {
        const Items = Products[i];
        
        if (category == 'all' || Items.getAttribute('data-category') == category) {
            Items.style.display = 'block';
        } else {
            Items.style.display = 'none';
        }
    }

}

sortList('all');