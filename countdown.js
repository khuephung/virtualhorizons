// Lấy các phần tử HTML cần thao tác với JavaScript
let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");

// Thiết lập ngày và giờ kết thúc đợt ưu đãi
let endDate = new Date(2024, 03, 25, 00, 00); //0h00 ngày 19/12 Năm-Tháng-Ngày-Giờ-Phút
let endTime = endDate.getTime(); //Chuyển đổi thành định dạng thời gian

// Hàm đếm ngược
function countdown() {
  // Lấy thời gian hiện tại
  let todayDate = new Date();
  let todayTime = todayDate.getTime();

  // Tính thời gian còn lại đến ngày kết thúc
  let remainingTime = endTime - todayTime;

  // Định nghĩa các đơn vị thời gian
  let oneMin = 60 * 1000;
  let oneHr = 60 * oneMin;
  let oneDay = 24 * oneHr;

  // Hàm thêm số 0 nếu số lượng chữ số nhỏ hơn 10
  let addZeroes = (num) => (num < 10 ? `0${num}` : num);

  // Kiểm tra nếu thời gian đã hết
  if (endTime < todayTime) {
    clearInterval(i);
    document.querySelector(
      ".countdown"
    ).innerHTML = `<h1>ƯU ĐÃI ĐÃ HẾT HẠN!</h1>`;
  } else {

     // Tính số ngày, giờ, phút, giây còn lại
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr); // lấy phần dư của số giây sau khi đã trừ đi số ngày. Kết quả được chia cho oneHr để tính số giờ còn lại. 
    let minsLeft = Math.floor((remainingTime % oneHr) / oneMin); //lấy phần dư của số giây sau khi đã trừ đi số giờ.
    let secsLeft = Math.floor((remainingTime % oneMin) / 1000); //lấy phần dư của số giây sau khi đã trừ đi số phút.

     // Hiển thị thời gian còn lại trên giao diện
    dayBox.textContent = addZeroes(daysLeft);
    hrBox.textContent = addZeroes(hrsLeft);
    minBox.textContent = addZeroes(minsLeft);
    secBox.textContent = addZeroes(secsLeft);
  }
}
// Thiết lập định kỳ gọi hàm countdown mỗi giây
let i = setInterval(countdown, 1000);
// Gọi hàm countdown để hiển thị thời gian còn lại ngay khi trang được tải
countdown();