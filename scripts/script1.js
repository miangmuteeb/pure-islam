const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modal-button");
const closeButton = document.querySelector(".close-button");
const scrollDown = document.querySelector(".scroll-down");
let isOpened = false;

const openModal = () => {
  modal.classList.add("is-open");
  body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.classList.remove("is-open");
  body.style.overflow = "initial";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight / 3 && !isOpened) {
    isOpened = true;
    scrollDown.style.display = "none";
    openModal();
  }
});

modalButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

document.onkeydown = evt => {
  evt = evt || window.event;
  evt.keyCode === 27 ? closeModal() : false;
};

// Function to get the Islamic date and update the DOM
function updateIslamicDate() {
    const islamicMonths = [
        "Muharram", "Safar", "Rabi' al-awwal", "Rabi' al-thani",
        "Jumada al-awwal", "Jumada al-thani", "Rajab", "Sha'ban",
        "Ramadan", "Shawwal", "Dhu al-Qi'dah", "Dhu al-Hijjah"
    ];

    const today = new Date();
    const islamicDate = getIslamicDate(today);
    const islamicDay = islamicDate[2];
    const islamicMonth = islamicMonths[islamicDate[1] - 1];
    const islamicYear = islamicDate[0];

    document.getElementById('islamic-date').textContent = `${islamicDay} ${islamicMonth} ${islamicYear}`;
}

// Function to convert Gregorian date to Islamic date
function getIslamicDate(gregorianDate) {
    const { floor, ceil } = Math;
    const jd = (gregorianDate - new Date("7/15/622 12:00:00 AM UTC")) / 86400000 + 1948440 + 10632;
    const jy = floor((30 * jd + 10646) / 10631);
    const jm = ceil((jd - 29 - getIslamicYearStart(jy)) / 29.5) - 1;
    const jd2 = floor(jd - getIslamicYearStart(jy) - getIslamicMonthStart(jm)) + 1;
    return [jy, jm, jd2];
}

// Helper functions for Islamic date calculation
function getIslamicYearStart(year) {
    return 1948084 + 354 * (year - 1) + floor((3 + (11 * year)) / 30);
}

function getIslamicMonthStart(month) {
    return 29.5001 * month;
}

// Call the update function on page load
document.addEventListener('DOMContentLoaded', updateIslamicDate);