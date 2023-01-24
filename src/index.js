// write your code here
function getRamen() {
    fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(data => renderRamen(data))
}
getRamen();


const ramenMenu = document.querySelector("#ramen-menu")

//Ramen details
const ramenImg = document.querySelector("#ramen-detail > img")
const ramenName = document.querySelector("#ramen-detail > h2")
const ramenRestaurant = document.querySelector("#ramen-detail > h3")
const ramenRatings = document.querySelector("#rating-display")
const ramenComment = document.querySelector("#comment-display")


function renderRamen(ramens) {
    ramens.forEach(ramen => {
        const ramenImage = document.createElement('img');
        ramenImage.src = ramen.image
        ramenMenu.append(ramenImage);
        ramenImage.addEventListener('click', (e) => {
            e.preventDefault();
            ramenImg.src = ramen.image
            ramenName.textContent = ramen.name
            ramenRestaurant.textContent = ramen.restaurant
            ramenRatings.textContent = ramen.rating
            ramenComment.textContent = ramen.comment
        })
    })
}

function newRamen() {
    const ramenForm = document.querySelector('#new-ramen')
    ramenForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let myObj = {
            name: e.target.name.value,
            restaurant: e.target.restaurant.value,
            image: e.target.image.value,
            rating: parseInt(e.target.rating.value),
            comment: e.target['new-comment'].value
        }
        renderRamen([myObj])
    })
}
newRamen()
