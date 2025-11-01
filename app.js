let fragrance = {
    executiveRange: {
        title: "Executive Range",
        items: [
            {
                imgURL: "./assets/Perfume-1.webp",
                name: "Catch 22",
                description: "Our #1 Best Seller 🏆",
                rating: 495,
                price: "1,990",
            },
            {
                imgURL: "./assets/Perfume-2.webp",
                name: "Merry Me",
                description: "#1 Women's Best-Seller 🏆",
                rating: 132,
                price: "1,890",
            },
            {
                imgURL: "./assets/Perfume-3.webp",
                name: "Tipping Point",
                description: "Our #1 Office Wear! 👔",
                rating: 158,
                price: "2.390",
            },
            {
                imgURL: "./assets/Perfume-4.webp",
                name: "Smash My Head (EDP)",
                description: "Our Top Rated Perfume ⭐",
                rating: 207,
                price: "2,790",
            },
            {
                imgURL: "./assets/Perfume-5.webp",
                name: "5 Samples of Your Choice",
                description: "Our Signature Scents",
                rating: 11,
                price: "1,990",
            },
        ]
    },
    sensoryRange: {
        title: "Sensory Range",
        items: [
            {
                imgURL: "./assets/perfume-6.webp",
                name: "In My Dreams",
                description: "Best Selling Green Perfume",
                rating: 65,
                price: "1,430",
            },
            {
                imgURL: "./assets/perfume-7.webp",
                name: "Cross My Heart",
                description: "The Most Noticeable Scent!",
                rating: 73,
                price: "1,750",
            },
            {
                imgURL: "./assets/Untitled design (23).png",
                name: "Dope",
                description: "Outstanding Sporty Fragrance",
                rating: 19,
                price: "1.230",
            },
            {
                imgURL: "./assets/perfume-9.webp",
                name: "Lost Light",
                description: "Second Best Floral Fragrance 🏆",
                rating: 31,
                price: "1,690",
            },
            {
                imgURL: "./assets/perfume-10.webp",
                name: "The Legend",
                description: "Finest Classical - Modern Combo",
                rating: 72,
                price: "1,390",
            },
        ]

    },
    poeticRange: {
        title: "Poetic Range",
        items: [
            {
                imgURL: "./assets/Untitled design (24).png",
                name: "Iqbal",
                description: "The Poet's Fragrance",
                rating: 17,
                price: "1,590",
            },
            {
                imgURL: "./assets/perfume-12.webp",
                name: "Catch 22 - Gold Edition",
                description: "The Premium Gold Fragrance",
                rating: 32,
                price: "1,690",
            },
            {
                imgURL: "./assets/perfume-13.webp",
                name: "Rabt",
                description: "Top Woody Spicy Fragrance",
                rating: 11,
                price: "1.490",
            },
            {
                imgURL: "./assets/Untitled design (25).pn",
                name: "Hisar",
                description: "Smoky Vanilla Pleasure",
                rating: 18,
                price: "3,990",
            },
            {
                imgURL: "./assets/Untitled design (26).png",
                name: "Pocket Perfume Trio",
                description: "Perfumes that fit anywhere",
                rating: 87,
                price: "4,290",
            },
        ]

    }
}


    let cards1 = document.getElementById("cards1")
    for (let i = 0; i < fragrance.executiveRange.items.length; i++) {
        cards1.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img width=280 height=300 src="${fragrance.executiveRange.items[i].imgURL}" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${fragrance.executiveRange.items[i].name}</h5>
                        <p class="card-text-seller">${fragrance.executiveRange.items[i].description}</p>
                        <div class="rating-cards">
                            <i class="fa-solid fa-star fa-sm" style="color: #d57760;"></i>
                            <i class="fa-solid fa-star fa-sm" style="color: #d57760;"></i>
                            <i class="fa-solid fa-star fa-sm" style="color: #d57760;"></i>
                            <i class="fa-solid fa-star fa-ms" style="color: #d57760;"></i>
                            <i class="fa-solid fa-star fa-sm" style="color: #d57760;"></i>
                            <p class="rating-amount">( ${fragrance.executiveRange.items[i].rating} )</p>
                        </div>
                        <div class="perfume-amount">
                            <p class="card-text-from">from</p>
                            <p class="per-price">Rs.${fragrance.executiveRange.items[i].price}</p>
                        </div>
                    </div>
                </div>`
    }

    let cards2 = document.getElementById("cards2")
    for (let i = 0; i < fragrance.sensoryRange.items.length; i++) {
        cards2.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img width=280 height=300 src="${fragrance.sensoryRange.items[i].imgURL}" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${fragrance.sensoryRange.items[i].name}</h5>
                        <p class="card-text-seller">${fragrance.sensoryRange.items[i].description}</p>
                        <div class="rating-cards">
                            <i class="fa-solid fa-star fa-sm" style="color: #d57760;"></i>
                            <i class="fa-solid fa-star fa-sm" style="color: #d57760;"></i>
                            <i class="fa-solid fa-star fa-sm" style="color: #d57760;"></i>
                            <i class="fa-solid fa-star fa-ms" style="color: #d57760;"></i>
                            <i class="fa-solid fa-star fa-sm" style="color: #d57760;"></i>
                            <p class="rating-amount">( ${fragrance.sensoryRange.items[i].rating} )</p>
                        </div>
                        <div class="perfume-amount">
                            <p class="card-text-from">from</p>
                            <p class="per-price">Rs.${fragrance.sensoryRange.items[i].price}</p>
                        </div>
                    </div>
                </div>`
    }

    let cards3 = document.getElementById("cards3")
    for (let i = 0; i < fragrance.poeticRange.items.length; i++) {
        cards3.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img width=280 height=300 src="${fragrance.poeticRange.items[i].imgURL}" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${fragrance.poeticRange.items[i].name}</h5>
                        <p class="card-text-seller">${fragrance.poeticRange.items[i].description}</p>
                        <div class="rating-cards">
                            <i class="fa-solid fa-star fa-sm" style="color: #d57760;"></i>
                            <i class="fa-solid fa-star fa-sm" style="color: #d57760;"></i>
                            <i class="fa-solid fa-star fa-sm" style="color: #d57760;"></i>
                            <i class="fa-solid fa-star fa-ms" style="color: #d57760;"></i>
                            <i class="fa-solid fa-star fa-sm" style="color: #d57760;"></i>
                            <p class="rating-amount">( ${fragrance.poeticRange.items[i].rating} )</p>
                        </div>
                        <div class="perfume-amount">
                            <p class="card-text-from">from</p>
                            <p class="per-price">Rs.${fragrance.poeticRange.items[i].price}</p>
                        </div>
                    </div>
                </div>`
    }

