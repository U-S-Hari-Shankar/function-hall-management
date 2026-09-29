// Fake booked dates for now (later this will come from the database)
const bookings = [
  { hall: "Royal Hall", date: "2026-10-15" },
  { hall: "Garden Hall", date: "2026-10-20" },
  { hall: "Royal Hall", date: "2026-11-05" }
];

const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", function () {
  const date = document.getElementById("eventDate").value;
  const hall = document.getElementById("hallSelect").value;

  if (date === "") {
    result.textContent = "Please select a date.";
    return;
  }

  const isBooked = bookings.some(function (b) {
    return b.hall === hall && b.date === date;
  });

  if (isBooked) {
    result.textContent = hall + " is already booked on " + date + ".";
    result.style.color = "red";
  } else {
    result.textContent = hall + " is available on " + date + "!";
    result.style.color = "green";
  }
});