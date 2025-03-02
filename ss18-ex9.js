let hour = parseInt(prompt("Nhập giờ (0-23):"), 10);
let minute = parseInt(prompt("Nhập phút (0-59):"), 10);
let second = parseInt(prompt("Nhập giây (0-59):"), 10);

if (isNaN(hour) || isNaN(minute) || isNaN(second) ||
    hour < 0 || hour > 23 || minute < 0 || minute > 59 || second < 0 || second > 59) {
    alert("Dữ liệu không hợp lệ.");
} else {
    let period = "AM";
    if (hour >= 12) {
        period = "PM";
    }
    let hour12 = hour % 12;
    if (hour12 === 0) {
        hour12 = 12;
    }
    let minuteStr = "" + minute;
    if (minute < 10) {
        minuteStr = "0" + minute;
    }
    let secondStr = "" + second;
    if (second < 10) {
        secondStr = "0" + second;
    }
    alert(hour12 + ":" + minuteStr + ":" + secondStr + " " + period);
}