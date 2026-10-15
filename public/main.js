
/* Task 11: Async booking with numbered confirmation */

import { delay, makeCounter } from "./utils.js";

const status = document.querySelector("#status");
const tbody = document.querySelector("#schedule tbody");
const nextBooking = makeCounter();

tbody.addEventListener("click", async (event) => {
  const button = event.target.closest("button[data-day]");
  if (!button) return;

  const row = button.closest("tr");
  const day = button.dataset.day;

  // Prevent another click while this booking is processing.
  if (button.disabled) return;
  button.disabled = true;

  status.textContent = `Updating booking for ${day}...`;

  try {
    await delay(1000);

    const booked = row.classList.toggle("selected");
    const count = document.querySelectorAll(
      "#schedule tr.selected"
    ).length;

    if (booked) {
      status.textContent =
        `Booking #${nextBooking()} confirmed for ${day}. ` +
        `${count} slot(s) booked.`;
    } else {
      status.textContent =
        `Booking cancelled for ${day}. ${count} slot(s) booked.`;
    }
  } finally {
    button.disabled = false;
  }
});
