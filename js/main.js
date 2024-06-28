//get elements from DOM
//first select for fonts
let fonts = document.getElementById("fonts");
//second select for color
let colors = document.getElementById("colors");
//third select for fontSize
let fontSized = document.getElementById("fontSized");
//the div where we will apply the user's selections
let toy = document.getElementById("toy");
//constants for local storage variables
const FONT_KEY = "fonts";
const COLOR_KEY = "colors";
const FONTSIZE_KEY = "fontSized";
//function to get local storage data
function getLocalStorageData(key) {
  //get the item by key then convert it to object again
  return JSON.parse(window.localStorage.getItem(key));
}
//function to set data to local storage
//take key name that will be written in local storage
//the index of just selected element [while change event]
//the value of selected option to apply it later [when we apply local storage settings]
function setLocalSorageDate(key, i, v) {
  //put our data in an object
  const data = {
    index: i,
    value: v,
  };
  //set data in local storage
  window.localStorage.setItem(key, JSON.stringify(data));
}
//function to apply stored data settings
//now after the user make refresh
//we will check if there is local storag data -> so it will applied
//else -> we will apply default data -> first value of first selection for all select tags
//it takes :
// the select tag
// the key that we will check for in  local storage
//the style that will applied and its value depend on [local storage data || default value]
//unit -> some styles need units as you now
function applyStoredDataSettings(
  selectedELement,
  key,
  styleproperity,
  unit = ""
) {
  //first we get data form local storage
  // if it return null -> that means this key not exist in local storage
  //else -> that mean there's data for this key and we will apply it
  const data = getLocalStorageData(key);
  if (data !== null) {
    //add selected attribute
    //select the element that the user had select before refresh
    selectedELement.options[data.index].setAttribute("selected", "");
    //apply style to our div
    toy.style[styleproperity] = data.value + unit;
  } else {
    //set default by set select attribute for the first option in the select tag
    selectedELement.options[0].setAttribute("selected", "");
    // and apply it to our toy div
    toy.style[styleproperity] = selectedELement.options[0].value + unit;
  }
}
//use localStorage apply function for all selects feilds
applyStoredDataSettings(fonts, FONT_KEY, "fontFamily", ", sans-serif");
applyStoredDataSettings(colors, COLOR_KEY, "color", "");
applyStoredDataSettings(fontSized, FONTSIZE_KEY, "fontSize", "px");

//add events listener for fonts feild
fonts.addEventListener("change", () => {
  //apply new selected data for our div
  toy.style.fontFamily = fonts.value + ", sans-serif";
  //delete selected form prevoius selected option
  document.querySelector("#fonts [selected]").removeAttribute("selected");
  // and apply it to current selection
  let choosenOption = fonts.options[fonts.selectedIndex];
  choosenOption.setAttribute("selected", "");
  //save data in local storage
  setLocalSorageDate(FONT_KEY, fonts.selectedIndex, fonts.value);
});
//same steps for color
colors.addEventListener("change", () => {
  toy.style.color = colors.value;
  document.querySelector("#colors [selected]").removeAttribute("selected");
  // and apply it to new  value
  let choosenOption = colors.options[colors.selectedIndex];
  choosenOption.setAttribute("selected", "");
  setLocalSorageDate(COLOR_KEY, colors.selectedIndex, colors.value);
});
//same steps for fontSize
fontSized.addEventListener("change", () => {
  toy.style.fontSize = fontSized.value + "px";
  document.querySelector("#fontSized [selected]").removeAttribute("selected");
  let choosenOption = fontSized.options[fontSized.selectedIndex];
  choosenOption.setAttribute("selected", "");
  setLocalSorageDate(FONTSIZE_KEY, fontSized.selectedIndex, fontSized.value);
});
