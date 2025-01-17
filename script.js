document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Log the form data (you can replace this with an actual API call)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    alert('Message sent! Thank you for reaching out.');

    // Optionally, reset the form
    this.reset();
});
