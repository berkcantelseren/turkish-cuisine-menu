const menu = [
  {
    id: 1,
    title: "YAPRAK SARMA",
    category: "COLD STARTERS",
    price: 5.99,
    img: "./img/sarma.jpg",
    desc: `Stuffed vine leaves with rice, pine kernels and blackcurrants with olive oil`,
  },
  {
    id: 2,
    title: "PATLICAN EZME",
    category: "COLD STARTERS",
    price: 4.99,
    img: "./img/patlican-ezme.jpg",
    desc: `Grilled aubergine, yoghurt, olive oil and mixed herbs`,
  },
  {
    id: 3,
    title: "IMAM BAYILDI",
    category: "COLD STARTERS",
    price: 6.99,
    img: "./img/imam-bayildi.jpg",
    desc: `Roasted aubergine, stuffed with tomato, onion mixed peppers, nuts and herbs`,
  },
  {
    id: 4,
    title: "ADANA",
    category: "KEBABS AND GRILLS",
    price: 15.99,
    img: "./img/adana.jpg",
    desc: `Chargrilled lean tender minced lamb, marinated with herbs shaped over skewer`,
  },
  {
    id: 5,
    title: "COP SHISH",
    category: "KEBABS AND GRILLS",
    price: 17.99,
    img: "./img/cop-sis.jpg",
    desc: `Lean and tender lamb skewered and cooked over hot charcoal`,
  },
  {
    id: 5,
    title: "IZGARA KOFTE",
    category: "KEBABS AND GRILLS",
    price: 14.99,
    img: "./img/kofte.jpg",
    desc: `Succulent lamb meat balls with herbs and vegetables`,
  },
  {
    id: 7,
    title: "CHICKEN CAESAR SALAD",
    category: "SALADS",
    price: 10.00,
    img: "./img/caesar-salad.jpg",
    desc: `Grilled chicken breast, lettuce, tender bread, parmesan cheese and Caesar sauce`,
  },
  {
    id: 8,
    title: "EZME SALAD",
    category: "SALADS",
    price: 8.00,
    img: "./img/ezme-salad.jpg",
    desc: `Fresh chilli, tomato, red onions, parsley and sauce`,
  },
  {
    id: 9,
    title: "AVOCADO SALAD",
    category: "SALADS",
    price: 8.00,
    img: "./img/avacado-salad.jpg",
    desc: `Avocado, lettuce, cucumber and onion dressing with pomegranate sauce and olive oil`,
  },
  {
    id: 10,
    title: "MUCVER",
    category: "HOT MEZE",
    price: 6,
    img: "./img/mucver.jpg",
    desc: `Courgette feta cheese, flour, parsley, mixed and deep fried`,
  },
  {
    id: 11,
    title: "SUCUK GRILL",
    category: "HOT MEZE",
    price: 7.00,
    img: "./img/sucuk-grill.jpg",
    desc: `Chargrilled spicy beef sausage cooked over charcoal`,
  },
  {
    id: 12,
    title: "LAHMACUN",
    category: "HOT MEZE",
    price: 6,
    img: "./img/lahmacun.jpg",
    desc: `Very thin Turkish pizza topped with seasoned minced lamb, onion, tomatoes, parsley and red peppers`,
  },
];

const sectionCenter = document.querySelector(".section-center");

const buttonsFilter = document.querySelectorAll(".filter-btn")

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu)
});

buttonsFilter.forEach(function (btn) {
  btn.addEventListener("click",function (e) {
    const category = e.currentTarget.dataset.btn;
    const menuCategory = menu.filter(function (menuItem) {
      if(menuItem.category === category){
        return menuItem;
      }
    });
     if (category === 'ALL'){
      displayMenuItems(menu);
     }
     else{
      displayMenuItems(menuCategory);
     }
  });
});

function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title}>
    <div class="item-info">
      <header>
      <h4>${item.title}</h4>
      <h4 class="price">$${item.price}</h4>
    </header>
    <p class="item-text">${item.desc}</p>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}
