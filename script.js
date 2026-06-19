const menu = {
    "Закуски": [
      {
        "name": "Брускетта с томатами",
        "price": 350,
        "description": "Хрустящий чиабатта с ароматными томатами, базиликом и оливковым маслом."
      },
      {
        "name": "Тартар из лосося",
        "price": 650,
        "description": "Свежий лосось с авокадо, каперсами и соусом из лайма."
      },
      {
        "name": "Сырная тарелка",
        "price": 800,
        "description": "Ассорти фермерских сыров, подается с медом и орехами."
      },
      {
        "name": "Карпаччо из говядины",
        "price": 700,
        "description": "Тончайшие ломтики говядины с пармезаном, рукколой и трюфельным маслом."
      },
      {
        "name": "Овощные палочки с хумусом",
        "price": 300,
        "description": "Свежие овощи с домашним классическим хумусом."
      }
    ],
    "Горячие_блюда": [
      {
        "name": "Стейк Рибай",
        "price": 1800,
        "description": "Сочный стейк из мраморной говядины, прожарка на выбор."
      },
      {
        "name": "Лосось на гриле",
        "price": 1200,
        "description": "Филе лосося с гарниром из спаржи и соусом белое вино."
      },
      {
        "name": "Паста Карбонара",
        "price": 600,
        "description": "Спагетти с обжаренным беконом в нежном сливочном соусе с желтком."
      },
      {
        "name": "Утиная грудка",
        "price": 1100,
        "description": "Нежная утиная грудка с ягодным соусом и пюре из батата."
      },
      {
        "name": "Ризотто с белыми грибами",
        "price": 750,
        "description": "Итальянский рис со сливочным вкусом и ароматными лесными грибами."
      }
    ],
    "Десерты": [
      {
        "name": "Чизкейк Нью-Йорк",
        "price": 400,
        "description": "Классический сливочный чизкейк на песочной основе."
      },
      {
        "name": "Шоколадный фондан",
        "price": 450,
        "description": "Горячий шоколадный кекс с жидким центром, подается с мороженым."
      },
      {
        "name": "Яблочный штрудель",
        "price": 350,
        "description": "Теплый яблочный десерт в тонком тесте с корицей и ванильным соусом."
      },
      {
        "name": "Тирамису",
        "price": 400,
        "description": "Традиционный десерт с маскарпоне, кофе и савоярди."
      },
      {
        "name": "Фруктовая нарезка",
        "price": 500,
        "description": "Сезонные фрукты и ягоды."
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
    mainHTML+= `<div class = "card"><span>${menu[cat][i]["name"]}</span><div class = "pricetag">${menu[cat][i]["price"]}</div><span>${menu[cat][i]["description"]}</span></div>`;
  }
  mainHTML+='</span><span style = "grid-column: span 3;"></span>';
}

floating.innerHTML = floatingHTML;
main.innerHTML = mainHTML;
