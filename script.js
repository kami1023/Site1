function addToCart(productName) {
    try {
        // Simulate adding to cart
        console.log(`${productName} has been added to your cart.`);
        alert(`${productName} has been added to your cart.`);
    } catch (error) {
        console.error("Error adding to cart:", error);
        alert("There was an error adding the item to your cart. Please try again.");
    }
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    try {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simulate form submission
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        alert("Your message has been sent!");
    } catch (error) {
        console.error("Error submitting the form:", error);
        alert("There was an error submitting your message. Please try again.");
    }
});
