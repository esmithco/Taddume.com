/* para el json
import people from "../data/people.json" assert{type:"json"}

const list = document.querySelector('#projects')

people.data.forEach(e => {

    /* div profileEL 
    const profileEL = document.createElement('div')
    profileEL.classList.add('profile')
    const imageEl = document.createElement("img")
    imageEl.src = e.image
    imageEl.alt = e.id
    profileEL.appendChild(imageEl)

    /* titulo nombre 
    const nameEL = document.createElement("h3")
    nameEL.innerHTML = e.name

    /* titulo pais 
    const countryEL = document.createElement("h5")
    countryEL.innerHTML = e.country

    /* comentario 
    const commentEL = document.createElement('div')
    commentEL.classList.add('comments')
    const descEL = document.createElement("p")
    descEL.innerHTML = e.description
    commentEL.appendChild(descEL)

    list.appendChild(profileEL)
    list.appendChild(nameEL)
    list.appendChild(countryEL)
    list.appendChild(commentEL)

})
*/

function changeImage(imgId1,imgId2) {
    const img1 = document.getElementById(imgId1).style.display = 'none';
    const img2 = document.getElementById(imgId2).style.display = 'inline-block';
    img1.style.opacity = '1';
    img2.style.opacity = '1';
}

function restoreImage(imgId1,imgId2) {
    const img1 = document.getElementById(imgId1).style.display = 'inline-block';
    const img2 = document.getElementById(imgId2).style.display = 'none';
    img1.style.opacity = '1';
    img2.style.opacity = '1';
}

