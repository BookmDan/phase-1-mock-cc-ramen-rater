// write your code here
document.addEventListener("DOMContentLoaded", function () {
  
})

const menu = document.getElementById(ramen-menu);
fetch('http://localhost:3000/ramens')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((ramen) => {
      const img = document.createElement('img')
      img.src = ramens.image
      // console.log(ramen)
      // displayData(ramen)
      menu.appendChild(img)
    })
      .catch((err) => {
        console.error("Error fetching ramen images", err);
    })
})
