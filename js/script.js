// Accessing the form and qrcode element
const form=document.getElementById('qr-generator');
const qr=document.getElementById('qrcode');
// Function to clear the UI 
const clearUI=()=>{
    
    const savelink=document.getElementById('save-link');
    // Checking if the element save image is created and if created clear the ui
    if(savelink){
        qr.innerHTML='';
        savelink.remove();
    }
}

// Function to create the QR Code with mentioned text, width and height 
const GenerateQR=(url,size)=>{
        clearUI()
        var qrcode = new QRCode("qrcode", {
            text: url,
            width: size,
            height: size,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
}
// Function to access the data points and GenerateQR Function and then call create Create Save Button after a 1000 milli second 
const GenerateSubmit=(e)=>{
    e.preventDefault();
    const url=document.getElementById('url').value;
    const size=document.getElementById('size').value;
    

    if(url==""){
        alert("Please Provide a URL!!")
    }
    else{
        
        GenerateQR(url,size)
        setTimeout(()=>{
        // Access the image url of the qr generated     
        const SaveUrl=qr.querySelector('img').src;
        createSaveBtn(SaveUrl);
        },1000)
    }

}

const createSaveBtn= (SaveUrl)=>{
    clearUI()
    // Creating a link tag 
    const link=document.createElement('a');
    // Specifying the id ,download name , Inner name and styling for the button 
    link.id='save-link';
    link.href=SaveUrl;
    link.download='qrcode';
    link.innerHTML='Save Image'
    link.classList='linkstyle'
    // Appending the link created to generated element 
    document.getElementById('generated').appendChild(link)

}
// Listening to submit event in the form and calling GenerateSubmit function 
form.addEventListener('submit',GenerateSubmit);