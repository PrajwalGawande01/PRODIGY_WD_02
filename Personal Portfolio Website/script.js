AOS.init();

function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');
  body.setAttribute('data-theme', currentTheme === 'light' ? 'dark' : 'light');
}

window.onscroll = () => {
  const btn = document.getElementById("scrollTopBtn");
  btn.style.display = window.scrollY > 300 ? "block" : "none";

  const scrollProgress = document.getElementById("scrollProgress");
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = `${scrollPercent}%`;
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function sendMail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  window.location.href = `mailto:your@email.com?subject=Message from ${name}&body=${message}`;
}
