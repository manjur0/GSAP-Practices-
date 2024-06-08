
function breckTheText() {
  const h1 = document.querySelector("h1");
  const h2Text = h1.textContent;
  let splittedText = h2Text.split("");
  const halfValue = splittedText.length / 2;
  let clutter = "";
  splittedText.forEach((element, index) => {
    if (index <= halfValue) {
      clutter += `<span class="f">${element}</span>`;
    } else {
      clutter += `<span class="s">${element}</span>`;
    }
  });
  h1.innerHTML = clutter;
}
breckTheText(); 

// GSAP CODE
gsap.from("h1 .f", {
  y: 80,
  opacity: 0,
  duration: 0.5,
  stagger: 0.15,
});
gsap.from("h1 .s", {
  y: 80,
  opacity: 0,
  duration: 0.5,
  stagger: -0.15,
});
