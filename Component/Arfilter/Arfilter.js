
const fileName2 = document.getElementById("file-name-2");

const cancelBtn2 = document.getElementById("cancel-btn-2");

const clickBtn2 = document.getElementById("custom-btn-2");
const img2 = document.getElementById("img2");
const image3DDiv = document.querySelector(".image-3d-file");
const drag3dfile = document.getElementById("drop-file-2");
const filepreview = document.getElementById("image-2");

let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

// Ẩn div image
document.addEventListener("DOMContentLoaded", function() {
    const imageDiv = document.querySelector(".image");
    imageDiv.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function() {
    const imageDiv = document.querySelector(".image-3d-file");
    imageDiv.style.display = "none";
});




cancelBtn2.addEventListener("click", function() {
  img2.src = "";
  filepreview.classList.remove("active");
  image3DDiv.style.display = "none";
})
function open3DFile(file) {
let done = true;
if (file) {
    //console.log(file.name);
    const allowedFormats = [".png", ".jpeg", ".jpg", ".gif", ".obj", ".fbx", ".glb", ".gltf"];
    const fileExtension = file.name.split('.').pop().toLowerCase();
  if (allowedFormats.includes("." + fileExtension)) {
    if (file.size <= 10 * 1024 * 1024) {
        setPreviewImage("." + fileExtension, file); // Gọi hàm để thiết lập ảnh minh họa từ định dạng file
        // const reader = new FileReader();
        // reader.onload = function() {
        //   const result = reader.result;
        //   img2.src = result; 
        {
          filepreview.classList.add("active");
          image3DDiv.style.display = "block";
          fileName2.textContent = file.name;
        }
        
        reader.readAsDataURL(file);
    } else {
        alert('Dung lượng file vượt quá 10MB');
        //this.value = ""; // Reset input
        done = false
      }
    } else {
      alert('Định dạng file không hợp lệ. Chỉ chấp nhận file .jpg hoặc .jpeg');
      //this.value = ""; // Reset input
      done = false;
    }
  }
//   if (done) 
//   fileName2.textContent = file.name;
}


function setPreviewImage(format, imageUrl) {
const img2 = document.getElementById("img2");
  // Nếu là định dạng hình ảnh, hiển thị ảnh được tải lên
  if (format === ".png" || format === ".jpeg" || format === ".jpg") {
  const reader = new FileReader();
  reader.onload = function() {
    img2.src = reader.result;
  }
  reader.readAsDataURL(imageUrl);
} else { // Nếu là định dạng file 3D, sử dụng ảnh minh họa tương ứng
let imageUrl;
// Thay đổi imageUrl tương ứng với định dạng file 3D
switch (format) {
  case ".obj":
    imageUrl = "https://previews.dropbox.com/p/thumb/ACLHHka0i75M2Hy3bO8dQZvYFeoIm84Sz5Uaz3cR5lGr4LbMVaajzvRpZsGXkjSxrYqcSdJPJ7ZK5KHVNJCo4nSki2olHDaT9h-Unp-dYi7r3QkFsico4vE9MzPeEekjjaZ0jHeW2Iewfvh-C9dqNk8t9pGbfsGfgO3XMr8zvu_1nv582xMmnantk8D1962Koe7lXeT4gtIPwAT5c02vtm87tMF1c5tlp1SshDHe6pbcssXJnC2Hq_v9G6HZAYfzhPUSXxzT-_PMAHxbtqYR_RIecJQ75nhHsKIU64oVzlspLOf4FAxXhL_CmHTy6NuNx00oqNtOBm6A14-y0DkxuVCN/p.png";
    break;
  case ".fbx":
    imageUrl = "https://previews.dropbox.com/p/thumb/ACJt7ysVkrz44MEM3EvCmUP8PpUcSkWbSMvCPY7Oso0Wms-UhC8GiS463QbXsRkMp4jMD3Vp4rOjoQBbZ_VS4ZGrotYfbd4PPf6ekwMvlnduvc6yMVLP3J6aeTISOvP3Vxb5dZE-xoN4Rgc6QOnuQdGgnaXmudbdPlPe525AIWSyNA29Nm7cY4F-8H1KCR2f2xUN4Dgza7xVbDt2mFClc5MXYDJAk6vKLHGIp9m5YQE8CZKafg-JEJ_2kEmf2ZIRFZTtLzUIIWtXAlHFLFiS0njLXY57LsiHmmZM7w2lX6aRvisRCJ9vTUFcibRLpkhBmeHLM6tGBQPsDBXX-W6-DT9j/p.png";
    break;
  case ".glb":
    imageUrl = "https://previews.dropbox.com/p/thumb/ACKmFGD6D8il2Yi2mq0HNqOso-gLSPthJkg_TuELkesXfJXACJ-k8YpNQG2wNxx9mMaZL-_He5Yfmdb-HTNejwG1Ugj0WVynUkh5TG26LSZIbJJN31hVxa28s69GPY23fP-rBguu8NBU3MTLY84fItCc4Ht_pHHpkquWmOx_rpWH-p7fNoYmNvuXcxv7DNa_nFzNrN5Nrab9y0JmfrHJzkACmNcoi09cf2KLKWn2XwaUy-JLSkdi1Bvi2y4Nr7HFXhrRChJ14NTswrMmDHMOSrhFr1p0S9KrihywX3TuEA9ytfS0UkBpjkbiC8HYYiV-croC2jRolw93Jwjv0qL39e2I/p.png";
    break;
  case ".gltf":
    imageUrl = "https://previews.dropbox.com/p/thumb/ACIxHSz1VYoBn8hBXpTUcDX6kntZrfE0ZPZWF4xBiguXypKyGhukRbp288C43TL0aM_AlPgQTSUeC-4LTxTKiNsuM0T0jDQ9zKxKO1VMq40jqlqUcE3PuXZF-5H80JdpALbYF9vkfpZr3q4lxCjcIbdX3iq9tycmoRZ89kaLe9bz4lIQ1eBJovz4AIaoKZ-mDw2wSmalvwvwEH9__BAHqiC6g4EbeitjyzVcRfC2E3Ptw-7PqNsYDCEG4GBRpYdGv2asVMbD_TOSvCwOwvWHB8JOK9eSXR9oG06tlczreqDL8v5pZVbZADKw8reu9V2GvqWTCYy3YkCoT68R908TVNUa/p.png";
    break;
  case ".gif":
    imageUrl = "https://previews.dropbox.com/p/thumb/ACK81GwtUFvX_k-3ySFmIdJuI_q8VYxrn6NQIYrChiDap5eYaD-ldl6-zqNdFfEBCF8lIrG0wZMgOsm4_0K9kLjo4gkzAzjYoewbnIsCTYI2Bt1iKs6MNGZrJKvZII5t6eqRGIsbIaCZOJIe9-P_WdwhcNht2haIfaVJ2F-6KbSwVAUqqmDI17-M1yS3gBLsrw7fzjMAZHL4L0L4lTpva9FmwZXgWwNjRomkf_9edHwSvt_RwPQN2QR5o9J4GcfDOjcZbZABDFGQ7bxkMxT1N99XXINJ2wqNnSuL4eHCpbS5CSie73ofwezAqH8VJhv1iYGpYhCPOiP4mBdWdz8QJXmw/p.png";
    break;
 
//   default:
//     imageUrl = "path/to/default_image.jpg";
}
img2.src = imageUrl; // Set src của thẻ img với URL của ảnh minh họa
}
}





drag3dfile.addEventListener('dragover',(event) =>{
    event.preventDefault();
});
drag3dfile.addEventListener('drop',(event) =>{
    event.preventDefault();
    const files = event.dataTransfer.files;
    const file = files[0];
    console.log(file.fileName);
    open3DFile(file);
});

function OpenFile3DInLocal(){
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = '.png, .jpeg, .gif, .obj, .fbx, .glb, .gltf';
    input.onchange = e => {
        var files = e.target.files;
        const file = files[0];
        open3DFile(file);
    }
    input.click();
}


