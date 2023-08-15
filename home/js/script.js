// variables
const menuIcon = document.querySelector('.icon-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navSubjects = document.querySelector('.subjects-learn');
const ulSubMenus = document.querySelector('.ul-header');
const storiesBox = document.querySelector('.stories');

menuIcon.addEventListener('click', toggleMobileMenu);

const learnElement = document.querySelector(".learn");
const scrollIndicator = learnElement.querySelector(".scroll-indicator");
let animationPlayed = false;

const mediaQuery = window.matchMedia('(max-width: 450px)'); 

const handleMouseOver = () => {
  if (!animationPlayed) {
    scrollIndicator.style.display = 'block';
    scrollIndicator.style.animation = "scrollAnimation 2s ease-in-out 0.5s forwards";
    animationPlayed = true;

    scrollIndicator.addEventListener('animationend', () => {
      scrollIndicator.style.display = 'none';
    });
  }
};

if (mediaQuery.matches) {
  learnElement.addEventListener('mouseover', handleMouseOver);
}

function toggleMobileMenu() {
  // Código para mostrar/ocultar el menú móvil
}

// funciones
function showSubMenu(id) {
    let subMenu = document.getElementById(id);
    subMenu.style.display = "inline-block";
};

function hideSubMenu(id) {
    let subMenu = document.getElementById(id);
    subMenu.style.display = "none";
};

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    mobileMenu.classList.toggle('active-menu');
    console.log("quepasa");
};

function changeImage(imgId1, imgId2, pId) {
    document.getElementById(imgId1).style.display = "none";
    document.getElementById(imgId2).style.display = "inline-block";
    document.getElementById(pId).classList.add("hover");
};

function restoreImage(imgId1, imgId2, pId) {
    document.getElementById(imgId1).style.display = "inline-block";
    document.getElementById(imgId2).style.display = "none";
    document.getElementById(pId).classList.remove("hover");
};

const createMenuLinks = arr => {
    const linksContainer = document.createElement('ul');
    for (link of arr) {
        const aLink = document.createElement('a');
        aLink.setAttribute('href', link.enlHerf)
        aLink.innerText = link.enlName;

        const liMenu = document.createElement('li');
        liMenu.appendChild(aLink);

        linksContainer.appendChild(liMenu);
    };

    return linksContainer;

};

const renderSubject = arr => {
    for (subject of arr) {
        const aSubject = document.createElement('a');
        aSubject.classList.add('subjects');
        aSubject.setAttribute('href', subject.link);

        const imgSubject = document.createElement('div');
        imgSubject.classList.add('subjects-img')

        const img1Container = document.createElement('div');
        img1Container.classList.add('img-container');

        const img1 = document.createElement('img');
        img1.classList.add('learn-img');
        img1.setAttribute('alt', subject.name);
        img1.setAttribute('src', subject.img1);
        img1.setAttribute('id', 'img1' + subject.name);

        const img2Container = document.createElement('div');
        img2Container.classList.add('img-container');

        const img2 = document.createElement('img');
        img2.classList.add('learn-img');
        img2.classList.add('img2');
        img2.setAttribute('alt', subject.name);
        img2.setAttribute('src', subject.img2);
        img2.setAttribute('id', 'img2' + subject.name);

        const pName = document.createElement('p');
        pName.classList.add('p-learn');
        pName.setAttribute('id', 'p' + subject.name);
        pName.innerText = subject.name;

        img1Container.appendChild(img1);
        img2Container.appendChild(img2);

        imgSubject.appendChild(img1Container);
        imgSubject.appendChild(img2Container);

        aSubject.appendChild(imgSubject);
        aSubject.appendChild(pName);

        const currentSubject = subject;

        imgSubject.addEventListener('mouseover', function () {
            changeImage('img1' + currentSubject.name, 'img2' + currentSubject.name, 'p' + currentSubject.name)
        });

        imgSubject.addEventListener('mouseout', function () {
            restoreImage('img1' + currentSubject.name, 'img2' + currentSubject.name, 'p' + currentSubject.name)
        });

        navSubjects.appendChild(aSubject);
    };
};

const renderSubmenus = arr => {
    for (menu of arr) {
        const liMenu = document.createElement('li');
        liMenu.classList.add('li-header');

        const aLiMenu = document.createElement('a');
        aLiMenu.classList.add('options');
        aLiMenu.innerText = menu.name;

        const navLiMenu = document.createElement('nav');
        navLiMenu.classList.add('desktop-menu');
        navLiMenu.setAttribute('id', 'nav' + menu.name)

        navLiMenu.appendChild(createMenuLinks(menu.links));

        liMenu.appendChild(aLiMenu);
        liMenu.appendChild(navLiMenu);

        const currentMenu = menu;

        aLiMenu.addEventListener('mouseover', function () {
            showSubMenu('nav' + currentMenu.name)
        });

        aLiMenu.addEventListener('mouseout', function () {
            hideSubMenu('nav' + currentMenu.name)
        });

        navLiMenu.addEventListener('mouseover', function () {
            showSubMenu('nav' + currentMenu.name)
        });

        navLiMenu.addEventListener('mouseout', function () {
            hideSubMenu('nav' + currentMenu.name)
        });

        ulSubMenus.appendChild(liMenu);
    };
};

