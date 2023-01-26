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

        setTimeout(()=>{
        const SaveUrl=qr.querySelector('img').src;
        createSaveBtn(SaveUrl);
        },2000)
    }

}

const createSaveBtn= (SaveUrl)=>{
    const savelink=document.getElementById('save-link');
    if(savelink){
        savelink.remove();
    }

    const link=document.createElement('a');
    link.id='save-link';
    // link.className=''
    link.href=SaveUrl;
    link.download='qrcode';
    link.innerHTML='Save Image'
    link.classList='linkstyle'
    document.getElementById('generated').appendChild(link)

}
form.addEventListener('submit',GenerateSubmit);