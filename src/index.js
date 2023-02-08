function getRamen() {
    fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(data => renderRamen(data))
}
getRamen();


const ramenMenu = document.querySelector("#ramen-menu")

//Ramen details
const ramenImage = document.querySelector("#ramen-detail > img")
const ramenName = document.querySelector("#ramen-detail > h2")
const ramenRes = document.querySelector("#ramen-detail > h3")
const ramenRating = document.querySelector("#rating-display")
const ramenComment = document.querySelector("#comment-display")



function renderRamen(ramens) {
    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        ramenMenu.append(img);
        img.addEventListener('click', () => { 
            ramenImage.src = ramen.image
            ramenName.textContent = ramen.name
            ramenRes.textContent = ramen.restaurant
            ramenRating.textContent = ramen.rating
            ramenComment.textContent = ramen.comment
        })
    })
}


function newRamen() {
    const newRamenForm = document.querySelector("#new-ramen")
    newRamenForm.addEventListener('submit', (e) => {
        e.preventDefault();
            let newObject = {
                name: e.target.name.value,
                restaurant: e.target.restaurant.value,
                image: e.target.image.value,
                rating: parseInt(e.target.rating.value),
                comment: e.target['new-comment'].value,
            }
        console.log(newObject)
    })
}
newRamen();