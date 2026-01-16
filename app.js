import { fragrance, productCard } from "./data.js";

let cards1 = document.getElementById("cards1")
for (let i = 0; i < fragrance.executiveRange.items.length; i++) {
    cards1.innerHTML += productCard(
        fragrance.executiveRange.items[i].imgURL,
        fragrance.executiveRange.items[i].name,
        fragrance.executiveRange.items[i].description,
        fragrance.executiveRange.items[i].rating,
        fragrance.executiveRange.items[i].price
    )
}

let cards2 = document.getElementById("cards2")
for (let i = 0; i < fragrance.sensoryRange.items.length; i++) {
    cards2.innerHTML += productCard(
        fragrance.sensoryRange.items[i].imgURL,
        fragrance.sensoryRange.items[i].name,
        fragrance.sensoryRange.items[i].description,
        fragrance.sensoryRange.items[i].rating,
        fragrance.sensoryRange.items[i].price
    )
}

let cards3 = document.getElementById("cards3")
for (let i = 0; i < fragrance.poeticRange.items.length; i++) {
    cards3.innerHTML += productCard(
        fragrance.poeticRange.items[i].imgURL,
        fragrance.poeticRange.items[i].name,
        fragrance.poeticRange.items[i].description,
        fragrance.poeticRange.items[i].rating,
        fragrance.poeticRange.items[i].price
    )
}

let cards4 = document.getElementById("cards4")
for (let i = 0; i < fragrance.summerDeals.items.length; i++) {
    cards4.innerHTML += productCard(
        fragrance.summerDeals.items[i].imgURL,
        fragrance.summerDeals.items[i].name,
        fragrance.summerDeals.items[i].description,
        fragrance.summerDeals.items[i].rating,
        fragrance.summerDeals.items[i].price
    )
}

let cards5 = document.getElementById("cards5")
for (let i = 0; i < fragrance.oud.items.length; i++) {
    cards5.innerHTML += productCard(
        fragrance.oud.items[i].imgURL,
        fragrance.oud.items[i].name,
        fragrance.oud.items[i].description,
        fragrance.oud.items[i].rating,
        fragrance.oud.items[i].price
    )
}

let cards6 = document.getElementById("cards6")
for (let i = 0; i < fragrance.ahl_E_Oud.items.length; i++) {
    cards6.innerHTML += productCard(
        fragrance.ahl_E_Oud.items[i].imgURL,
        fragrance.ahl_E_Oud.items[i].name,
        fragrance.ahl_E_Oud.items[i].description,
        fragrance.ahl_E_Oud.items[i].rating,
        fragrance.ahl_E_Oud.items[i].price
    )
}

