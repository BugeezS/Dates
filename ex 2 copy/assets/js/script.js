function calculateDateInHours(hours) {
  const msPerHour = 60 * 60 * 1000;
  const futureDate = new Date(Date.now() + hours * msPerHour);
  return futureDate;
}

const hoursInput = document.getElementById("hours");
const resultElement = document.getElementById("result");

hoursInput.addEventListener("keyup", function(event) {
  const hours = parseInt(event.target.value);
  if (!isNaN(hours)) {
    const futureDate = calculateDateInHours(hours);
    const formattedDate = futureDate.toLocaleString();
    resultElement.textContent = `Date in ${hours} hours: ${formattedDate}`;
  } else {
    resultElement.textContent = "";
  }
});