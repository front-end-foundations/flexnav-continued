var tabs = document.querySelectorAll("nav a");
var contentPara = document.querySelector(".content");

function makeActive(event) {
  if (!event.target.matches("nav a")) return;
  makeInactive();
  event.target.classList.add("active");
}

function makeInactive() {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
}

// NEW
function setContentAccordingToHash() {
  const currentHash = window.location.hash.substring(1);
  contentPara.innerHTML = data[currentHash];
}

function initializePage() {
  // set a default if there is no hash
  if (!window.location.hash) {
    window.location.hash = "cuisines";
    document.querySelector("nav a").classList.add("active");
  } else {
    // if there is a hash set the active tab according to the hash
    document
      // .querySelector('[href="' + window.location.hash + '"] ')
      .querySelector(`[href="${window.location.hash}"]`)
      .classList.add("active");
  }
  setContentAccordingToHash();
}

document.addEventListener("click", makeActive);
window.addEventListener("hashchange", setContentAccordingToHash); // NEW

initializePage();
