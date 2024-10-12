// Activate the clicked box, handle dynamic expansion/collapse, and update total price
function activateBox(boxId, price) {
    const allBoxes = document.querySelectorAll('.box');
    const allDetails = document.querySelectorAll('.details');
    const allRadioButtons = document.querySelectorAll('input[type="radio"]');

    // First, collapse all boxes and uncheck all radio buttons
    allDetails.forEach(detail => detail.style.display = 'none');
    allBoxes.forEach(box => box.classList.remove('active'));
    allRadioButtons.forEach(radio => radio.checked = false);

    // Activate the clicked box and expand it
    document.getElementById(boxId).classList.add('active');
    document.querySelector(`#${boxId} .details`).style.display = 'block';
    document.querySelector(`#${boxId} input[type="radio"]`).checked = true;

    // Update total price
    document.getElementById('total').innerText = `$${price}.00 USD`;
}

// Set box2 (Most Popular) as default active on page load
document.addEventListener('DOMContentLoaded', function () {
    activateBox('box2', 18);
});
