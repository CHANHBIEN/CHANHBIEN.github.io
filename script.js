const sliderTrack = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slider-track a");
const sliderItems = document.querySelectorAll(".slider-bottom li");

const rightBtn = document.querySelector(".fa-circle-chevron-right");
const leftBtn = document.querySelector(".fa-circle-chevron-left");

let currentIndex = 0;

function updateSlider() {
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

    sliderItems.forEach((item, index) => {
        item.classList.toggle("active", index === currentIndex);
    });
}

// Click phải
rightBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
});

// Click trái
leftBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
});

// Click li để chuyển slide
sliderItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
    });
});

const autoSlideTime = 3000;
const totalSlides = slides.length;
let autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}, autoSlideTime);

const sliderTop = document.querySelector(".slider-top");
sliderTop.addEventListener("mouseenter", () => clearInterval(autoSlide));
sliderTop.addEventListener("mouseleave", () => {
    autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }, autoSlideTime);
});
//-- -----------------------NÚT LÊN ĐẦU TRANG---------------------- -->
// Hiện/ẩn nút
window.onscroll = function () {
    const btn = document.getElementById("scrollTopBtn");
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Cuộn mượt lên đầu
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
// ----------------PRODUCT3----------------------
// Optional: alert when clicking the eye icon (quick view)
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fa-eye').forEach(button => {
        button.addEventListener('click', () => {
            alert('Xem nhanh sản phẩm!');
        });
    });
});

// ----------------reponsive_HEADER-BOTTOM-----------------------------
const toggleBtn = document.querySelector('.mobile-menu-toggle');
const menu = document.querySelector('.header-bottom');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('mobile-open');
});
