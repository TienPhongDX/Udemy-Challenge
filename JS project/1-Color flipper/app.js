////////////Random values in Array/////////////////////////////////
// const btn = document.getElementById("btn");
// const bgColor = document.querySelector(".color");
// const color = ["yellow", "blue", "#123456", "rgb(192,168,101)"];

// btn.addEventListener("click", function () {
//     const random = Math.floor(Math.random()*color.length);

//     var randomColor = color[random];
//     bgColor.textContent = randomColor;
//     document.body.style.background = randomColor; 
// });
////////////HEX Values/////////////////////////////////////////////
const btn = document.getElementById("btn");
const bgColor = document.querySelector(".color");

const Hexa = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E"];

btn.addEventListener("click", function () {
    hexaColor = "#";

    for (let i = 0; i < 6; i++) {
        var random = Math.floor(Math.random()*Hexa.length);
        hexaColor += Hexa[random];        
    }
    
    bgColor.textContent =hexaColor;
    document.body.style.background = hexaColor;
})