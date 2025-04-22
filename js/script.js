const productData = {
  "Tấm Trần DURAflex Độ Dày 4mm": [
    { size: "1m22x2m44", weight: "18.45", unit: "Tấm", packaging: "150 tấm/kiện" }
  ],
  "Tấm Trần DURAflex Độ Dày 4.5mm": [
    { size: "1m22x2m44", weight: "21.4", unit: "Tấm", packaging: "130 tấm/kiện" }
  ],
  "Tấm Trần DURAflex Độ Dày 6mm": [
    { size: "1m22x2m44", weight: "29.24", unit: "Tấm", packaging: "100 tấm/kiện" }
  ],
  "Tấm Vách Trong DURAflex Độ Dày 8mm": [
    { size: "1m22x2m44", weight: "38.18", unit: "Tấm", packaging: "80 tấm/kiện" }
  ],
  "Tấm Vách Ngoài DURAflex Độ Dày 9mm": [
    { size: "1m22x2m44", weight: "42.27", unit: "Tấm", packaging: "70 tấm/kiện" }
  ],
  "Tấm Vách Ngoài DURAflex Độ Dày 10mm": [
    { size: "1m22x2m44", weight: "46.35", unit: "Tấm", packaging: "60 tấm/kiện" }
  ],
  "Tấm Vách - Mái Ngoài DURAflex Độ Dày 12mm": [
    { size: "1m22x2m44", weight: "59.63", unit: "Tấm", packaging: "50 tấm/kiện" },
    { size: "1mx2m", weight: "39.55", unit: "Tấm", packaging: "50 tấm/kiện" }
  ],
  "Tấm Sàn DURAflex Độ Dày 14mm": [
    { size: "1m22x2m44", weight: "70.71", unit: "Tấm", packaging: "40 tấm/kiện" },
    { size: "1mx2m", weight: "46.67", unit: "Tấm", packaging: "45 tấm/kiện" }
  ],
  "Tấm Sàn DURAflex Độ Dày 15mm": [
    { size: "1m22x2m44", weight: "72.38", unit: "Tấm", packaging: "40 tấm/kiện" },
    { size: "1mx2m", weight: "49.28", unit: "Tấm", packaging: "40 tấm/kiện" }
  ],
  "Tấm Sàn DURAflex Độ Dày 16mm": [
    { size: "1m22x2m44", weight: "77.8", unit: "Tấm", packaging: "40 tấm/kiện" },
    { size: "1mx2m", weight: "52.28", unit: "Tấm", packaging: "40 tấm/kiện" }
  ],
  "Tấm Sàn DURAflex Độ Dày 18mm": [
    { size: "1m22x2m44", weight: "88.1", unit: "Tấm", packaging: "35 tấm/kiện" },
    { size: "1mx2m", weight: "59.2", unit: "Tấm", packaging: "35 tấm/kiện" }
  ],
  "Tấm Sàn DURAflex Độ Dày 20mm": [
    { size: "1m22x2m44", weight: "98.33", unit: "Tấm", packaging: "30 tấm/kiện" },
    { size: "1mx2m", weight: "66.08", unit: "Tấm", packaging: "30 tấm/kiện" }
  ],
  "Tấm Sàn DURAflex Độ Dày 22mm": [
    { size: "1m22x2m44", weight: "106.75", unit: "Tấm", packaging: "30 tấm/kiện" }
  ],
  "Tấm Sàn DURAflex Độ Dày 24mm": [
    { size: "1m22x2m44", weight: "112.8", unit: "Tấm", packaging: "25 tấm/kiện" }
  ],
  "Vít Chuyên Dụng DURA vis": {
    "26 mm": {
      packaging: "420 con/bọc",
      usage: "bắn vách"
    },
    "35 mm": {
      packaging: "350 con/bọc",
      usage: "bắn sàn"
    }
  }
};

function changeImage(src) {
  try {
    document.getElementById('mainImg').src = src;
  } catch (error) {
    console.error('Error changing image:', error);
  }
}

// Tab functionality
document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.dataset.tab;
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });
});

