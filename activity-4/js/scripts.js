// welcome message

var user = 'Tim';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the latest ProtonMail reviews.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

// price
var price = 5,
    studentDiscount = .10,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price');
    studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);