// Gửi tin nhắn đến background.js để lấy imageData
chrome.runtime.sendMessage({ action: "getImageData" }, (response) => {
    const imageData = response.imageData;
    showImageFrame(imageData);
  });
  
  function showImageFrame(imageData) {
    // Kiểm tra xem khung ảnh đã tồn tại chưa, nếu có thì xóa
    const existingFrame = document.getElementById("image-frame");
    if (existingFrame) {
      existingFrame.remove();
    }
  
    // Tạo div khung ảnh
    const frame = document.createElement("div");
    frame.id = "image-frame";
    frame.className = "image-frame";
  
    // Tạo phần tử ảnh
    const img = document.createElement("img");
    img.id = "frame-image";
    img.style.width = "100%";
    img.style.height = "auto";
    frame.appendChild(img);
  
    // Tạo tiêu đề
    const title = document.createElement("h3");
    title.id = "frame-title";
    frame.appendChild(title);
  
    // Tạo mô tả
    const description = document.createElement("p");
    description.id = "frame-description";
    frame.appendChild(description);
  
    // Tạo thanh tiến trình
    const progressBar = document.createElement("div");
    progressBar.id = "progress-bar";
    progressBar.className = "progress-bar";
    frame.appendChild(progressBar);
  
    // Thêm khung vào trang
    document.body.appendChild(frame);
  
    // Hàm hiển thị ảnh ngẫu nhiên
    let currentIndex = -1;
    function displayRandomImage() {
      // Chọn một ảnh ngẫu nhiên, đảm bảo không trùng với ảnh hiện tại
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * imageData.length);
      } while (newIndex === currentIndex && imageData.length > 1);
      currentIndex = newIndex;
  
      const randomImage = imageData[currentIndex];
      img.src = randomImage.link;
      img.alt = randomImage.title;
      title.textContent = randomImage.title;
      description.textContent = randomImage.description;
  
      // Reset và chạy thanh tiến trình
      runProgressBar();
    }
  
    // Hàm chạy thanh tiến trình
    function runProgressBar() {
      progressBar.style.width = "0%";
      let startTime = Date.now();
      const duration = 5000; // 5 giây
  
      function updateProgress() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min((elapsed / duration) * 100, 100);
        progressBar.style.width = `${progress}%`;
  
        if (progress < 100) {
          requestAnimationFrame(updateProgress);
        } else {
          // Khi thanh tiến trình hoàn tất, chuyển ảnh mới
          displayRandomImage();
        }
      }
  
      requestAnimationFrame(updateProgress);
    }
  
    // Hiển thị ảnh đầu tiên
    displayRandomImage();
  
    // Làm khung ảnh có thể kéo thả
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
  
    frame.addEventListener("mousedown", (e) => {
      // Chỉ cho phép kéo khi nhấp vào phần không phải resize handle
      if (e.target === frame || e.target === img || e.target === title || e.target === description) {
        isDragging = true;
        initialX = e.clientX - currentX;
        initialY = e.clientY - currentY;
        frame.style.cursor = "grabbing";
      }
    });
  
    document.addEventListener("mousemove", (e) => {
      if (isDragging) {
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
        frame.style.left = `${currentX}px`;
        frame.style.top = `${currentY}px`;
      }
    });
  
    document.addEventListener("mouseup", () => {
      isDragging = false;
      frame.style.cursor = "grab";
    });
  
    // Khởi tạo vị trí ban đầu
    currentX = 50;
    currentY = 50;
    frame.style.left = `${currentX}px`;
    frame.style.top = `${currentY}px`;
  }