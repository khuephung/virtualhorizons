// Khởi tạo giá sản phẩm
const itemPrice1 = 1500000;
const itemPrice2 = 2000000;
const itemPrice3 = 3500000;
function initPrice() {
    document.getElementById("gia-1").innerHTML = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(itemPrice1);
    document.getElementById("gia-2").innerHTML = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(itemPrice2);
    document.getElementById("gia-3").innerHTML = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(itemPrice3);
  }
  window.onload = (event) => {
    initPrice ();
  }; 

// Thay đổi số lượng đơn hàng
      var RESHOP = {};
      var $collectionInputCounter = $(".input-counter");

      // Bộ Đếm Đầu Vào
      RESHOP.initInputCounter = function () {
        // Kiểm tra xem có Bộ Đếm Đầu Vào trên trang không
        if ($collectionInputCounter.length) {
          // Gắn sự kiện Click cho nút cộng
          $collectionInputCounter
            .find(".dem-nhap-lieu__tang")
            .on("click", function () {
              var $input = $(this).parent().find("input");
              var count = parseInt($input.val()) + 1; // Số + Số
              $input.val(count).change();
            });

          // Gắn sự kiện Click cho nút trừ
          $collectionInputCounter
            .find(".dem-nhap-lieu__giam")
            .on("click", function () {
              var $input = $(this).parent().find("input");
              var count = parseInt($input.val()) - 1; // Số - Số
              $input.val(count).change();
            });

          // Khi giá trị của phần tử thay đổi
          $collectionInputCounter.find("input").change(function () {
            var $this = $(this);
            var min = $this.data("min");
            var max = $this.data("max");
            var val = parseInt($this.val()); // Giá trị hiện tại

            // Kiểm tra ràng buộc
            if (!val) {
              val = 1;
            }

            // Phương thức min() trả về số có giá trị thấp nhất
            val = Math.min(val, max);

            // Phương thức max() trả về số có giá trị cao nhất
            val = Math.max(val, min);

            // Thiết lập Giá trị
            $this.val(val);
          });
        }
      };

      RESHOP.initInputCounter();

// Khởi tạo hàm cập nhật đơn hàng
function updatePrice() {
    // B1: Lấy ra số lượng của 3 item 
    var numberOfItem1 = document.getElementById("qlt-1").value;
    var numberOfItem2 = document.getElementById("qlt-2").value;
    var numberOfItem3 = document.getElementById("qlt-3").value;
    // alert(numberOfItem1);
    // alert(numberOfItem2);
    // alert(numberOfItem3);

    // B2: Tính tổng giá của thuế, tạm tính và tổng cộng
    var tamTinh = itemPrice1*numberOfItem1 + itemPrice2*numberOfItem2 + itemPrice3*numberOfItem3;
    var thue = tamTinh*10/100;
    var tong = tamTinh + thue;

    // B3: Cập nhật giá trị cho thuế, tạm tính và tổng cộng
    document.getElementById("tam-tinh").innerHTML = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tamTinh);
    document.getElementById("thue").innerHTML = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(thue);
    document.getElementById("tong-cong").innerHTML = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tong);
}
