console.log("mamad");
let elem = document.getElementById("elem");
console.log(elem.children);

clear = (elem) => {
  console.log("salam");
  for (let i = 0; i < elem.childNodes.length; i++) {
    console.log(elem.childNodes[i]);
    elem.childNodes[i].innerHTML = "";
  }
};
clear(elem);
