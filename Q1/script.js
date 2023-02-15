let ul = document.createElement("ul");
document.body.append(ul);

while (true) {
  let data = prompt("لطفا متن خود را وارد کنید", "");
  if (!data) {
    break;
  }
  let li = document.createElement("li");
  li.textContent = data;
  ul.append(li);
}
