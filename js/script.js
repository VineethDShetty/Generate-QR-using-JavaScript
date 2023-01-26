const form=document.getElementById('qr-generator');
const qr=document.getElementById('qrcode');

const GenerateSubmit=(e)=>{
    e.preventDefault();
    const url=document.getElementById('url').value;
    const size=document.getElementById('size').value;
    console.table(url,size)

    if(url==""){
        alert("Please Provide a URL!!")
    }
    else{
        qr.innerHTML='';
        var qrcode = new QRCode("qrcode", {
            text: url,
            width: size,
            height: size,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    }

}
form.addEventListener('submit',GenerateSubmit);