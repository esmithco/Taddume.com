// variables
const menuIcon = document.querySelector('.icon-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navSubjects = document.querySelector('.subjects-learn');
const ulSubMenus = document.querySelector('.ul-header');
const storiesBox = document.querySelector('.stories');
const pricesBox = document.querySelector('.prices-div');
const learnElement = document.querySelector(".learn");

menuIcon.addEventListener('click', toggleMobileMenu);


const learnscrollIndicator = document.querySelector(".learn-scroll");
let learnAnimationPlayed = false;


const storyScrollIndicator = document.querySelector(".stories-scroll");
let storyAnimationPlayed = false;

const priceScrollIndicator = document.querySelector(".prices-scroll");
let priceAnimationPlayed = false;

const mediaQuery = window.matchMedia('(max-width: 450px)');

const handleAnimation = (scrollIndicator, animationPlayed) => {
    if (!animationPlayed) {
        scrollIndicator.style.display = 'block';
        scrollIndicator.style.animation = "scrollAnimation 0.8s ease-in-out 0.2s forwards";

        scrollIndicator.addEventListener('animationend', () => {
            scrollIndicator.style.display = 'none';

        });

    }
};

if (mediaQuery.matches) {
    storiesBox.addEventListener("touchstart", () => {
        handleAnimation(storyScrollIndicator, storyAnimationPlayed);
        storyAnimationPlayed = true;
    });

    learnElement.addEventListener("touchstart", () => {
        handleAnimation(learnscrollIndicator, learnAnimationPlayed);
        learnAnimationPlayed = true;
    });

    pricesBox.addEventListener("touchstart", () => {
        handleAnimation(priceScrollIndicator, priceAnimationPlayed);
        priceAnimationPlayed = true;
    });
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

const createChecksPrice = arr => {
    const checkContainer = document.createElement('div');
    for (check of arr) {
        const divCheck = document.createElement('div');
        divCheck.classList.add('detail-price');

        const imgCheck = document.createElement('img');
        imgCheck.classList.add('chulito');
        imgCheck.setAttribute('src', check.img);

        const pCheck = document.createElement('p');
        pCheck.classList.add('p-chulito');
        pCheck.innerText = check.subject;

        divCheck.appendChild(imgCheck);
        divCheck.appendChild(pCheck);

        checkContainer.appendChild(divCheck);
    };

    return checkContainer;

};

const renderPriceBox = arr => {
    for (price of priceList) {
        const priceDiv = document.createElement('div');
        priceDiv.classList.add('story');
        priceDiv.classList.add('prices-box');

        const boxBorder = document.createElement('div');
        boxBorder.classList.add('box-border');

        const namePrice = document.createElement('h3');
        namePrice.classList.add('h2-price');
        namePrice.innerText = price.plan;

        const priceLabel = document.createElement('div');
        priceLabel.classList.add('price-border');
        priceLabel.innerHTML = price.price;

        const priceButton = document.createElement('button');
        priceButton.classList.add('buy-button');
        priceButton.innerText = 'Suscríbete';

        boxBorder.appendChild(namePrice);
        boxBorder.appendChild(createChecksPrice(price.checks));
        boxBorder.appendChild(priceLabel);

        priceDiv.appendChild(boxBorder);
        priceDiv.appendChild(priceButton);

        pricesBox.appendChild(priceDiv);
    }
};



// listas

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
    name: 'Lectura',
    link: '../notWorking/index.html'
});
subjectList.push({
    img1: '../PNG/TADDUME_ICONOS-17.png',
    img2: '../PNG/TADDUME_ICONOS-18.png',
    name: 'Estadística',
    link: '../notWorking/index.html'
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


const priceList = [];
priceList.push({
    plan: 'Basic',
    checks: [
        { subject: 'Matemáticas', img: '../PNG/TADDUME_CHULITO.png' },
        { subject: 'Actividades', img: '../PNG/TADDUME_CHULITO.png' }
    ],
    price: '$500.000'
});
priceList.push({
    plan: 'Basic',
    checks: [
        { subject: 'Matemáticas', img: '../PNG/TADDUME_CHULITO.png' },
        { subject: 'Actividades', img: '../PNG/TADDUME_CHULITO.png' }
    ],
    price: '$500.000'
});
priceList.push({
    plan: 'Basic',
    checks: [
        { subject: 'Matemáticas', img: '../PNG/TADDUME_CHULITO.png' },
        { subject: 'Actividades', img: '../PNG/TADDUME_CHULITO.png' }
    ],
    price: '$500.000'
});
priceList.push({
    plan: 'Basic',
    checks: [
        { subject: 'Matemáticas', img: '../PNG/TADDUME_CHULITO.png' },
        { subject: 'Actividades', img: '../PNG/TADDUME_CHULITO.png' }
    ],
    price: '$500.000'
});


//ejecuciones de funciones
renderSubject(subjectList);
renderSubmenus(menuList);
renderStory(storyList);
renderPriceBox(priceList); 


