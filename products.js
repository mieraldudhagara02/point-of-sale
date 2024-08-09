const products = [

    {
        name: "Neemans",
        description: "cotton classic sneakers <br> for Men",
        price: "&#8377;999",
        image: "https://imgs.search.brave.com/_c9oLrMDPtOW3YHzAtcclA0ZYacZHZo7UJgcxiY06bA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcx/MjI0NDY5L3Bob3Rv/L2NhbnZhcy1zaG9l/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9b0Q1QTYxeHhn/bmEtMFdOYWZOY1p4/eVNTd0NpRW5VQ3M1/d2lESlZmYjJ0UT0",
        alt: "sneaker_1",
        category: "sneakers"
    },

    {
        name: "HRX",
        description: "HRX-118 Sneakers <br> For Men",
        price: "&#8377;993",
        image: "https://imgs.search.brave.com/g42Y7Y8j9lt0PyLU_LPjk9Sr2KW-DA3P5kyIsUH36Fo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjIz/MjcwODM2L3Bob3Rv/L21vZGVybi1zcG9y/dC1zaG9lcy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9RDd4/T2l5VjNUTVFnVXVJ/cWxWdnV0UG80OWd5/TUc5ZjVVODJtY3Z1/RGMwWT0",
        alt: "sneaker_2",
        category: "sneakers"
    },
    
    {
        name: "asian",
        description: "Boston-01 Chunky <br> Sneakers",
        price: "&#8377;822",
        image: "https://imgs.search.brave.com/_l4b4UWGOyKw6LT6A651kN3fWUgs4D8kXRp38ianmw4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjkx/NjE2MTM2L3Bob3Rv/L3JlZC1zbmVha2Vy/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9QkJNTk94Um5O/TmRhZUVabU1vb0Ex/WHU5RXhxLW9sd3JQ/OW4zQi1pYUpDVT0",
        alt: "sneaker_3",
        category: "sneakers"
    },

    {
        name: "asian",
        description: "Sneaker Casual Shoes <br> For Men",
        price: "&#8377;772",
        image: "https://imgs.search.brave.com/Tref6WhdOsSQi95-kaiHPu6j5DzoTb_EeYCRh1mxF3A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDkx/NjAzODIyL3Bob3Rv/L3BhaXItb2YtZ3Jl/ZW4tc25lYWtlcnMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVJ3LURLUkNRRkQ0/RnNMbXNUZDltU2tB/QkVLZ3I5RkRoQ1Bk/RGxIODV4a2M9",
        alt: "sneaker_4",
        category: "sneakers"
    },

    {
        name: "Puma",
        description: "Leather Stripe <br> Wallet",
        price: "&#8377;749",
        image: "https://imgs.search.brave.com/gTBQYAlJamV8mwBTVicxbc0FdwEUcnATKkkXCxN6WxE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG9wb3ZsZWF0aGVy/LmNvbS9jZG4vc2hv/cC9maWxlcy9sZWF0/aGVyLTUtY2FyZC13/YWxsZXQtZW5nbGlz/aC10YW4tcG9wb3Yt/bGVhdGhlci00MTMx/MDI1MTQ4MzM1OS5q/cGc_dj0xNzA2MDcy/NzYxJndpZHRoPTE2/MDA",
        alt: "wallet_1",
        category: "wallet"
    },

    {
        name: "VOGARD",
        description: "Unisex Brown <br> Wallet",
        price: "&#8377;450",
        image: "https://imgs.search.brave.com/kQ_ClhS3f_I9PdaeDK8Z6OIs1-90aN8BucQJwAKj-IA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG9wb3ZsZWF0aGVy/LmNvbS9jZG4vc2hv/cC9maWxlcy9sZWF0/aGVyLTUtY2FyZC13/YWxsZXQtaGVyaXRh/Z2UtYnJvd24tcG9w/b3YtbGVhdGhlci00/MTMxMDI1NDQzMjQ3/OS5qcGc_dj0xNzA2/MDcyNTc4JndpZHRo/PTE2MDA",
        alt: "wallet_2",
        category: "wallet"
    },

    {
        name: "Sassora",
        description: "Leather Envelope <br> Wallet",
        price: "&#8377;934",
        image: "https://imgs.search.brave.com/5gOxNeymY4D-gi7ITYHHp8yofWFT8Tmq56oahJtuxm4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG9wb3ZsZWF0aGVy/LmNvbS9jZG4vc2hv/cC9maWxlcy9sZWF0/aGVyLTUtY2FyZC13/YWxsZXQtYmxhY2st/cG9wb3YtbGVhdGhl/ci00MTMxMDI0ODcz/MDg0Ny5qcGc_dj0x/NzA2MDczMjkxJndp/ZHRoPTE2MDA",
        alt: "wallet_3",
        category: "wallet"
    },

    {
        name: "Allen Solly",
        description: "Men Solid Two <br> Fold Wallet",
        price: "&#8377;766",
        image: "https://imgs.search.brave.com/UxZuL5P3Muv21LV1Hm7iXgRuuL8B_F8t3ixfdrwTlW8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG9wb3ZsZWF0aGVy/LmNvbS9jZG4vc2hv/cC9maWxlcy9sZWF0/aGVyLXRyYWRpdGlv/bmFsLXdhbGxldC1o/ZXJpdGFnZS1icm93/bi1wb3Bvdi1sZWF0/aGVyLTQxNDA5MjE0/NTc4OTExLmpwZz92/PTE3MDcxOTU1NDQm/d2lkdGg9MTYwMA",
        alt: "wallet_4",
        category: "wallet"
    },

    {
        name: "Nike",
        description: "Tech Swoosh <br> Cap",
        price: "&#8377;766",
        image: "https://imgs.search.brave.com/C4Gp2eUrlLAY_ZfC-_U3P6I-NU2cvXe5EeH7R_nAhF4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTEy/NzMyNTc0L3Bob3Rv/L2NhcC1vbi13aGl0/ZS1iYWNrZ3JvdW5k/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1ZQk5WTEpxbm5U/MWZwbVJ6SlBfQnFT/Tkg0a0QwM3BscHhG/MHFTVWRCQThRPQ",
        alt: "cap_1",
        category: "cap"
    },

    {
        name: "New Era",
        description: "Men's Plain Base <br> Ball Cap",
        price: "&#8377;566",
        image: "https://imgs.search.brave.com/qz5ty4o8BGvXb1PZvvnReAX32tkGoqPtc1CwocJE4GI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTI2/MTMxNTAwL3Bob3Rv/L2hhdC1vbi13aGl0/ZS1iYWNrZ3JvdW5k/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz13RWFacXhxc0NB/c3loVC1xc1doOVFS/eGMxRXUwLWtta2tm/TUpUZG1TMnFZPQ",
        alt: "cap_2",
        category: "cap"
    },

    {
        name: "Jack & Jones",
        description: "Cooling Performance <br> Cap",
        price: "&#8377;900",
        image: "https://imgs.search.brave.com/R0bcVq146jQwe6NoBQkiMVV1P9B1Pjq4UZj-Yxlk1kM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg1/MjQ4NzQzL3Bob3Rv/L2Jhc2ViYWxsLWNh/cC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Rkg4eWFhNkJR/OHA5ZzRSeGVyd1dI/d1N3MnVhdWFEUGxT/MlRxS3RtMkNZdz0",
        alt: "cap_3",
        category: "cap"
    },
]

