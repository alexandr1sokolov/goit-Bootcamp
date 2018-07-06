// const jumbotron = document.querySelector('.jumbotron');
// //create
// const titleContainer = document.createElement('div');
// const h1 = document.createElement('h1');
// const deadpoolSpan = document.createElement('span');
// const deadpoolP = document.createElement('p');
// const deadpoolSpan2 = document.createElement('span');
// const imgContainer = document.createElement('div');
// const mainImg = document.createElement('img');
// const timeLine = document.createElement('div');
// const timeLineH1 = document.createElement('h1');
// const listContainer = document.createElement('div');
// const ulMenu = document.createElement('ul');
// const columnQuotes = document.createElement('div');
// const quotesCol = document.createElement('div');
// const blockquote = document.createElement('blockquote');
// const blockquoteP = document.createElement('p');
// const blockquoteFooter = document.createElement('footer');
// const footerCite = document.createElement('cite');
//
//
// //add class
// titleContainer.classList.add('row','title-container');
// h1.classList.add('text-center');
// deadpoolSpan.classList.add('red-text');
// deadpoolP.classList.add('text-center');
// deadpoolSpan2.classList.add('red-text');
// imgContainer.classList.add('row');
// mainImg.classList.add('img-responsive', 'inside-shadow');
// timeLine.classList.add('row', 'sub-title-container');
// timeLineH1.classList.add('text-center');
// listContainer.classList.add('row', 'list-container');
// columnQuotes.classList.add('row');
// quotesCol.classList.add('col-ls-6', 'col-ls-offset-3', 'col-md-6', 'col-md-offset-3');
// blockquote.classList.add('blockquote-reverse');
//
// //add attr
// imgContainer.setAttribute('id', 'main-image-container');
// mainImg.setAttribute('alt','picture');
// mainImg.setAttribute('src','http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool1-gallery-image.jpg');
// footerCite.setAttribute('title','Source Title');
//
// //add text
// h1.textContent= ' TRIBUTE PAGE';
// deadpoolSpan.textContent='DEADPOOL';
// deadpoolP.textContent ='WITH GREAT POWER COMES GREAT ';
// deadpoolSpan2.textContent='IRRESPONSIBILITY';
// timeLineH1.textContent='TIMELINE';
// blockquoteP.textContent='MMMMHHH... I\'M TOUCHING MYSELF TONIGHT.';
// footerCite.textContent='Someone with a great ass';
//
// //paste
// jumbotron.append(titleContainer);
// titleContainer.append(h1);
// h1.prepend(deadpoolSpan);
// titleContainer.append(deadpoolP);
// deadpoolP.append(deadpoolSpan2);
// jumbotron.append(imgContainer);
// imgContainer.append(mainImg);
// jumbotron.append(timeLine);
// timeLine.append(timeLineH1);
// jumbotron.append(listContainer);
// listContainer.append(ulMenu);
//
//
//
// const imageContainerClone = imgContainer.cloneNode(true);
// imageContainerClone.children[0].setAttribute('src','http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool-gallery-06-gallery-image.jpg');
// jumbotron.append(imageContainerClone);
//
// console.log(imageContainerClone.children);
// const timeLineClone = timeLine.cloneNode(true);
// timeLineClone.children[0].textContent='QUOTE';
// jumbotron.append(timeLineClone);
// jumbotron.append(columnQuotes);
// columnQuotes.append(quotesCol);
// quotesCol.append(blockquote);
// blockquote.append(blockquoteP);
// blockquote.append(blockquoteFooter);
// blockquoteFooter.append(footerCite);

//li function
// let frag ='';
// let liArr = [
//     `<li class="list-item"><span class="red-text">SOME YEAR</span> - BORN IN CANADA AS WADE WILSON.</li>`,
//     `<li class="list-item"><span class="red-text">SOME OTHER YEAR</span> - HIS MOTHER DIED OF CANCER WHILE HE WAS YOUNG AND HIS FATHER (WHO WAS IN THE MILITARY) WAS PHYSICALLY ABUSIVE.</li>`,
//     `<li class="list-item"><span class="red-text">SOME OTHER DIFERENT YEAR</span> - WADE BEGAN HIS
//             MERCENARY CAREER WHILE STILL IN HIS LATE TEENS.
//         </li>`,
//     `<li class="list-item"><span class="red-text">YET ANOTHER YEAR</span> - IN AMERICA, HE MET AND FELL
//             IN LOVE WITH TEENAGE PROSTITUTE VANESSA CARLYSLE, WITH WHOM HE SHARED DREAMS OF A BETTER LIFE.
//         </li>`,
//     `<li class="list-item"><span class="red-text">YESTERDAY?</span> - LEARNING THAT HE HAD CONTRACTED
//             CANCER, WILSON BROKE UP WITH VANESSA RATHER THAN FORCE HER TO REMAIN WITH A TERMINALLY ILL MAN.
//         </li>`,
//     `<li class="list-item"><span class="red-text">NO...</span> - IN PURSUE OF HOPE FOR HIS TERMINAL
//             CONDITION, HE JOINS THE WEAPON X PROGRAM
//         </li>`,
//     `<li class="list-item"><span class="red-text">WHO CARES?</span> - HIS CANCER WAS TEMPORARILY ARRESTED
//             VIA THE IMPLANTATION OF A HEALING FACTOR DERIVED FROM WOLVERINE
//         </li>`,
//     `<li class="list-item"><span class="red-text">DUNNO</span> - DURING ONE MISSION, WILSON KILLED HIS
//             TEAMMATE SLAYBACK. AS A RESULT, HE WAS REJECTED FROM THE WEAPON X PROGRAM AND SENT TO THE
//             HOSPICE, ALLEGEDLY A GOVERNMENT FACILITY WHERE FAILED SUPERHUMAN OPERATIVES WERE TREATED.
//         </li>`,
//     `<li class="list-item"><span class="red-text">MEEH</span> - IN THE HOSPICE HE WAS TORTURED BY THE
//             DOCTOR KILLEBREW AND HIS SADISTIC ASSISTANT AJAX, WHO TORE OUT WILSON’S HEART AND LEFT HIM FOR
//             DEAD
//         </li>`,
//     `<li class="list-item"><span class="red-text">????</span> - FOLLOWING HIS ESCAPE HE SOON RETURNED TO
//             HIS FREELANCE MERCENARY ACTIVITIES, DONNING A COSTUME IN KEEPING WITH HIS NEW IDENTITY, DEADPOOL
//         </li>`,
//     `<li class="list-item"><span class="red-text">@$%^#</span> - WHY DO YOU KEEP READING, THIS IS SO
//             BORING...
//         </li>`];

