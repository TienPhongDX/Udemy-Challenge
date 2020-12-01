var random_Number = Math.floor(Math.random() * 6) + 1;                // Tạo ngẫu nhiên số từ 1->6 với Math.floor: số thực thành số nguyên
                                                                    //                               Math.random: tạo ngẫu nhiên từ 0 -> 0.999
                                                                    // Nhân 6 để nâng khoảng 0->0.999 thành 0->5.999 và +1 đề được 1->6
var random_Dice_Image = "images/dice"+ random_Number +".png";         // tạo đường dẫn random đến img

var dice_1=document.querySelectorAll("img")[0];                     // chọn img tag để đổi hình
dice_1.setAttribute("src", random_Dice_Image);                      // Set src attribute gốc thành src random
//////////////////////////////////////////////////////////////////////
// Tạo riêng 2 biến để tránh trường hợp 2 xúc sắc trùng nhau
var random_Number2 = Math.floor(Math.random() * 6) + 1;
var random_Dice_Image2 = "images/dice"+random_Number2+".png"; 

var dice_2 = document.querySelectorAll("img")[1];
dice_2.setAttribute("src", random_Dice_Image2);

if (random_Number > random_Number2) {
    document.querySelector("h1").innerHTML= "💖Player 1 win";
}
else if (random_Number < random_Number2) {
    document.querySelector("h1").innerHTML= "💥Player 2 win";
} else {
    document.querySelector("h1").innerHTML= "🚩Draw";
}