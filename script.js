function activateBox(boxId, price) {
    const allBoxes = document.querySelectorAll('.box');
    const allDetails = document.querySelectorAll('.details');
    const allRadioButtons = document.querySelectorAll('input[type="radio"]');

    allDetails.forEach(detail => detail.style.display = 'none');
    allBoxes.forEach(box => box.classList.remove('active'));
    allRadioButtons.forEach(radio => radio.checked = false);

    document.getElementById(boxId).classList.add('active');
    document.querySelector(`#${boxId} .details`).style.display = 'block';
    document.querySelector(`#${boxId} input[type="radio"]`).checked = true;

    document.getElementById('total').innerText = `$${price}.00 USD`;
}

document.addEventListener('DOMContentLoaded', function () {
    activateBox('box2', 18);
});
