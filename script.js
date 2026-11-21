// Mobile menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Simple price calculation (demo)
document.getElementById('search-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const vehicle = document.getElementById('vehicle').value;
  const date = document.getElementById('date').value;

  // Very simple demo pricing (you can improve later)
  let basePrice = 2500;
  if (vehicle === 'suv') basePrice = 3200;
  if (vehicle === 'innova') basePrice = 3800;
  if (vehicle === 'tempo') basePrice = 5500;

  // Add some variation based on cities (just for demo)
  const cityFactor = (from.length + to.length) % 5;
  const finalPrice = basePrice + (cityFactor * 300);

  const results = document.getElementById('results');
  const priceList = document.getElementById('price-list');

  priceList.innerHTML = `
    <div class="price-card">
      <div>
        <h4>${from} → ${to}</h4>
        <p>Date: ${date} • ${vehicle.toUpperCase()}</p>
      </div>
      <div class="price">₹${finalPrice.toLocaleString('en-IN')}</div>
      <a href="#contact" class="btn" style="padding:10px 20px; font-size:0.95rem;">Book Now</a>
    </div>
    <div class="price-card">
      <div>
        <h4>${from} → ${to} (Premium)</h4>
        <p>Date: ${date} • Newer Vehicle</p>
      </div>
      <div class="price">₹${(finalPrice + 800).toLocaleString('en-IN')}</div>
      <a href="#contact" class="btn" style="padding:10px 20px; font-size:0.95rem;">Book Now</a>
    </div>
  `;

  results.classList.remove('hidden');
  results.scrollIntoView({ behavior: 'smooth' });
});

// Booking form
document.getElementById('booking-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you! Your booking request has been received.\nOur team will call you within 30 minutes.');
  this.reset();
});
