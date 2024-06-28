//get elements from DOM
let fonts = document.getElementById("fonts");
let colors = document.getElementById("colors");
let fontSized = document.getElementById("fontSized");
let toy = document.getElementById("toy");
//use set/remove attribute
//use local storage
//check local storage for font each element
if (window.localStorage.getItem("fonts") != null) {
  let values = JSON.parse(window.localStorage.getItem("fonts"));
  // and apply it to new  value
  let choosenOption = fonts.options[values.index];
  choosenOption.setAttribute("selected", "");
  //apply changes on the selected div
  toy.style.fontFamily = values.value + ", sans-serif";
} else {
  //for default selected
  fonts.options[0].setAttribute("selected", "");
  toy.style.fontFamily = fonts.options[0].value + ", sans-serif";
}
//local storage for color
if (window.localStorage.getItem("colors") != null) {
  let values = JSON.parse(window.localStorage.getItem("colors"));
  // and apply it to new  value
  let choosenOption = colors.options[values.index];
  choosenOption.setAttribute("selected", "");
  //apply changes on the selected div
  toy.style.color = values.value;
} else {
  //for default selected
  colors.options[0].setAttribute("selected", "");
  toy.style.color = colors.options[0].value;
}
//local forage for fontSize
if (window.localStorage.getItem("fontSized") != null) {
  let values = JSON.parse(window.localStorage.getItem("fontSized"));
  // and apply it to new  value
  let choosenOption = fontSized.options[values.index];
  choosenOption.setAttribute("selected", "");
  //apply changes on the selected div
  toy.style.fontSize = values.value + "px";
} else {
  //for default selected
  fontSized.options[0].setAttribute("selected", "");
  toy.style.color = fontSized.options[0].value + "px";
}

// select font family
fonts.addEventListener("change", () => {
  toy.style.fontFamily = fonts.value + ", sans-serif";
  //delete selected form default
  document.querySelector("#fonts [selected]").removeAttribute("selected");
  // and apply it to new  value
  let choosenOption = fonts.options[fonts.selectedIndex];
  choosenOption.setAttribute("selected", "");
  //save data in local storage
  let fontData = {
    index: fonts.selectedIndex,
    value: fonts.value,
  };
  //add new updates to loacl storage
  window.localStorage.setItem("fonts", JSON.stringify(fontData));
});
//select color
colors.addEventListener("change", () => {
  toy.style.color = colors.value;
  document.querySelector("#colors [selected]").removeAttribute("selected");
  // and apply it to new  value
  let choosenOption = colors.options[colors.selectedIndex];
  choosenOption.setAttribute("selected", "");
  //save data in local storage
  let colorData = {
    index: colors.selectedIndex,
    value: colors.value,
  };
  //add new updates to loacl storage
  window.localStorage.setItem("colors", JSON.stringify(colorData));
});
//select fontSized
fontSized.addEventListener("change", () => {
  toy.style.fontSize = fontSized.value + "px";
  document.querySelector("#fontSized [selected]").removeAttribute("selected");
  // and apply it to new  value
  let choosenOption = fontSized.options[fontSized.selectedIndex];
  choosenOption.setAttribute("selected", "");
  //save data in local storage
  let fontSizeDate = {
    index: fontSized.selectedIndex,
    value: fontSized.value,
  };
  //add new updates to loacl storage
  window.localStorage.setItem("fontSized", JSON.stringify(fontSizeDate));
});
