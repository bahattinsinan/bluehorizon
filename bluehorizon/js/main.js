document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const inputs = form.querySelectorAll("input");
  const reservationSection = document.querySelector("#reservation");

  if (!form || !reservationSection) return;

  // Yeni alanları oluştur
  const ageInput = document.createElement("input");
  ageInput.type = "number";
  ageInput.placeholder = "Number of Children (0–6 age)";
  ageInput.min = 0;
  ageInput.required = true;
  ageInput.id = "childCount";

  form.insertBefore(ageInput, form.querySelector("button"));

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const checkIn = new Date(inputs[2].value);
    const checkOut = new Date(inputs[3].value);
    const adultCount = parseInt(inputs[4].value) || 0;
    const childCount = parseInt(ageInput.value) || 0;

    if (isNaN(checkIn.getTime()) || isNaN(checkOut.getTime()) || checkOut <= checkIn) {
      alert("Please enter valid check-in and check-out dates.");
      return;
    }

    const days = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    const totalPrice = days * 1000 * adultCount;

    const message = `
Reservation Summary:
-------------------------
Days: ${days}
Adults: ${adultCount}
Children (0–6): ${childCount} (free)
Total Price: $${totalPrice}
-------------------------

❌ A system error occurred. Please contact us via WhatsApp.
`;

    alert(message);
    window.location.href = "https://wa.me/12512159107";
  });
});
