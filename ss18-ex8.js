let edgeA = +prompt("Mời bạn nhập cạnh thứ nhất");
let edgeB = +prompt("Mời bạn nhập cạnh thứ hai");
let edgeC = +prompt("Mời bạn nhập cạnh thứ ba");

if(edgeA + edgeB < edgeC || edgeA + edgeC < edgeB || edgeB + edgeC < edgeA){
    alert("3 cạnh không tạo thành 1 tam giác");
}
else{
    if(edgeA*edgeA + edgeB*edgeB === edgeC*edgeC || edgeA*edgeA + edgeC*edgeC === edgeB*edgeB || edgeB*edgeB + edgeC*edgeC === edgeA*edgeA){
        alert("3 cạnh tạo thành tam giác vuông");
    }
    else if(edgeA === edgeB &&edgeA === edgeC){
        alert("3 cạnh tạo thành tam giác đều");
    }
    else if(edgeA === edgeB || edgeA === edgeC || edgeB === edgeC){
        alert("3 cạnh tạo thành tam giác cân");
    }
    else{
        alert("3 cạnh tạo thành 1 tam giác thường");
    }
}