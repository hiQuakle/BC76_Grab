const GRAB_CAR = "grabCar";
const GRAB_SUV = "grabSUV";
const GRAB_BLACK = "grabBlack";

//NV1: Thực hiện tạo một sự kiện click cho nút button tính tiền và dom tới các input để lấy dữ liệu
// NV2: Viết 4 function riêng biệt có nhận tham số để từ các dữ liệu người dùng nhập sẽ xử lí trả về giá kmDauTien, giá kmTu1Den19 và giá thoiGianCho
//NV3: Sau khi đã tìm được các giá tiền phù hợp, áp dụng tính toán và trả về kết quả phù hợp nhất
//NV4: kiểm tra ở phần dưới button tính tiền có một layoyt dùng để hiện thị tổng tiền, xử lí khi click vô nút tính tiền sẽ xuất hiện layout đó và trả kết quả ( đã chuyển đổi kiểu tiền tệ) và bên trong để hiển thị người dùng.
function giaKmDauTien(loaiXe) {
  switch (loaiXe) {
    case GRAB_CAR: {
      return 8000;
    }
    case GRAB_SUV: {
      return 9000;
    }
    case GRAB_BLACK: {
      return 10000;
    }
  }
}
function giaKmTu1Den19(loaiXe) {
  switch (loaiXe) {
    case GRAB_CAR: {
      return 7500;
    }
    case GRAB_SUV: {
      return 8500;
    }
    case GRAB_BLACK: {
      return 9500;
    }
  }
}
function giaKmTu19TroLen(loaiXe) {
  switch (loaiXe) {
    case GRAB_CAR: {
      return 7000;
    }
    case GRAB_SUV: {
      return 8000;
    }
    case GRAB_BLACK: {
      return 9000;
    }
  }
}
function giaThoiGianCho(loaiXe) {
  switch (loaiXe) {
    case GRAB_CAR: {
      return 2000;
    }
    case GRAB_SUV: {
      return 3000;
    }
    case GRAB_BLACK: {
      return 3500;
    }
  }
}

document.getElementById("btnTinhTien").onclick = function () {
  let soKm = document.getElementById("txt-km").value * 1;
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;

  let loaiXeGrabCar = document.querySelector("input[name='selector']:checked");
  if (loaiXeGrabCar == null) {
    alert("Vui lòng chọn loại xe");
    return;
  }
  let loaiXe = loaiXeGrabCar.value;
  let tienKmDauTien = giaKmDauTien(loaiXe);
  let tienKmTu1Den19 = giaKmTu1Den19(loaiXe);
  let tienKmTu19TroLen = giaKmTu19TroLen(loaiXe);
  let tienTgCho = giaThoiGianCho(loaiXe);
  let tongTien = 0;
  if (soKm <= 19) {
    tongTien = 1 * tienKmDauTien + (soKm - 1) * tienKmTu1Den19;
  } else {
    // 25 = 1 + 18
    tongTien =
      1 * tienKmDauTien + 18 * tienKmTu1Den19 + (soKm - 19) * tienKmTu19TroLen;
  }
  // 8p -3p = 5p/3
  let soTienPhat = Math.floor((thoiGianCho - 3) / 3);
  if (thoiGianCho <= 3) {
    soTienPhat = 0;
  }
  console.log(soTienPhat);
  tongTien += soTienPhat * tienTgCho;
  console.log(tongTien);
};

//Tạo một chức năng click cho nút in hoá đơn
// document.getElementById("btnInHoaDon").onclick = function () {
//   $("#myModal").modal("show");
//   document.querySelector(".modal-body").innerHTML = `

//   `;
// };
