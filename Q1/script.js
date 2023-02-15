const foodsMenu = document.getElementById("foodsMenu");

const foods = [
  {
    id: 0,
    name: "همبرگر معمولی",
    price: 8000,
    src: "img/hamburger.png",
  },
  {
    id: 1,
    name: "همبرگر مخصوص",
    price: 10000,
    src: "img/hamburger.png",
  },
  {
    id: 2,
    name: "همبرگر معمولی با قارچ و پنیر",
    price: 10000,
    src: "img/hamburger.png",
  },
  {
    id: 3,
    name: "همبرگر مخصوص با قارچ و پنیر",
    price: 20000,
    src: "img/hamburger.png",
  },
  {
    id: 4,
    name: "سیب زمینی سرخ کرده ویژه",
    price: 25000,
    src: "img/french_fries.png",
  },
  {
    id: 5,
    name: "سیب زمینی سرخ کرده",
    price: 10000,
    src: "img/french_fries.png",
  },
  {
    id: 6,
    name: "نوشابه رژیمی",
    price: 6000,
    src: "img/soda.png",
  },
  {
    id: 7,
    name: "نوشابه",
    price: 5000,
    src: "img/soda.png",
  },
  {
    id: 8,
    name: "سالاد فصل",
    price: 8000,
    src: "img/salad.png",
  },
  {
    id: 9,
    name: "سالاد سزار",
    price: 25000,
    src: "img/ceasar.png",
  },
];
function renderFood(foods) {
  foods.forEach((food) => {
    const htmlTag = `
     <div
        class="d-flex bg-white shadow w-40 gap-2 rounded-4 p-2 justify-content-between mt-4"
      >
        <div class="d-flex gap-2">
          <div class="w-30">
            <img src="${food.src}" alt="" class=" h-100 w-100 " />
          </div>
          <div class="d-flex flex-column">
            <h5> ${food.name} </h5>
            <p>${food.price} تومان</p>
            <div class="btns d-flex">
              <button
                class="w-25 border-0 rounded-end bg-red-btn btn-hover" onclick="countPlus(this)"
              >
                <img src="img/add.png" alt="" class="w-100" />
              </button>
              <span class="w-25 text-center" id="count-${food.id}">0</span>
              <button
                class="w-20 border-0 rounded-start bg-red-btn btn-hover" onclick="countMinus(this)"
              >
                <img src="img/minus.png" alt="" class="w-100" />
              </button>
            </div>
          </div>
        </div>
        <div class="d-flex align-self-end ">
          <span id="total-${food.id}">0</span>
          <p>تومان</p>
        </div>
      </div>
      `;
    foodsMenu.insertAdjacentHTML("beforeend", htmlTag);
  });
}
renderFood(foods);

console.log("salam");

const totalCost = [];

const countPlus = (el) => {
  const foodId = +el.parentElement.children[1].id.slice(-1);
  let count = +document.getElementById(`count-${foodId}`).textContent;
  document.getElementById(`count-${foodId}`).textContent = ++count;
  calculateTotal(el, count);
};

const countMinus = (el) => {
  const foodId = +el.parentElement.children[1].id.slice(-1);
  let count = +document.getElementById(`count-${foodId}`).textContent;
  if (count > 0) {
    document.getElementById(`count-${foodId}`).textContent = --count;
    decreaseTotal(el);
  }
};
const calculateTotal = function (el, count) {
  const foodId =
    +el.parentElement.parentElement.parentElement.parentElement.childNodes[3].children[0].id.slice(
      -1
    );
  const total = document.getElementById(`total-${foodId}`);
  const price = foods[foodId].price;

  total.textContent = price * count;
  setTotalCost(price);
};
const decreaseTotal = (el) => {
  const foodId =
    +el.parentElement.parentElement.parentElement.parentElement.childNodes[3].children[0].id.slice(
      -1
    );
  const total = document.getElementById(`total-${foodId}`);
  console.log(total);
  const price = foods[foodId].price;

  total.textContent = total.textContent - price;
  setTotalCosts(price);
};
let t = [];
const setTotalCost = (total) => {
  const all = document.getElementById("all-price");
  const services = document.getElementById("serves");
  const pay = document.getElementById("pay");
  const totalCost = total;
  t.push(totalCost);
  const totalC = t.reduce((ec, el) => {
    return ec + el;
  }, 0);
  all.textContent = totalC;

  const totalS = (services.textContent = totalC * 0.05);
  const totalPay = (pay.textContent = totalC + totalS);
  setOff(totalPay);
};

const setTotalCosts = (total) => {
  const all = document.getElementById("all-price");
  const services = document.getElementById("serves");
  const pay = document.getElementById("pay");
  const m = all.textContent - total;
  t = [];
  t.push(m);
  all.textContent = m;

  console.log(m);
  const totalS = (services.textContent = m * 0.05);
  const totalPay = (pay.textContent = m + totalS);
  setOff(totalPay);
};

const setOff = (total) => {
  const offValue = document.getElementById("off-input");
  const offCheck = document.getElementById("off-check");
  const off = document.getElementById("off");
  const pay = document.getElementById("pay");
  offCheck.addEventListener("click", (e) => {
    e.stopPropagation();
    const check = offValue.value;
    if (check == "gold") {
      off.textContent = 30;
      Math.abs((pay.textContent = total * 0.7));
    } else if (check == "silver") {
      off.textContent = 20;
      Math.abs((pay.textContent = total * 0.8));
    } else if (check == "bronze") {
      off.textContent = 10;
      Math.abs((pay.textContent = total * 0.9));
    } else {
      alert("کد اشتباه لطفا با دقت بیشتری کد را وارد کنید");
    }
  });
};

// const incrementDecrement = (event) => {
//   const target = event.target;
//   const id = target.data.id;
//   if (target.className.includes("btns")) {
//     if (target.className.includes("plus")) {
//       orderFoodUpdate(id, "add");
//     } else {
//       orderFoodUpdate(id, "minus");
//     }
//   }
//   return id;
// };
// const orderFoodUpdate = (id, operation) => {
//   if (operation === "add") {
//   }
// };
