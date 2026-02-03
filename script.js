// ---------- TYPEWRITER EFFECT ----------
const text = "Hi, cutie! 💖";
let index = 0;

function typeWriter() {
  const el = document.getElementById("typewriter");
  if (!el) return; // Safety check
  if (index < text.length) {
    el.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 150);
  }
}
window.addEventListener("DOMContentLoaded", typeWriter);

// ---------- FLOATING HEARTS ----------
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = `${Math.random() * 20 + 20}px`; // Random size 20-40px
  heart.innerText = "💖";
  document.body.appendChild(heart);

  // Remove heart after animation ends (5s)
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Create a heart every 500ms
setInterval(createHeart, 500);
