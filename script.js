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
    20220123,
    20220205,
    20220205,
    20241110,
    20250103
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
    "misago",
    "hikuina",
    "suzume",
    "kawasemi_2",
    "kisekirei"
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
    "ミサゴ",
    "ヒクイナ",
    "スズメ",
    "カワセミ②",
    "キセキレイ"
]

for(let i = 0; i < img_date.length; i++){
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
    newImage.onclick = '';

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

