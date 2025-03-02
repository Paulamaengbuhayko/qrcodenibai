const websiteURL = "https://yourdomain.com";
const qrCodeImage = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(websiteURL)}`;
document.querySelector("img").src = qrCodeImage;
