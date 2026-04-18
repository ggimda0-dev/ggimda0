// 배너
window.addEventListener("load", () => {
  // 위 코드 여기 넣기
  const list = document.getElementById("skillList");

// 1️⃣ 복제
list.innerHTML += list.innerHTML;

// 2️⃣ 실제 '한 세트 길이' 저장
const originalWidth = list.scrollWidth / 2;

let x = 0;

function animate() {
  x -= 0.5;

  // ⭐ 여기 핵심: 정확한 기준값 사용
  if (Math.abs(x) >= originalWidth) {
    x = 0;
  }

  list.style.transform = `translateX(${x}px)`;
  requestAnimationFrame(animate);
}

animate();
});


// 스크롤이벤트
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

// 🔥 observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove("active"));

      const activeLink = document.querySelector(
        `.menu a[href="#${entry.target.id}"]`
      );
      if (activeLink) activeLink.classList.add("active");
    }
  });
}, {
  rootMargin: "-106px 0px 0px 0px",
  threshold: 0.3
});

// observe 등록
sections.forEach(section => observer.observe(section));


// 🔥 스크롤 예외 처리
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.offsetHeight;

  // 👉 맨 위
  if (scrollTop === 0) {
    navLinks.forEach(link => link.classList.remove("active"));
    document.querySelector('.menu a[href="#home"]').classList.add("active");
  }

  // 👉 맨 아래
  if (windowHeight + scrollTop >= fullHeight - 2) {
    navLinks.forEach(link => link.classList.remove("active"));
    document.querySelector('.menu a[href="#contact"]').classList.add("active");
  }
});