// for (item of liArr ){
//     frag+=item;
// }
// ulMenu.innerHTML = frag;


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
//===mode append prepend


function createNode(tag, classArr, attrObj, text, mode, container) {
    let el = document.createElement(tag);

    if (classArr !== null){
    for (let className of classArr){
        el.classList.add(className);
    }}

    for (let key in attrObj){
        let hasKey = attrObj.hasOwnProperty(`${key}`);
        if (hasKey){
        el.setAttribute(`${key}`, attrObj[`${key}`])
        }
    }

    el.textContent = text;
    container[mode](el); // jumbotron.append(titleContainer);

    return el;
}
let jumbotron = document.querySelector('.jumbotron');
let titleContainer = createNode('div',['row', 'title-container'], null, null, 'append', jumbotron);
let h1 = createNode('h1',['text-center'], null, 'TRIBUTE PAGE', 'append', titleContainer);
let deadpoolSpan = createNode('span',['red-text'], null, 'DEADPOOL ', 'prepend', h1);
let deadpoolP = createNode('p',['text-center'], null, 'WITH GREAT POWER COMES GREAT ', 'append', titleContainer);
let deadpoolSpan2 = createNode('span',['red-text'], null, 'IRRESPONSIBILITY', 'append', deadpoolP);
let imgContainer = createNode('div',['row'], {id:'main-image-container'}, null, 'append', jumbotron);
let mainImg = createNode('img',['img-responsive', 'inside-shadow'], {src: 'http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool1-gallery-image.jpg', alt: 'photo'}, null, 'append', jumbotron);
let timeLine = createNode('div',['row', 'sub-title-container'], null, null, 'append', jumbotron);
let timeLineH1 = createNode('h1',['text-center'], null, 'TIMELINE', 'append', timeLine);
let listContainer = createNode('div',['row', 'list-container'], null, null, 'append', jumbotron);
let ulMenu = createNode('ul',null, null, null, 'append', listContainer);
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
let frag ='';
for (item of liArr ){
    frag+=item;
}
ulMenu.innerHTML = frag;

let mainImg2 = createNode('img',['img-responsive', 'inside-shadow'], {src: 'http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool-gallery-06-gallery-image.jpg', alt: 'photo'}, null, 'append', jumbotron);
let titleContainer2 = createNode('div',['row', 'sub-title-container'], null, null, 'append', jumbotron);
let h1_2 = createNode('h1',['text-center'], null, 'QUOTE', 'append', titleContainer2);
let columnQuotes = createNode('div',['row'], null, null, 'append', jumbotron);
let quotesCol =  createNode('div',['col-ls-6', 'col-ls-offset-3', 'col-md-6', 'col-md-offset-3'], null, null, 'append', columnQuotes);
let blockquote = createNode('blockquote',['blockquote-reverse'], null, null, 'append', quotesCol);
let blockquoteP = createNode('p',null, null, 'MMMMHHH... I\'M TOUCHING MYSELF TONIGHT.', 'append', blockquote);
let blockquoteFooter = createNode('footer', null, null, null, 'append', blockquote);
let footerCite = createNode('cite', null, {title:'Source Title'}, 'Someone with a great ass', 'append', blockquoteFooter);
let footer = createNode('div',['row', 'footer'], null, null, 'append', jumbotron);
let col_md_61 =  createNode('div',['col-md-6'], null, null, 'append', footer);
let col_md_61P =createNode('p',['small-text'], null, 'All rights and lefts reserved.', 'append', col_md_61);
let col_md_6 =  createNode('div',['col-md-6'], null, null, 'append', footer);
let footerMenu = createNode('ul',null, null, null, 'append', col_md_6);

let menuLiArr =[
    '<li>Made as a <a href="https://www.freecodecamp.com/" target="_blank">CodeCamp</a> project</li>',
    '<li><a href="http://www.foxmovies.com/movies/deadpool" target="_blank">Assets and idea</a></li>',
    '<li><a href="http://marvel.com/universe/Deadpool_(Wade_Wilson)" target="_blank">Info</a></li>',
    '<li><a href="https://twitter.com/deadpoolmovie" target="_blank">The best twitter ever</a></li>'
];
let sum ='';
for (let item of menuLiArr){
    sum+=item;
}
footerMenu.innerHTML = sum;









