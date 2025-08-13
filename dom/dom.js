let $color = document.getElementById("color");
console.log($color);

//querySelectorAll

let $infoItem = document.querySelectorAll("div.info-item");
console.log($infoItem);

//DOM의 CalssName 변경하는 방법
let $name = document.getElementById("name");
$name.className = "dog-name";
console.log($name);
console.log($name.className);

let $type = document.createElement("div");
$type.className = "info-item";
$type.id = "type";
$type.textContent = "말티즈";

console.log($type);
let $button = document.createElement("button");
$button.id = "new-button";
$button.classList.add("new-button");
$button.textContent = "버튼";
$button.addEventListener("click", () => {
  window.alert("클릭");
});

let $type = document.createElement("div");
$type.className = "info-item";
$type.id = "type";
let $typeText = document.createTextNode("말티즈");

const $fruitSelect = document.getElementById("fruitSelect");

$fruitSelect;
