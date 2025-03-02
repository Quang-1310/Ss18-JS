let experience = +prompt("Mời bạn nhập số năm kinh nghiệm của nhân viên");
if(experience > 6){
    alert("Quản lý");
}
else if(experience >= 4){
    alert("Chuyên viên");
}
else if(experience >= 1){
    alert("Nhân viên có kinh nghiệm");
}
else{
    alert("Mới vào nghề");
}