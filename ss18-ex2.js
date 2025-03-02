let mathPoint = +prompt("Mời bạn nhập điểm toán");
let literaryPoint = +prompt("Mời bạn nhập điểm văn");
let englishPoint = +prompt("Mời bạn nhập điểm anh");
let average = (mathPoint + literaryPoint + englishPoint) / 3;

if(average >= 8){
    alert("Giỏi");
}
else if(average >= 6.5 && average <= 7.9){
    alert("Khá");
}
else if(average >= 5 && average <= 6.4){
    alert("Trung bình");
}
else{
    alert("Yếu");
}