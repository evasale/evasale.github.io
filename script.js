function calculatePrice() {
    // Get the selected screen size and screen type and time
    const ad_place = document.getElementById("ad_place").value;
    const screenTime = document.getElementById("screenTime").value;
    const duration= document.getElementById("duration").value
  
    // Get the checked additional features
    //const features = [];
    //const featureElements = document.getElementsByName("features");
    //for (let i = 0; i < featureElements.length; i++) {
    //  if (featureElements[i].checked) {
    //    features.push(featureElements[i].value);
    //  }
    //}
  
    // Calculate the total price based on the selected options
    let totalPrice = 0;
    switch (ad_place) {
      case "GT":
        totalPrice += 100;
        break;
      case "Vid":
        totalPrice += 50;
        break;
      case "Rid":
        totalPrice += 40;
        break;
      case "GT&Vid":
        totalPrice +=75;
        break;
      case "GT&Rid":
        totalPrice +=70;
        break;
      case "Vid&Rid":
        totalPrice +=45;
        break;
      case "all":
        totalPrice +=63
    }
  
    switch (screenTime) {
      case "mor":
        totalPrice *= 0.6;
        break;
      case "noon":
        totalPrice *= 0.4;
        break;
      case "eve":
        totalPrice *= 0.8;
        break;
      case "night":
        totalPrice *= 1;
        break;
      case "mor&noon":
        totalPrice *= 0.5;
        break;
      case "mor&eve":
        totalPrice *= 0.7;
        break;
      case "mor&night":
        totalPrice *= 0.8;
        break;
      case "noon&eve":
        totalPrice *= 0.6;
        break;
      case "noon&night":
        totalPrice *= 0.7;
        break;
      case "eve&night":
        totalPrice *=0.9;
        break;
      case "mor&noon&eve&night":
        totalPrice *= 0.7;
        break;
    }

    switch (duration){
      case "single":
        totalPrice *= 1;
        break;
      case "week":
        totalPrice *= 7;
        break;
      case "month":
        totalPrice *= 30;
        break;
      case "half_year":
        totalPrice *= 180;
        break;
    }
  
    //for (let i = 0; i < features.length; i++) {
    //  totalPrice += 20; // assume each feature adds $20 to the total price
    //}
    // Add an event listener to the input field
    var runtime = parseFloat(document.getElementById('runtime').value);
    totalPrice *= runtime;
    totalPrice *= 6;
    // Display the total price
    document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
  }

// scripts.js

const toggleButton = document.getElementById("toggle-button");
const body = document.body;
const container = document.querySelector(".container");
const h1 = document.querySelector("h1");
const labels = document.querySelectorAll("label");
const button = document.querySelector("button");
const totalPrice = document.getElementById("totalPrice");

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("bright-mode");
  container.classList.toggle("dark-mode");
  container.classList.toggle("bright-mode");
  h1.classList.toggle("dark-mode");
  h1.classList.toggle("bright-mode");
  labels.forEach((label) => {
    label.classList.toggle("dark-mode");
    label.classList.toggle("bright-mode");
  });
  button.classList.toggle("dark-mode");
  button.classList.toggle("bright-mode");
  totalPrice.classList.toggle("dark-mode");
  totalPrice.classList.toggle("bright-mode");
});