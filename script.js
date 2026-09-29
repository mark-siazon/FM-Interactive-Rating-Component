// Global Variables:
let btnActive, btnSelected;
let submitBtn = document.querySelector('.submit-btn>button');

// Call Functions here:
submitClickChecker(); //Check for condition, before btn toggle.
rateClick(); //Initiate btn toggle.

//Functions here:

function rateClick() {
  const btn = document.querySelectorAll(".rating-btn");
  btn.forEach(function (button, index) {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      btn.forEach(b => b.classList.remove('active'));

      // Add active class to clicked button
      button.classList.add('active');

      // Count & Update num. of .rating-btn with active class.
      btnActive = document.querySelectorAll('.rating-btn.active').length;

      // For Debugging
      console.log(`Button Clicked: ${index + 1}\n`);
      console.log(`Active:Btn Length: ${btnActive}\n`);

      btnSelected = index + 1;
      //Check for condition, after toggle.
      submitClickChecker();
    })
  })
}

function submitClickChecker() {
  if (btnActive == 1) {
    submitBtn.style.pointerEvents = "auto";
  }
}

/////////////////////////////////////

function toggleStyleAdjust() {
  document.querySelector("#thankyou-section").style.display = "flex";
  document.querySelector("#thankyou-section > div").style.marginBottom = "0.25rem";

  document.querySelector("section.star-section").style.display = "none";
  document.querySelector(".rating-section").style.display = "none";
  document.querySelector(".submit-btn").style.display = "none";

  document.querySelector(".text-section").style.textAlign = "center";

  const h1textSec = document.querySelector(".text-section > h1");
  h1textSec.textContent = "Thank you!";

  const ptextSec = document.querySelector(".text-section >  p");
  ptextSec.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
}

submitBtn.addEventListener('click', () => {

  // Modify & Add CSS styles when btn is clicked.
  toggleStyleAdjust();

  // Adjust text based on selected btn.
  let btnRating = document.querySelector(".star-section > span");
  btnRating.textContent = btnSelected;

}) //Replace and do the thank u display

// Finished Jan 20, 2023