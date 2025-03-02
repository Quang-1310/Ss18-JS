let userName = prompt("Mời bạn nhập tên đăng nhập");

if(userName === "ADMIN"){
    let passWord = prompt("Mời bạn nhập mật khẩu");
    if(passWord === "TheMaster"){
        alert("Welcome");
    }
    else if(passWord === ""){
        alert("Cancelled");
    }
    else{
        alert("Wrong password");
    }
}
else if(userName === ""){
    alert("Cancelled");
}
else{
    alert("I Don't know you");
}