// Certificate slider functionality
function setupCertificateSlider() {
  const certSlider = document.getElementById("certSlider");
  const certDots = document.getElementById("certDots");
  const certItems = certSlider.querySelectorAll(".certificate-item");

  let groupSize = 2;
  let currentIndex = 0;
  const itemWidth = certItems[0].offsetWidth + 20;
  const totalGroups = Math.ceil(certItems.length / groupSize);

  function scrollToGroup(index) {
    const scrollX = index * itemWidth * groupSize;
    certSlider.scrollTo({ left: scrollX, behavior: "smooth" });
    currentIndex = index;
    updateDots();
  }

  function updateDots() {
    certDots.innerHTML = "";
    for (let i = 0; i < totalGroups; i++) {
      const dot = document.createElement("span");
      dot.className = (i === currentIndex) ? "active" : "";
      dot.addEventListener("click", () => scrollToGroup(i));
      certDots.appendChild(dot);
    }
  }

  window.addEventListener("resize", () => {
    scrollToGroup(currentIndex);
  });

  updateDots();
}

// Video functionality
function openVideo() {
  const popup = document.getElementById("videoPopup");
  const iframe = document.getElementById("videoFrame");
  iframe.src = "https://www.youtube.com/embed/gaih38TEDaI?autoplay=1";
  popup.style.display = "flex";
}

function closeVideo() {
  const popup = document.getElementById("videoPopup");
  const iframe = document.getElementById("videoFrame");
  iframe.src = "";
  popup.style.display = "none";
}

function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').style.display = 'flex';
}

function updateSizeOptions() {
  try {
    const productSelect = document.getElementById("productSelect");
    const sizeSelect = document.getElementById("sizeSelect");
    const productInfo = document.getElementById("productInfo");
    const selectedProduct = productSelect.value;

    // Reset size select and hide product info
    sizeSelect.innerHTML = '<option value="">-- Chọn quy cách --</option>';
    productInfo.style.display = "none";

    if (selectedProduct && productData[selectedProduct]) {
      if (selectedProduct === "Vít Chuyên Dụng DURA vis") {
        // Xử lý cho sản phẩm vít
        Object.keys(productData[selectedProduct]).forEach(size => {
          const option = document.createElement("option");
          option.value = size;
          option.textContent = size;
          sizeSelect.appendChild(option);
        });
      } else {
        // Xử lý cho các sản phẩm tấm
        productData[selectedProduct].forEach(item => {
          const option = document.createElement("option");
          option.value = item.size;
          option.textContent = item.size;
          sizeSelect.appendChild(option);
        });
      }
    }
  } catch (error) {
    console.error('Error updating size options:', error);
  }
}

function displayProductInfo() {
  try {
    const productSelect = document.getElementById("productSelect");
    const sizeSelect = document.getElementById("sizeSelect");
    const productInfo = document.getElementById("productInfo");
    const selectedProduct = productSelect.value;
    const selectedSize = sizeSelect.value;

    if (selectedProduct && selectedSize) {
      if (selectedProduct === "Vít Chuyên Dụng DURA vis") {
        // Xử lý cho sản phẩm vít
        const productDetails = productData[selectedProduct][selectedSize];
        if (productDetails) {
          document.getElementById("packaging").textContent = productDetails.packaging;
          document.getElementById("usage").textContent = productDetails.usage;
          productInfo.style.display = "block";
        }
      } else {
        // Xử lý cho các sản phẩm tấm
        const productDetails = productData[selectedProduct].find(item => item.size === selectedSize);
        if (productDetails) {
          document.getElementById("weight").textContent = productDetails.weight;
          document.getElementById("unit").textContent = productDetails.unit;
          document.getElementById("packaging").textContent = productDetails.packaging;
          productInfo.style.display = "block";
        }
      }
    } else {
      productInfo.style.display = "none";
    }
  } catch (error) {
    console.error('Error displaying product info:', error);
  }
}

function sendFeedback(event) {
  event.preventDefault();
  
  const email = document.getElementById('userEmail').value;
  const feedback = document.getElementById('userFeedback').value;
  
  // Create mailto link
  const mailtoLink = `mailto:dunvex.green@gmail.com?subject=Phản hồi từ ${email}&body=${encodeURIComponent(feedback)}`;
  
  // Open email client
  window.location.href = mailtoLink;
  
  // Reset form
  document.getElementById('feedbackForm').reset();
}

function updateWelcomeMessage() {
  const hour = new Date().getHours();
  let timeOfDay;
  
  if (hour >= 5 && hour < 12) {
    timeOfDay = "sáng";
  } else if (hour >= 12 && hour < 18) {
    timeOfDay = "chiều";
  } else {
    timeOfDay = "tối";
  }
  
  const welcomeElement = document.getElementById('welcomeMessage');
  if (welcomeElement) {
    welcomeElement.textContent = `DunVex.com chào buổi ${timeOfDay}!`;
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  setupCertificateSlider();
  updateWelcomeMessage();
  // Cập nhật mỗi phút
  setInterval(updateWelcomeMessage, 60000);
});