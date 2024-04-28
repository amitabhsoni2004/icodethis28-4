const rangeInput = document.getElementById('myRange');
const initialValue = 80; // Set the initial value to 80

// Update the range input background on page load
updateRangeBackground(initialValue);

rangeInput.addEventListener('input', function() {
  const value = rangeInput.value;
  updateRangeBackground(value);
});

function updateRangeBackground(value) {
  const fillPercent = (value / rangeInput.max) * 100;
  rangeInput.style.background = `linear-gradient(to right, #FF9500 0%, #FF9500 ${fillPercent}%, #d3d3d3 ${fillPercent}%, #d3d3d3 100%)`;
}

let followBtn = document.querySelector(".btn");
let loginmess = document.querySelector(".loginmess");
let greenTimer = document.querySelector(".greenTimer");
let messageText = loginmess.querySelector('.message p');

followBtn.addEventListener("click", () => {
  if (followBtn.innerText === "Follow") {
    loginmess.style.display = "flex";
    messageText.textContent = "You have Followed MetaMask";
    followBtn.innerText = "Unfollow";
  } else if (followBtn.innerText === "Unfollow") {
    alert("Do you want to Unfollw MetaMask");
    loginmess.style.display = "flex";
    messageText.textContent = "You Unfollowed MetaMask";
    followBtn.innerText = "Follow";
  }
});

greenTimer.addEventListener("animationend", () => {
  loginmess.style.display = "none";
});


let moreInfo = document.querySelector(".moreInfo");
let p3 = document.querySelector(".p3");

moreInfo.addEventListener("click", () => {
  if (p3.style.display === "none" || p3.style.display === "") {
    p3.style.display = "flex";
  } else {
    p3.style.display = "none";
  }
});
p3.addEventListener("click",()=>{
    window.open("https://metamask.io/", "_blank");
})