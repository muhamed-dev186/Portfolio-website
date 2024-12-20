let lastScrollTop = 0;
const header = document.querySelector("header");
const timeText = document.querySelector(".time")

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});

const now = new Date();
const MombasaTime = now.toLocaleString("en-US", { timeZone: "EAT" });
const [date, time] = MombasaTime.split(", ");
timeText.textContent = `${time} EAT: ${date}`;

const yearText = document.getElementById("year");
const year = new Date().getFullYear();

yearText.textContent = year;