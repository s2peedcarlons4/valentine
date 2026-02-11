const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {
  document.querySelector(".container").innerHTML = `
    <h1>way NOOO!! 💖🥰</h1>
    <p>Happy Valentine’s Day lablab ❤️</p>
  `;
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
