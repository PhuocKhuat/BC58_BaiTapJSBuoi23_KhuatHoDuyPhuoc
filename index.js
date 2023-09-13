//Bài 1: Tính tiền lương nhân viên. Viết chương trình tính tiền lương nhân viên. Lương 1 ngày: 100.000 .Cho người dùng nhập vào số ngày làm.
function tinhLuong() {
    //INPUT: nhập vào số ngày làm và lấy qua id có giá trị là soNgayLam. 
    var soNgayLam = document.getElementById('soNgayLam').value;
    //Khai báo biến luong1Ngay và lấy qua id có giá trị là soNgayLam.
    var luong1Ngay = document.getElementById('luong1Ngay').value;
    //Khai báo biến output1 có giá trị bằng 0.
    var ouput1 = 0;
    //PROGRESS:
    //B1: Khai báo biến ketQuaTinhLuong và lấy qua id có giá trị là ketQuaTinhLuong
    var ketQuaTinhLuong = document.getElementById('ketQuaTinhLuong');
    //B2: sử dụng công thức ouput1 = soNgayLam * luong1Ngay.
    ouput1 = soNgayLam * luong1Ngay;
    //B3: Xuất biến ketQuaTinhLuong ra màn hình có giá trị là output1.
    ketQuaTinhLuong.innerHTML = ouput1.toLocaleString() + "" + "VND";
}
//Bài 2: Tính giá trị trung bình. Viết chương trình nhập vào 5 số thực. Tính giá trị trung bình của 5 số này và xuất ra màn hình.
//Khai báo hàm sự kiện onclick có giá trị là clickSoThuc()
function clickSoThuc() {
    //INPUT: nhập vào 5 số thực.
    var nhapSoThuc1 = parseFloat(document.getElementById('nhapSoThuc1').value);
    var nhapSoThuc2 = parseFloat(document.getElementById('nhapSoThuc2').value);
    var nhapSoThuc3 = parseFloat(document.getElementById('nhapSoThuc3').value);
    var nhapSoThuc4 = parseFloat(document.getElementById('nhapSoThuc4').value);
    var nhapSoThuc5 = parseFloat(document.getElementById('nhapSoThuc5').value);
    //OUTPUT: Khai báo biến output2 có giá trị bằng 0.
    var output2 = 0;
    //PROGRESS:
    //B1: khai báo biến ketQuaTrungBinh và lấy id có giá trị là ketQuaTrungBinh. 
    var ketQuaTrungBinh = document.getElementById('ketQuaTrungBinh');
    //B2: sử dụng công thức output2 = (nhapSoThuc1 + nhapSoThuc2 + nhapSoThuc3 + nhapSoThuc4 + nhapSoThuc5) / 5.
    output2 = (nhapSoThuc1 + nhapSoThuc2 + nhapSoThuc3 + nhapSoThuc4 + nhapSoThuc5) / 5;
    //B3: Xuất ra ketQuaTrungBinh ra màn hình có giá trị là output2.
    ketQuaTrungBinh.innerHTML = output2;
}
//Bài 3: Quy đổi tiền. Giá USD hiện nay là 23.500 VND. Viết chương trình quy đổi từ USD sang VND. Cho người dùng nhập vào số tiền USD. Tính và xuât ra số tiền sau quy đổi VND.
//Khai báo biến nutquydoi, lấy id thông qua id có giá trị nutquydoi
var nutQuyDoi = document.getElementById('nutQuyDoi');
nutQuyDoi.onclick = function () {
    //INPUT: Nhập vào số tiền VND.
    var soTienUsd = document.getElementById('soTienUsd').value;
    //OUTPUT: Khai báo biến output3 ban đầu có giá trị là 0.
    var output3 = 0;
    //PROGRESS:
    //B1: Khai báo biến tagspan3 và lấy qua id là soTienVnd.
    var tagspan3 = document.getElementById('soTienVnd');
    //B2: viết công thức output3 = sotienusd * 23500.
    output3 = soTienUsd * 23500;
    //Xuất ra màn hình giá trị của biến tagspan3 bằng giá trị của biến output3.
    tagspan3.value = output3.toLocaleString();
}
// Bài 4: Tính diện tích, chu vi hình chữ nhật. Viết chương trình nhập vào 2 chiều dài và rộng của HCN (hình chữ nhật).
//Khai báo hàm sự kiện onclick có giá trị là clickdientich()
function clickDienTich() {
    //INPUT: Nhập vào chiều dài và rộng.
    var chieuDai = document.getElementById('chieuDai');
    var chieuRong = document.getElementById('chieuRong');
    //OUTPUT: Khai báo biến ban đầu output4a = 0;
    var output4a = 0;
    // PROGRESS:
    //B1: Khai báo biến tagspan4a và lấy qua id có giá trị là ketQuaDienTich. 
    var tagspan4a = document.getElementById('ketQuaDienTich');
    //B2: Sử dụng công thức tính diện tích là chieuDai * chieuRong;
    output4a = chieuDai.value * chieuRong.value;
    //B3: Xuất biến tagspan4a ra màn hình bằng biến output4a.
    tagspan4a.innerHTML = output4a;
}
//Khai báo hàm sự kiện onclick có giá trị là clickchuvi()
function clickChuVi() {
    //INPUT: Nhập vào chiều dài và rộng.
    var chieuDai = document.getElementById('chieuDai');
    var chieuRong = document.getElementById('chieuRong');
    //OUTPUT: Khai báo biến ban đầu output4b = 0;
    var output4b = 0;
    // progress
    //B1: Khai báo biến tagspan4b và lấy qua id có giá trị là ketQuaDienTich.
    var tagspan4b = document.getElementById('ketQuaChuVi');
    //B2: Sử dụng công thức tính chu vi là (chieuDai + chieuRong) *2;
    output4b = (chieuDai.value * 1 + chieuRong.value * 1) * 2;
    //B3: Xuất biến tagspan4b ra màn hình bằng biến output4b.
    tagspan4b.innerHTML = output4b;
}
//Bài 5: Tính tổng 2 ký số.Viết chương trình nhập vào 1 số có 2 chữ số (VD: 12,44,83). Tính tổng 2 ký số vừa nhập.
//Khai báo hàm liên kết đến nút có id là tong2KySo.
var tong2KySo = document.getElementById('tong2KySo').onclick = function () {
    //INPUT: Nhập vào 1 số có hai chữ số.
    var nhap1So = Number(document.getElementById('nhap1So').value);
    //OUTPUT: Khai báo biến output5 ban đầu = 0. 
    var output5 = 0;
    //PROGRESS: 
    //B1: Khai báo biến ketquaTong và lấy qua id là ketquaTong.
    var ketQuaTong = document.getElementById('ketQuaTong');
    //B2: Khai báo biến hangChuc và sử dụng hàm Math.floor(nhap1So / 10) lấy số nguyên.
    var hangChuc = Math.floor(nhap1So / 10);
    //B3: Khai báo biến hangDonVi và sử dụng hàm Math.floor(nhap1So % 10) lấy số nguyên.
    var hangDonVi = Math.floor(nhap1So % 10);
    //B4: Tạo công thức cho output5 = hangChuc + hangDonVi.
    output5 = hangChuc + hangDonVi;
    //B5: Xuất biến ketQuaTong ra màn hình bằng biến output5.
    ketQuaTong.innerHTML = output5;
}