// 1. Click event on a button
document.getElementById('btn1').addEventListener('click', function() {
    alert('Button 1 clicked!');
});

// 2. Mouseover event on a div
document.getElementById('div1').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'yellow';
});

// 3. Mouseout event to reset background
document.getElementById('div1').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

// 4. Double click event
document.getElementById('btn2').addEventListener('dblclick', function() {
    console.log('Button 2 double-clicked!');
});

// 5. Keydown event on input
document.getElementById('input1').addEventListener('keydown', function(e) {
    console.log('Key pressed:', e.key);
});

// 6. Change event on select
document.getElementById('select1').addEventListener('change', function() {
    alert('Selected: ' + this.value);
});

// 7. Submit event on form
document.getElementById('form1').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted!');
});

// 8. Focus event on input
document.getElementById('input2').addEventListener('focus', function() {
    this.style.borderColor = 'green';
});

// 9. Blur event on input
document.getElementById('input2').addEventListener('blur', function() {
    this.style.borderColor = '';
});

// 10. Window resize event
window.addEventListener('resize', function() {
    console.log('Window resized to', window.innerWidth, 'x', window.innerHeight);
});