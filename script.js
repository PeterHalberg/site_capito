const menu = {
    "Завтраки": [
      {
        "image": "https://menu.capito.com.kz/files/products/ovsyanaya-kasha-s-tolkanom.300x300.jpg",
        "name": "Овсянная каша с талканом",
        "price": 1900,
        "description": "Овсяная каша с талканом на молоке и сливках"
      },
      {
        "image": "https://menu.capito.com.kz/files/products/zavtrak-belkovyj.300x300.jpg",
        "name": "Белковый завтрак",
        "price": 3950,
        "description": "Белковый завтрак: воздушный омлет из белков со сливками"
      },
      {
        "image": "https://menu.capito.com.kz/files/products/chia-puding.260x210.jpg",
        "name": "Чиа пудинг",
        "price": 2800,
        "description": "Чиа-пудинг с гранолой, свежей клубникой и бананом"
      },
      {
        "image": "https://menu.capito.com.kz/files/products/skrembl-so-strachateloj-.260x210.jpg",
        "name": "Скрэмбл со страчателлой",
        "price": 3100,
        "description": "Скрэмбл из трех яиц с нежным сыром страчателла"
      },
      {
        "image": "https://menu.capito.com.kz/files/products/skrembl-s-krevetkoj-na-derevenskom-hlebe.260x210.jpg",
        "name": "Скрэмбл с креветкой на деревенском хлебе",
        "price": 3800,
        "description": "Легкий завтрак в виде брускетты"
      }
    ],
    "Сэндвичи": [
      {
        "image": "https://menu.capito.com.kz/files/products/sendvich-iz-pechi-ovoschnoj-.260x210.jpg",
        "name": "Сэндвич из печи овощной",
        "price": 2600,
        "description": "Фокачча, запеченная в дровяной печи с прослойкой из соуса Ранч"
      },
      {
        "image":"https://menu.capito.com.kz/files/products/sendvich-iz-pechi-s-semgoj.260x210.jpg",
        "name": "Сэндвич из печи с семгой",
        "price": 3500,
        "description": "Фокачча, запеченная в дровяной печи с прослойкой из нежнейшей малосоленой семги"
      },
      {
        "image": "https://menu.capito.com.kz/files/products/sendvich-iz-pechi-s-kuritsej-.300x300.jpg",
        "name": "Сэндвич из печи с курицей",
        "price": 3100,
        "description": "Сэндвич, запеченный в дровяной печи с добавлением курицы, соуса Ранч"
      },
      {
        "image": "https://menu.capito.com.kz/files/products/burger-iz-pechi-s-telyachej-kotletoj-.300x300.jpg",
        "name": "Бургер из печи с телячьей котлетой",
        "price": 3500,
        "description": "Фокачча, запеченная в дровяной печи с сочной телячьей котлетой"
      },
      {
        "image": "https://menu.capito.com.kz/files/products/burger-iz-pechi-s-kurinym-file-.300x300.jpg",
        "name": "Бургер из печи с куриным филе",
        "price": 3300,
        "description": "Фокачча, запеченная в дровяной печи с нежным куриным филе на гриле"
      }
    ],
    "Десерты": [
      {
        "image": "https://menu.capito.com.kz/files/products/malina-berri-rouge1.300x300.jpg",
        "name": "Пирожное малина",
        "price": 3500,
        "description": "Эффектное пирожное в форме малины"
      },
      {
        "image": "https://menu.capito.com.kz/files/products/desert-solar-velvet.300x300.png",
        "name": "Десерт «Solar Velvet»",
        "price": 2800,
        "description": "Нежный ванильный бисквит с клубничным компоте и воздушным манговым муссом"
      },
      {
        "image": "https://menu.capito.com.kz/files/products/korolevskaya-fistashka.300x300.jpg",
        "name": "Королевская фисташка",
        "price": 2950,
        "description": "Кремовый фисташковый чизкейк с ореховой ноткой."
      },
      {
        "image": "https://menu.capito.com.kz/files/products/yagodnyi-banan.300x300.png",
        "name": "Ягодный банан",
        "price": 2950,
        "description": "Нежный банановый бисквит, воздушный банановый мусс в шоколадной глазури"
      },
      {
        "image": "https://menu.capito.com.kz/files/products/shokoladnyj-tort-.300x300.jpg",
        "name": "Торт шоколадный",
        "price": 2100,
        "description": "_"
      }
    ]
};

var floating = document.getElementById("floating");
var main = document.getElementById("main");
var cats = Object.keys(menu);
mainHTML = "";
floatingHTML = "";

for (let cat of cats){
  floatingHTML+=`<div class = "navpoint"><a href = "#${cat.replace("_"," ")}">${cat.replace("_"," ")}</a></div>`;
  mainHTML+=`<span id = "${cat.replace("_"," ")}"><h2>${cat.replace("_"," ")}</h2></span><span style = "grid-column: span 3;"></span>`;
  for (let i = 0; i<5; i++){
    mainHTML+= `<div class = "card"><img src = "${menu[cat][i]["image"]}"><span>${menu[cat][i]["name"]}</span><div class = "pricetag">${menu[cat][i]["price"]}</div><span>${menu[cat][i]["description"]}</span></div>`;
  }
  mainHTML+='<span style = "grid-column: span 3;"></span>';
}

floating.innerHTML = floatingHTML;
main.innerHTML = mainHTML;

