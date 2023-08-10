
const menuIcon = document.querySelector('.icon-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navSubjects = document.querySelector('.subjects-learn');


menuIcon.addEventListener('click', toggleMobileMenu);

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

for (subject of subjectList) {
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
