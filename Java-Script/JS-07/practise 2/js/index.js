const jumbotron = document.querySelector('.jumbotron');
//create
const titleContainer = document.createElement('div');
const h1 = document.createElement('h1');
const deadpoolSpan = document.createElement('span');
const deadpoolP = document.createElement('p');
const deadpoolSpan2 = document.createElement('span');
const imgContainer = document.createElement('div');
const mainImg = document.createElement('img');
const timeLine = document.createElement('div');
const timeLineH1 = document.createElement('h1');
const listContainer = document.createElement('div');
const ulMenu = document.createElement('ul');



//add class
titleContainer.classList.add('row','title-container');
h1.classList.add('text-center');
deadpoolSpan.classList.add('red-text');
deadpoolP.classList.add('text-center');
deadpoolSpan2.classList.add('red-text');
imgContainer.classList.add('row');
mainImg.classList.add('img-responsive', 'inside-shadow');
timeLine.classList.add('row', 'sub-title-container');
timeLineH1.classList.add('text-center');
listContainer.classList.add('row', 'list-container');



//add attr
imgContainer.setAttribute('id', 'main-image-container');
mainImg.setAttribute('alt','picture');
mainImg.setAttribute('src','http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool1-gallery-image.jpg');

//add text
h1.textContent= ' TRIBUTE PAGE';
deadpoolSpan.textContent='DEADPOOL';
deadpoolP.textContent ='WITH GREAT POWER COMES GREAT ';
deadpoolSpan2.textContent='IRRESPONSIBILITY';
timeLineH1.textContent='TIMELINE';


//paste
jumbotron.append(titleContainer);
titleContainer.append(h1);
h1.prepend(deadpoolSpan);
titleContainer.append(deadpoolP);
deadpoolP.append(deadpoolSpan2);
jumbotron.append(imgContainer);
imgContainer.append(mainImg);
jumbotron.append(timeLine);
timeLine.append(timeLineH1);
jumbotron.append(listContainer);
listContainer.append(ulMenu);

const imageContainerClone = imgContainer.cloneNode(true);
imageContainerClone.children[0].setAttribute('src','http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool-gallery-06-gallery-image.jpg');
jumbotron.append(imageContainerClone);

console.log(imageContainerClone.children);
const timeLineClone = timeLine.cloneNode(true);
timeLineClone.children[0].textContent='QUOTE';
jumbotron.append(timeLineClone);

//li function
let frag ='';
let liArr = [
    `<li class="list-item"><span class="red-text">SOME YEAR</span> - BORN IN CANADA AS WADE WILSON.</li>`,
    `<li class="list-item"><span class="red-text">SOME OTHER YEAR</span> - HIS MOTHER DIED OF CANCER WHILE HE WAS YOUNG AND HIS FATHER (WHO WAS IN THE MILITARY) WAS PHYSICALLY ABUSIVE.</li>`,
    `<li class="list-item"><span class="red-text">SOME OTHER DIFERENT YEAR</span> - WADE BEGAN HIS
            MERCENARY CAREER WHILE STILL IN HIS LATE TEENS.
        </li>`,
    `<li class="list-item"><span class="red-text">YET ANOTHER YEAR</span> - IN AMERICA, HE MET AND FELL
            IN LOVE WITH TEENAGE PROSTITUTE VANESSA CARLYSLE, WITH WHOM HE SHARED DREAMS OF A BETTER LIFE.
        </li>`,
        `<li class="list-item"><span class="red-text">YESTERDAY?</span> - LEARNING THAT HE HAD CONTRACTED
            CANCER, WILSON BROKE UP WITH VANESSA RATHER THAN FORCE HER TO REMAIN WITH A TERMINALLY ILL MAN.
        </li>`,
    `<li class="list-item"><span class="red-text">NO...</span> - IN PURSUE OF HOPE FOR HIS TERMINAL
            CONDITION, HE JOINS THE WEAPON X PROGRAM
        </li>`,
    `<li class="list-item"><span class="red-text">WHO CARES?</span> - HIS CANCER WAS TEMPORARILY ARRESTED
            VIA THE IMPLANTATION OF A HEALING FACTOR DERIVED FROM WOLVERINE
        </li>`,
        `<li class="list-item"><span class="red-text">DUNNO</span> - DURING ONE MISSION, WILSON KILLED HIS
            TEAMMATE SLAYBACK. AS A RESULT, HE WAS REJECTED FROM THE WEAPON X PROGRAM AND SENT TO THE
            HOSPICE, ALLEGEDLY A GOVERNMENT FACILITY WHERE FAILED SUPERHUMAN OPERATIVES WERE TREATED.
        </li>`,
    `<li class="list-item"><span class="red-text">MEEH</span> - IN THE HOSPICE HE WAS TORTURED BY THE
            DOCTOR KILLEBREW AND HIS SADISTIC ASSISTANT AJAX, WHO TORE OUT WILSON’S HEART AND LEFT HIM FOR
            DEAD
        </li>`,
        `<li class="list-item"><span class="red-text">????</span> - FOLLOWING HIS ESCAPE HE SOON RETURNED TO
            HIS FREELANCE MERCENARY ACTIVITIES, DONNING A COSTUME IN KEEPING WITH HIS NEW IDENTITY, DEADPOOL
        </li>`,
    `<li class="list-item"><span class="red-text">@$%^#</span> - WHY DO YOU KEEP READING, THIS IS SO
            BORING...
        </li>`];

for (item of liArr ){
    frag+=item;
}
ulMenu.innerHTML = frag;
// for (let i = 0; i < 10; i++) {
//     const liMenuItem = document.createElement('li');
//     const liMenuSpan = document.createElement('span');
//     liMenuItem.classList.add('list-item');
//     liMenuSpan.classList.add('red-text');
//     liMenuSpan.textContent='SOME YEAR ';
//     liMenuItem.textContent=' - BORN IN CANADA AS WADE WILSON.';
//     liMenuItem.prepend(liMenuSpan);
//     frag.append(liMenuItem);
// }
// ulMenu.append(frag);

