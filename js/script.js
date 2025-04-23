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

// Function to update welcome message based on time of day
function updateWelcomeMessage() {
  const welcomeMessage = document.getElementById('welcomeMessage');
  const hour = new Date().getHours();
  let greeting = '';

  if (hour >= 5 && hour < 12) {
    greeting = 'DunVex.com chào buổi sáng';
  } else if (hour >= 12 && hour < 14) {
    greeting = 'DunVex.com chào buổi trưa';
  } else if (hour >= 14 && hour < 18) {
    greeting = 'DunVex.com chào buổi chiều';
  } else {
    greeting = 'DunVex.com chào buổi tối';
  }

  if (welcomeMessage) {
    welcomeMessage.textContent = greeting;
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  setupCertificateSlider();
  updateWelcomeMessage();
  // Cập nhật mỗi phút
  setInterval(updateWelcomeMessage, 60000);
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  menuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.main-nav')) {
      navLinks.classList.remove('active');
    }
  });

  // Resize handler
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      navLinks.classList.remove('active');
    }
  });
});

// Add touch support for sliders
function enableTouchSlider(slider) {
  let startX;
  let scrollLeft;

  slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });
}

// Detect screen size and ratio
function detectScreenProperties() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const ratio = (width / height).toFixed(2);
  
  // Add screen-specific classes to body
  const body = document.body;
  body.classList.remove('small-screen', 'medium-screen', 'large-screen');
  
  // Clear previous ratio classes
  body.className = body.className.replace(/\bratio-[\d-]+\b/g, '');
  
  // Add new screen size class
  if (width <= 375) {
    body.classList.add('small-screen');
  } else if (width <= 768) {
    body.classList.add('medium-screen');
  } else {
    body.classList.add('large-screen');
  }
  
  // Add ratio class
  body.classList.add(`ratio-${ratio.replace('.', '-')}`);
  
  // Add specific device classes
  if (width === 375 && height === 812) { // iPhone 13 mini
    body.classList.add('iphone-13-mini');
  }
  
  // Adjust layout based on ratio
  adjustLayout(ratio);
}

// Adjust layout based on screen ratio
function adjustLayout(ratio) {
  const productGrid = document.querySelector('.product-grid');
  if (!productGrid) return;
  
  if (ratio < 0.5) { // Very tall screens
    productGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
  } else if (ratio < 1) { // Portrait mode
    productGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
  } else if (ratio < 1.5) { // Standard ratio
    productGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
  } else { // Wide screens
    productGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
  }
}

// Listen for screen changes
window.addEventListener('load', detectScreenProperties);
window.addEventListener('resize', detectScreenProperties);

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;

  // Toggle menu
  hamburger?.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent event bubbling
    this.classList.toggle('active');
    navLinks?.classList.toggle('active');
    body.classList.toggle('menu-active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-links') && 
        !e.target.closest('.hamburger-menu')) {
      hamburger?.classList.remove('active');
      navLinks?.classList.remove('active');
      body.classList.remove('menu-active');
    }
  });

  // Close menu on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      hamburger?.classList.remove('active');
      navLinks?.classList.remove('active');
      body.classList.remove('menu-active');
    }
  });

  // Close menu when resizing to desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      hamburger?.classList.remove('active');
      navLinks?.classList.remove('active');
      body.classList.remove('menu-active');
    }
  });
});