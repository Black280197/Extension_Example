// Mảng dữ liệu chứa thông tin ảnh
const imageData = [
    {
      link: "https://i.pinimg.com/736x/eb/25/52/eb2552fdc5b60f9c8566365052a087f1.jpg",
      title: "Ảnh 1",
      description: "Đây là mô tả dài của ảnh 1. Bạn có thể kéo thả và thay đổi kích thước khung ảnh này."
    },
    {
      link: "https://i.pinimg.com/736x/74/2f/18/742f18587c61d1c2ee0f313636782ca0.jpg",
      title: "Ảnh 2",
      description: "Đây là mô tả dài của ảnh 2. Khung ảnh này rất thú vị!"
    }
  ];
  
// Lắng nghe tin nhắn từ content.js để gửi dữ liệu imageData
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getImageData") {
      sendResponse({ imageData: imageData });
    }
  });
