// Step 1: Remove the <main> element
const main = document.querySelector('main');
main.remove();

// Step 2: Create a new <h1> element
const newHeader = document.createElement('h1');

// Step 3: Set the id
newHeader.id = 'victory';

// Step 4: Set the text content
newHeader.textContent = 'Mary Wanjiru is the champion';

// Step 5: Append to body
document.body.append(newHeader);// Write your code here!