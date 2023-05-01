const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

/* `document.querySelectorAll('.circle');` is selecting all the elements with the class
name "circle" in the HTML document and returning a NodeList of those elements. */
// NOTE: NodeList is similar to an ARRAY
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

/* `next.addEventListener('click', () => { })` is adding an event listener to the `next` button. When
the button is clicked, the function inside the curly braces will be executed. */
next.addEventListener('click', () => {
    currentActive++; // increment

    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    update();

    // console.log(currentActive);
});

prev.addEventListener('click', () => {
    currentActive--; // decrement

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();

    // console.log(currentActive);

});


const update = () => {

    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        }
        else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');
    // Here we add -1 just to make the blue progress bar within the current active
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    // Button Disabling based on the conditions
    if (currentActive === 1) {
        prev.disabled = true;
    }
    else if (currentActive === circles.length) {
        next.disabled = true;
    }
    else {
        prev.disabled = false;
        next.disabled = false;
    }
}
