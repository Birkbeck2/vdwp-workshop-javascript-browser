///// Workshop on JavaScript in the Browser (DOM and events)

// This workshop has you modify the DOM and write some simple event listeners. There is a corresponding HTML file that loads this JavaScript file as well as a CSS file.

///// 1. Write alt text for images 1 and 2, and then write JavaScript code that sets your alt text on images 1 and 2.

// Start of your code



// End of your code

///// 2. Write JavaScript code that creates HTML elements for a third and fourth image, named "veg3.jpg" and "veg4.jpg". Give the newly created elements ids of "veg3" and "veg4", respectively. Give them a class of "original". Give them alt text.

// Start of your code



// End of your code

///// 3. Write code that changes the class of any image that is clicked on to "clicked". This should make the border blue.

// Start of your code



// End of your code

///// 4. Write code that duplicates any image that is clicked on, after the image. Give these images a class of "duplicate". Hint: you might need a method called "insertAdjacentElement".

// Start of your code




// End of your code

///// 4a. Optional challenge: Modifying the above code for problem #3, give each new image a unique id following the pattern. In other words, the id should be "vegx", where x is the smallest number that doesn't already belong to another image.)

///// 5. Write code that deletes any image that is clicked on, if it is a duplicate.

// Note: This one is tricky, because these elements won't exist when the page loads for the first time, so you can't add event listeners in the global scope. You'll need to add the event listeners *inside* the function that creates the duplicate image elements, so they are only created once the elements exist. The event handler function can be written below.

// Start of your code




// End of your code


///// 6. Write code that lets you hover over an image to insert the img class value inside the p tag that has id = "image-type". Hint: try the event type 'mouseover'. Note: the event listener will need to be added for new nodes too.

// Start of your code




// End of your code

///// 6a. Optional challenge: Add another event listener above using 'mouseleave' that empties the image type p element when the mouse cursor is not over an image.
