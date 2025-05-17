let currentSlide = 0;
// Initialize the first image
document.querySelectorAll(".carousel-inner img")[1].classList.add("active");

// Function to show the previous slide
function prevSlide() {
  const images = document.querySelectorAll(".carousel-inner img");
  images[currentSlide].classList.remove("active");
  currentSlide = (currentSlide - 1 + images.length) % images.length;
  images[currentSlide].classList.add("active");
}

// Function to show the next slide
function nextSlide() {
  const images = document.querySelectorAll(".carousel-inner img");
  images[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % images.length;
  images[currentSlide].classList.add("active");
}

const distances = {
  "Airport": {
      "Rumi Darwaza": 12,
      "Bada Imambada": 14,
      "Chota Imambada": 16,
      "Janeshwar Mishra Park": 10,
      "Old Lucknow": 15,
      "Charbagh Lucknow": 13
  },
  "Railway Station": {
      "Rumi Darwaza": 8,
      "Bada Imambada": 10,
      "Chota Imambada": 12,
      "Janeshwar Mishra Park": 6,
      "Old Lucknow": 9,
      "Charbagh Lucknow": 5
  }
};
const pricePerKm = 15; // Price per kilometer in currency units

function calculateTravel() {
    const startingPoint = document.getElementById('startingPoint').value;
    const destination = document.getElementById('destination').value;

    if (!startingPoint || !destination) {
        document.getElementById('result').textContent = 'Please select both starting point and destination.';
        return;
    }

    const distance = distances[startingPoint][destination];
    const totalPrice = distance * pricePerKm;

    document.getElementById('result').innerHTML = `
        Distance: ${distance} km<br>
        Total Price: ₹${totalPrice}
    `;
}
