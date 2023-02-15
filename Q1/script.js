let data = {
  Fish: {
    trout: {},
    salmon: {},
  },

  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};

creatTree = (container, obj) => {
  container.append(creatTreeDom(obj));
};

creatTreeDom = (obj) => {
  console.log( Object.keys(obj))
  if (!Object.keys(obj).length) return;

  let ul = document.createElement("ul");

  for (let key in obj) {
    let li = document.createElement("li");
    li.innerHTML = key;

    let childrenUl = creatTreeDom(obj[key]);
    if (childrenUl) {
      li.append(childrenUl);
    }
    ul.append(li);
  }
  return ul;
};

let container = document.getElementById("container");
creatTree(container, data);
