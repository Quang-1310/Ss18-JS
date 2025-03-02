let leapYear = +prompt("Mời bạn nhập vào năm");

if(leapYear % 400 === 0 || leapYear % 4 === 0 && leapYear % 100 !== 0){
    alert("Năm nhuận")
}
else{
    alert("Không phải năm nhuận");
}