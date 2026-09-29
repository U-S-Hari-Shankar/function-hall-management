// Fake booked dates for now (later this will come from the database)
const bookings = [
  { hall: "Royal Hall", date: "2026-10-15" },
  { hall: "Garden Hall", date: "2026-10-20" },
  { hall: "Royal Hall", date: "2026-11-05" },
  { hall: "Mini Hall", date: "2026-10-30" },
  { hall: "Garden Hall", date: "2026-12-25" }
];

// Block past dates in the date picker
const dateInput = document.getElementById("eventDate");
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min", today);

const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", function () {
  const date = document.getElementById("eventDate").value;
  const hall = document.getElementById("hallSelect").value;

  // Reset old styles
  result.className = "";

  if (date === "") {
    result.textContent = "Please select a date.";
    result.classList.add("warning");
    return;
  }

  const isBooked = bookings.some(function (b) {
    return b.hall === hall && b.date === date;
  });

  if (isBooked) {
    result.textContent = hall + " is already booked on " + date + ".";
    result.classList.add("booked");
  } else {
    result.textContent = hall + " is available on " + date + "!";
    result.classList.add("available");
  }
});