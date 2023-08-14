// variables
const menuIcon = document.querySelector('.icon-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navSubjects = document.querySelector('.subjects-learn');
const ulSubMenus = document.querySelector('.ul-header');



// funciones
const showSubMenu = id => {
    let subMenu = document.getElementById(id);
    subMenu.style.display = "inline-block";
};

const hideSubMenu = id => {
    let subMenu = document.getElementById(id);
    subMenu.style.display = "none";
};

const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('inactive');
    mobileMenu.classList.toggle('active-menu');
    console.log("quepasa");
};
menuIcon.addEventListener('click', toggleMobileMenu);

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

function createMenuLinks(arr) {
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

}

function renderSubject(arr) {
    for (subject of arr) {
        const aSubject = document.createElement('a');
        aSubject.classList.add('subjects');

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
}

function renderSubmenus(arr) {
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
}


// listas
const subjectList = [];
subjectList.push({
    img1: '../PNG/TADDUME_ICONOS-08.png',
    img2: '../PNG/TADDUME_ICONOS-09.png',
    name: 'Química'
});
subjectList.push({
    img1: '../PNG/TADDUME_ICONOS-11.png',
    img2: '../PNG/TADDUME_ICONOS-13.png',
    name: 'Física'
});
subjectList.push({
    img1: '../PNG/TADDUME_ICONOS-12.png',
    img2: '../PNG/TADDUME_ICONOS-14.png',
    name: 'Matemáticas'
});
subjectList.push({
    img1: '../PNG/TADDUME_ICONOS-15.png',
    img2: '../PNG/TADDUME_ICONOS-16.png',
    name: 'Lenguaje'
});
subjectList.push({
    img1: '../PNG/TADDUME_ICONOS-17.png',
    img2: '../PNG/TADDUME_ICONOS-18.png',
    name: 'Estadística'
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


//ejecuciones de funciones
renderSubject(subjectList);
renderSubmenus(menuList);


