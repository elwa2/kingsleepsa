function copyToClipboard_textArea() {       
var copyText = document.getElementById("myInput");       
copyText.select();       
document.execCommand("Copy");
} 
