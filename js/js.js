const btnAllMenu = document.getElementById("btnAllMenu");
const btnStarter = document.getElementById("btnStarter");
const btnEntrees = document.getElementById("btnEntrees");
const btnDesert = document.getElementById("btnDesert");
const menuContainer = document.getElementById("menuContainer");

function creatNodeFn(e) {
  const li = document.createElement("li");
  li.setAttribute("class", "card");

  const img = document.createElement("img");
  img.setAttribute("src", `${e.imageURL}`, "class", "menuImg");
  img.setAttribute("class", "menuImg");

  const h2 = document.createElement("h2");
  h2.innerHTML = e.title;

  const h3 = document.createElement("h3");
  h3.innerHTML = e.course;

  const h4 = document.createElement("h4");
  h4.innerHTML = "$" + e.price;

  const p = document.createElement("p");
  p.innerHTML = e.description;

  menuContainer.appendChild(li);
  li.appendChild(img);
  li.appendChild(h3);
  li.appendChild(h2);
  li.appendChild(p);
  li.appendChild(h4);
}

// load full menu
dishes.map(function (e) {
  creatNodeFn(e);
});

btnAllMenu.addEventListener("click", function () {
  menuContainer.innerHTML = "";
  dishes.map(function (e) {
    creatNodeFn(e);
  });
});

btnStarter.addEventListener("click", function () {
  menuContainer.innerHTML = "";
  dishes.filter(function (e) {
    if (e.course == "Starters") {
      creatNodeFn(e);
    }
  });
});

btnEntrees.addEventListener("click", function () {
  menuContainer.innerHTML = "";
  dishes.filter(function (e) {
    if (e.course == "Entrees") {
      creatNodeFn(e);
    }
  });
});
btnDesert.addEventListener("click", function () {
  menuContainer.innerHTML = "";
  dishes.filter(function (e) {
    if (e.course == "Desserts") {
      creatNodeFn(e);
    }
  });
});
