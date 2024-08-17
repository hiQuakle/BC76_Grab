//function expression
//Tên xe, hãng xe, màu sắc, giá tiền
let hienThiThongTinXe = function (tenXe, hangXe, mauSac, giaTien) {
  console.log(
    `Đây là chiếc ${tenXe} của hãng ${hangXe}, có màu ${mauSac} và có giá trị là ${giaTien}`
  );
};
hienThiThongTinXe("MayBachS450", "Mercedes", "Green", "5 tỉ");

//arrow function (hàm mũi tên)
//Biến thể 1: Khi arrow function chỉ có một lệnh return chạy , cho phép loại bỏ "{} và "return" để cú pháp ngắn hơn
//Biến thể 2: Khi arrow function chỉ có một tham số, cho phép loại bỏ "()"
let gioiThieuMonAn = (tenMon) => ` Món ${tenMon} là món ngon nhất thế giới`;
let gioiThieu = gioiThieuMonAn("trứng");
console.log(gioiThieu);

//CallBack function
// Nhà Trường yêu cầu thực hiện tính điểm trung bình cho 3 môn: Toán, Hoá, Sinh. Nhà trường còn yêu cầu ở mỗi lần chạy hàm tính điểm TB sẽ muốn thực hiện thêm một số hành động khác nhau: vd khi tính xong điểm TB sẽ thông báo cho sinh viên đó biết hoặc khi tính xong điểm sẽ xếp loại sinh viên đó
function thongBaoSinhVien(diem) {
  console.log(`Thông báo, điểm của bạn là ${diem}`);
}
function xepLoai(diem) {
  if (diem >= 8) {
    console.log("Thông báo sinh viên loại giỏi ");
  } else {
    console.log("Thông báo sinh viên loại khá");
  }
}

function diemTB(toan, hoa, sinh, chucNang) {
  // Tham số chức năng đóng vai trò là một callback function giúp thực hiện các xử lí khác nhau khi tính toán ra điểm tb
  let diemTB = (toan + hoa + sinh) / 3;
  chucNang(diemTB);
}

//Ý nghĩa của việc sử dụng callback function: tạo cầu nối giúp xử lí những tác vụ khác nhau từ các giá trị được tính toán trong function, với tham số đóng vai trò là callback function, giờ đây mỗi lần function có một kết quả, ta có thể truyền vào mọt function khác để xử lí các hành động từ kết quả đó
diemTB(8, 6, 9, xepLoai); //vinh 8 6 9 // Xếp loại
diemTB(3, 2, 4, thongBaoSinhVien); // khải trương 3 2 4 //Thông báo điểm
