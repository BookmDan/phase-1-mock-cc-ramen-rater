// write your code here
// document.addEventListener("DOMContentLoaded", function () {
  
// })

// const menu = document.querySelector('#ramen-menu');
// getAllRamen();
// formEventListener();

// function getAllRamen() {
//   fetch('http://localhost:3000/ramens')
//   .then(response => response.json())
//   .then(data)
// }

// function ramenItems(rArray) {
//   rArray.forEach(ramen => {
//     renderImage(ramen);
//   })
// }

// function renderImage(ramen) {
//   const img = document.createElement('img')
//   img.src = ramen.image;
//   menu.append(img)

//   img.addEventListener("click", function (e) {
//     getRamen(e.target.dataset.id);
//   })
// }


// function getRamen(ramenId){
//   fetch(`http://localhost:3000/ramens/${ramenId}`)
//   .then(response => response.json())
//   .then(ramen => {
//       renderDetails(ramen)
//   })
// }

// function renderDetails(ramen) {
//   // const ramenDetail = document.getElementById('ramen-detail')
//   // ramendDetail.innerHTML =
//   //   `
//   //   <img
//   //   `
//   const img = document.querySelector(".detail-image") // for class, use '.'
//   const h2 = document.querySelector(".name")
//   const h3 = document.querySelector(".restaurant")
//   const ratingInput = document.querySelector("#rating")
//   ratingInput.value = ramen.rating
//   const commentInput = document.querySelector("#comment")
//   commentInput.value = ramen.comment
//   img.src = ramen.image;
//   img.alt = ramen.name;
//   h2.textContent = ramen.name
//   h3.textContent = ramen.restaurant
//   const ramenForm = document.querySelector("#ramen-rating")
//   ramenForm.dataset.id = ramen.id;
// }

// function formEventListener(){

//   const ramenForm = document.querySelector("#ramen-rating")
//   ramenForm.addEventListener("submit", function(e) {
//       e.preventDefault();
//       // console.log(e);
//       const newRating = document.querySelector("#rating").value
//       const newComment = document.querySelector("#comment").value
//       // const r = e.target.rating.value    
//       const updatedObj = {
//           id: parseInt(ramenForm.dataset.id),
//           rating: newRating,
//           comment: newComment
//       }

//       updateRamen(updatedObj);
//       e.target.reset();
//   })
// }

// function updateRamen(updatedObj){
//   fetch(`http://localhost:3000/ramens/${updateObj.id}`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(updatedObj),
//   })
//     .then(response => response.json())
//     .then(updatedObj => {
//       const ratingInput = document.querySelector("#rating")
//       const commentInput = document.querySelector("#comment")
//       ratingInput.value = updatedObj.rating
//       commentInput.value = updatedObj.comment
//   })
    
// }

//---------
// Your code here
const API = "http://localhost:3000/ramens";
el('new-ramen').addEventListener("submit",createNewramen )

fetch(API)
  .then((res) => res.json())
  .then(renderRamens);

function renderRamens(ramens) {
  ramens.forEach(renderRamen);
}
  
function renderRamen(ramen) {
  const ramenMenuDiv = el("ramen-menu");

  const ramenImage = document.createElement("img") 
  ramenImage.src = ramen.image;
  ramenMenuDiv.append(ramenImage);

  // ramenImage.addEventListener("click", e=> console.log(e.target.src))
  ramenImage.addEventListener("click", (e) => renderDetails(ramen))
}

// click on image and want something to happen
function renderDetails(ramen) {
  // console.log(ramen.image)
  // const ramenDetailDiv = document.getElementById('ramen-detail');
  // ramenDetailDiv.append(detailImage)
  // ramenDetailDiv.append(ramenName)
  // ramenDetailDiv.append(restarauntName)
  const ratingDisplay = el("rating-display")
  const commentDisplay = el('comment-display')  

  const detailImage = el('detail-image')
  const ramenName = qs(".name")  //el('ramen-name')
  const restarauntName = qs(".restaurant")  //el('rest-name')

  detailImage.src = ramen.image
  detailImage.alt = ramen.name;
  ramenName.textContent = ramen.name
  restarauntName.textContent = ramen.restaraunt

  ratingDisplay.textContent = ramen.rating;
  commentDisplay.textContent = ramen.comment;
}

function el(elementName) {
  return document.getElementById(elementName)
} 

function qs(className) {
  return document.querySelector(className)
}

function createNewramen(e) {
  e.preventDefault()
  const newRamen = {
    name: e.target.name.value,
    rating: e.target.rating.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value, 
    comment: e.target['new-comment'].value,
  }
  renderRamen(newRamen)
  // console.log(newRamen)
}


/* <div id="ramen-detail">
<img class="detail-image" src="./assets/image-placeholder.jpg" alt="Insert Name Here" />
<h2 class="name">Insert Name Here</h2>
<h3 class="restaurant">Insert Restaurant Here</h3>
</div> */


///---------
// fetch('http://localhost:3000/ramens')
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((ramen) => {
//       const img = document.createElement('img')
//       img.src = ramens.image
//       // console.log(ramen)
//       // displayData(ramen)
//       menu.appendChild(img)
//     })
//       .catch((err) => {
//         console.error("Error fetching ramen images", err);
//     })
// })
