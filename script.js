// Lucide icons
lucide.createIcons();

// Typewriter effect
const text = "Hi, I'm Samir — Developer & Designer";
const el = document.getElementById("typewriter");
let i = 0;

function typeWriter() {
  if (!el) return;
  if (i < text.length) {
    el.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
}

typeWriter();

// ===== SAFE FADE SYSTEM =====

const fades = document.querySelectorAll(".fade");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  fades.forEach((el) => observer.observe(el));
}

// 🔥 IMPORTANT: fallback safety
window.addEventListener("load", () => {
  fades.forEach((el) => el.classList.add("visible"));
});

// Performance meters animation

document.querySelectorAll(".meter").forEach((meter) => {
  const progress = meter.querySelector(".meter-progress");
  const value = meter.dataset.value;
  const offset = 314 - (314 * value) / 100;

  setTimeout(() => {
    progress.style.strokeDashoffset = offset;
  }, 300);
});

// Counter animation

document.querySelectorAll(".count").forEach((el) => {
  const target = +el.dataset.target;
  let count = 0;

  const update = () => {
    const step = target / 60;
    count += step;

    if (count < target) {
      el.textContent = Math.floor(count);
      requestAnimationFrame(update);
    } else {
      el.textContent = target + "+";
    }
  };

  update();
});