const renderStory = arr => {
    for (story of arr) {
        const storyDiv = document.createElement('div');
        storyDiv.classList.add('story'); 

        const imgStory = document.createElement('img');
        imgStory.classList.add('img-story');
        imgStory.setAttribute('src', story.img);

        const infoBox = document.createElement('div');
        infoBox.classList.add('square-story');
        
        const nameInfo = document.createElement('h3');
        nameInfo.classList.add('h3-story');
        nameInfo.innerText = story.name;

        const gradeInfo = document.createElement('p');
        gradeInfo.classList.add('p-details');
        gradeInfo.innerText = story.grade;

        const countryInfo = document.createElement('p');
        countryInfo.classList.add('p-details');
        countryInfo.innerText = story.country;

        const commentInfo = document.createElement('p');
        commentInfo.classList.add('p-story');
        commentInfo.innerText = story.comment;

        infoBox.appendChild(nameInfo);
        infoBox.appendChild(gradeInfo);
        infoBox.appendChild(countryInfo);
        infoBox.appendChild(commentInfo);

        storyDiv.appendChild(imgStory);
        storyDiv.appendChild(infoBox);

        storiesBox.appendChild(storyDiv);
    }
};


// listas
const subjectList = [];
subjectList.push({
    img1: '../PNG/TADDUME_ICONOS-08.png',
    img2: '../PNG/TADDUME_ICONOS-09.png',
    name: 'Química',
    link: '../notWorking/index.html'
});
subjectList.push({
    img1: '../PNG/TADDUME_ICONOS-11.png',
    img2: '../PNG/TADDUME_ICONOS-13.png',
    name: 'Física',
    link: '../notWorking/index.html'
});
subjectList.push({
    img1: '../PNG/TADDUME_ICONOS-12.png',
    img2: '../PNG/TADDUME_ICONOS-14.png',
    name: 'Matemáticas',
    link: '../notWorking/index.html'
});
subjectList.push({
    img1: '../PNG/TADDUME_ICONOS-15.png',
    img2: '../PNG/TADDUME_ICONOS-16.png',
    name: 'Lenguaje',
    link: '../notWorking/index.html'
});
subjectList.push({
    img1: '../PNG/TADDUME_ICONOS-17.png',
    img2: '../PNG/TADDUME_ICONOS-18.png',
    name: 'Estadística',
    link: '../notWorking/index.html'
});


const menuList = [];
menuList.push({
    name: "Contáctanos",
    links: [
        { enlName: "Instagram", enlHref: "/" },
        { enlName: "Facebook", enlHref: "/" },
        { enlName: "LinkedIn", enlHref: "/" },
        { enlName: "Gmail", enlHref: "/" },
    ],
});
menuList.push({
    name: "Sobre nosotros",
    links: [
        { enlName: "Historia", enlHref: "/" },
        { enlName: "Equipo", enlHref: "/" },
        { enlName: "Misión y Visión", enlHref: "/" },
        { enlName: "Reconocimientos", enlHref: "/" },
    ],
});
menuList.push({
    name: "Noticias",
    links: [
        { enlName: "Comunidad", enlHref: "/" },
        { enlName: "Eventos", enlHref: "/" },
        { enlName: "Entrevistas", enlHref: "/" },
        { enlName: "Actualizaciones", enlHref: "/" },
    ],
});
menuList.push({
    name: "Contenido",
    links: [
        { enlName: "Blog", enlHref: "/" },
        { enlName: "Guías", enlHref: "/" },
        { enlName: "Preguntas Frecuentes", enlHref: "/" },
        { enlName: "Asignaturas", enlHref: "/" },
    ],
});


const storyList = [];
storyList.push({
    img: '../PNG/TADDUME_TESTIMONIAL.png',
    name: 'Brayan',
    grade: 9,
    country: 'Colombia',
    comment: 'orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet'
});
storyList.push({
    img: '../PNG/TADDUME_TESTIMONIAL.png',
    name: 'Daniela',
    grade: 10,
    country: 'Chile',
    comment: 'orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet'
});
storyList.push({
    img: '../PNG/TADDUME_TESTIMONIAL.png',
    name: 'Nala',
    grade: 11,
    country: 'Ecuador',
    comment: 'orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet'
});


//ejecuciones de funciones
renderSubject(subjectList);
renderSubmenus(menuList);
renderStory(storyList);