function Products() {

    const Product_container = document.getElementById('products_container')

    products.forEach(product => {
        
        const productDiv = document.createElement('div')
        //productDiv.classList.add('products');
        productDiv.className = 'products'
        productDiv.style.cursor = 'pointer'

        //productDiv.dataset.category = product.category;
        productDiv.setAttribute('data-category', product.category)        
        
        const topPart = document.createElement('div')
        topPart.className = 'top-part-of-product'
        
        const productName = document.createElement('h3')
        productName.className = 'product-name'
        productName.innerHTML = product.name
        
        const description = document.createElement('span')
        description.className = 'description'
        description.innerHTML = product.description
        
        topPart.appendChild(productName)
        topPart.appendChild(description)
        
        const bottomPart = document.createElement('div')
        bottomPart.className = 'bottom-part-of-product'
        
        const price = document.createElement('span')
        price.className = 'price-of-product'
        price.innerHTML = product.price
        
        const image = document.createElement('img')
        image.src = product.image
        image.alt = product.name
        image.className = 'product-img'
        
        bottomPart.appendChild(price)
        bottomPart.appendChild(image)
        
        productDiv.appendChild(topPart)
        productDiv.appendChild(bottomPart)

        // productDiv.addEventListener('click' , function () {
        //     addToOrder(product)
        // })
        
        Product_container.appendChild(productDiv)
    })
}

Products()

// function addToOrder(product)
// {
//     const order_container = document.getElementsByClassName('orders-container')

//     const orderDiv = document.createElement('div')
//     orderDiv.className = 'orders'

//     const Ordered_product_image = document.createElement('img')
//     Ordered_product_image.classList.add = 'ordered-product-img'
//     Ordered_product_image.src = product.image
//     Ordered_product_image.alt = product.name
//     Ordered_product_image.style.backgroundColor = 'blue'

//     const orderedProductName = document.createElement('h5')
//     orderedProductName.classList.add('ordered-product-name')
//     orderedProductName.innerHTML = product.name

//     const decrement = document.createElement('span')
//     decrement.classList.add('decrement')

//     const quantity = document.createElement('span')
//     quantity.classList.add('quantity')
    
//     const increment = document.createElement('span')
//     increment.classList.add('increment')

//     const ordered_product_price = document.createElement('span');
//     ordered_product_price.classList.add('ordered-product-price')
//     ordered_product_price.innerHTML = product.price;

//     orderDiv.appendChild(Ordered_product_image)
//     orderDiv.appendChild(orderedProductName)
//     orderDiv.appendChild(decrement)
//     orderDiv.appendChild(quantity)
//     orderDiv.appendChild(increment)
//     orderDiv.appendChild(ordered_product_price)

//     order_container.appendChild(orderDiv)
// }

function addToOrder()
{
    const order_container = document.getElementsByClassName('orders-container')
    
    const orderDiv = document.createElement('div')
    orderDiv.className = 'orders'

}

order()
