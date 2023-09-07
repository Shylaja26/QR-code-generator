let container = document.querySelector(".container");
let QRInput = document.querySelector(".form input");
let QRButton = document.querySelector(".form button");
let QRimage = document.querySelector(".qr-img");
let SaveQR = document.querySelector(".SaveQR");

QRButton.addEventListener("click" , ()=>{
    let QRValue = QRInput.value;
    QRimage.innerHTML="";
    let qrcode = new QRCode(QRimage,{
        text : QRValue,
        width:180,
        height:180,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    
    });
    container.classList.add("active");
});

   
SaveQR.addEventListener("click",()=>{    
    let ImgSrc = QRimage.querySelector("img").src;
    SaveQR.href=ImgSrc;
    SaveQR.download='QRCode';
});

