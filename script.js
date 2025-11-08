const img_date = [
    20210503,
    20210523,
    20210529,
    20210529,
    20210529,
    20210718,
    20210718,
    20210722,
    20210809,
    20210923,
    20211024,
    20211121,
    20211211,
    20211231,
    20220101,
    20220110,
    20220123,
    20220205,
    20220205,
    20220205,
    20241110,
    20250103,
    20250103,
    20250103,
    20250103,
    20250103,
    20250814,
    20250814,
    20250814,
    20250814
]

const img_inner = [
    "ito",
    "kogera",
    "batta",
    "tokage",
    "tubame",
    "utiwa",
    "aka",
    "aosuji",
    "kaituburi",
    "siokara",
    "hato",
    "aosagi",
    "ootaka",
    "kawasemi_1",
    "joubitaki",
    "hakusekirei",
    "misago",
    "hikuina",
    "suzume",
    "gabityou",
    "kawasemi_2",
    "kakesu",
    "sirohara",
    "aoji",
    "kuroji",
    "kisekirei",
    "haguro",
    "tobi",
    "isosigi",
    "segurosekirei"
]

const img_name = [
    "イトトンボ",
    "コゲラ",
    "バッタ",
    "トカゲ",
    "ツバメ",
    "ウチワヤンマ",
    "アカトンボ",
    "アオスジアゲハ",
    "カイツブリ",
    "シオカラトンボ",
    "ハト",
    "アオサギ",
    "オオタカ",
    "カワセミ①",
    "ジョウビタキ",
    "ハクセキレイ",
    "ミサゴ",
    "ヒクイナ",
    "スズメ",
    "ガビチョウ",
    "カワセミ②",
    "カケス",
    "シロハラ",
    "アオジ",
    "クロジ",
    "キセキレイ",
    "ハグロトンボ",
    "トビ",
    "イソシギ",
    "セグロセキレイ"
]

const img_tag = [
    "i",
    "b",
    "i",
    "o",
    "b",
    "i",
    "i",
    "i",
    "b",
    "i",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "i",
    "b",
    "b",
    "b"
]


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function clearContainerA(){
    let headImage = document.createElement('img');

    headImage.src = 'https://raw.githubusercontent.com/haha794uguisu/photos/refs/heads/main/photo/'+img_inner[showNumber]+'.jpg';
    headImage.alt = "head_image";
    headImage.className = 'head_img';
    headImage.id = 'head_img';

    let conHead = document.getElementById('containerA');
    (conHead).appendChild(headImage);

    for(let i = 0; i < img_date.length; i++){
        if ((!ifBird && img_tag[i]=='b') || (!ifInsect && img_tag[i]=='i') || (!ifOther && img_tag[i]=='o')){
            continue;
        }



        //id = sub+i
        let newDiv1 = document.createElement('div');
        newDiv1.id = 'sub'+i;
        let conD = document.getElementById('containerA');
        conD.appendChild(newDiv1);

        //id = containerB+i
        let newDiv = document.createElement('div');
        newDiv.id = 'containerB'+i;
        let conA = document.getElementById('sub'+i);
        conA.appendChild(newDiv);


        //img
        let newImage = document.createElement('img');

        newImage.src = 'https://raw.githubusercontent.com/haha794uguisu/photos/refs/heads/main/photo/'+img_inner[i]+'.jpg';
        newImage.alt = img_inner[i];
        newImage.className = 'a';
        newImage.addEventListener('click', function(){showImage(i);});

        let conB = document.getElementById('containerB'+i);
        (conB).appendChild(newImage);

        //p class = b
        let newP1 = document.createElement('p');

        newP1.className = 'name';
        newP1.textContent = img_name[i];

        let conC = document.getElementById('sub'+i);
        (conC).appendChild(newP1);

        //p class = c
        let newP2 = document.createElement('p');

        newP2.className = 'date';

        let dateA = img_date[i];
        let dateB=String(dateA);

        newP2.textContent = dateB.slice(0,4)+'/'+dateB.slice(4,6)+'/'+dateB.slice(6,8);

        let conE = document.getElementById('sub'+i);
        (conE).appendChild(newP2);
    }
}

function showImage(number){
    showNumber = number;
    let headImg = document.getElementById('head_img');
    headImg.src = 'https://raw.githubusercontent.com/haha794uguisu/photos/refs/heads/main/photo/'+img_inner[number]+'.jpg';
    console.log(number);
    scrollToTop();
}

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

let ifBird = true;
function checkBird(){
    if (bird.checked){
        ifBird = true;
    }else{
        ifBird = false;
    }
}

let ifInsect = true;
function checkInsect(){
    if (insect.checked){
        ifInsect = true;
    }else{
        ifInsect = false;
    }
}

let ifOther = true;
function checkOther(){
    if (other.checked){
        ifOther = true;
    }else{
        ifOther = false;
    }
}

function accept(){
    removeAllChildNodes(document.getElementById('containerA'));
    clearContainerA();
}

function back(){
    if (showNumber >=1){
        showNumber -= 1;
        showImage(showNumber);
    }
}

function next(){
    if (showNumber <= img_inner.length -2){
        showNumber += 1;
        showImage(showNumber);
    }
}

let ifshowCont = true;
const elementControl = document.getElementById('control_panel');
const elementContainerA = document.getElementById('containerA');
function showControl(){
    if (show_control.checked){
        ifshowCont = true;
        elementControl.style.display = 'block';
        elementContainerA.style.width = '75%';
    }else{
        ifshowCont = false;
        elementControl.style.display = 'none';
        elementContainerA.style.width = '100%';
    }
}

let showNumber
window.addEventListener('DOMContentLoaded', () => {
    showNumber = 19;
    clearContainerA();
});
