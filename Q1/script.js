const links = document.querySelectorAll("a");


links.forEach((link) => {
  if (
    link.innerHTML.includes("://") &&
    !link.innerHTML.includes("http://internal.com")
  ) {
    link.setAttribute("style", "color:orange;");
  }
});