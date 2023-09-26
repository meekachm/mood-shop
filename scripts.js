import data from '/data.js'

const itemsContainer = document.querySelector('#items')

// the length of our data determines how many times this loop goes around
// Use the ES6 javascript syntax forEach loop instead of the normal for loop:
// data.forEach(item => {...});
for (let i = 0; i < data.length; i += 1) {
	// create a new div element and give it a class name
	const newDiv = document.createElement('div');
	newDiv.className = 'item'
	
    // create an image element
	const img = document.createElement('img');
	// this will change each time we go through the loop. Can you explain why?
	img.src = data[i].image
	img.width = 300
	img.height = 300
	// Add the image to the div
	newDiv.appendChild(img)
	// put new div inside items container
	itemsContainer.appendChild(newDiv)
	
    // create a paragraph element for a description
	const desc = document.createElement('P')
	// give the paragraph text from the data
	desc.innerText = data[i].desc
	// append the paragraph to the div
	newDiv.appendChild(desc)
	
    // do the same thing for price
	const price = document.createElement('P')
	price.innerText = data[i].price
	newDiv.appendChild(price)
	
    // Make a button 
	const button = document.createElement('button')
	// add an  id name to the button
	button.id = data[i].name
	// creates a custom attribute called data-price. That will hold price for each element in the button
	button.dataset.price = data[i].price
	button.innerHTML = "Add to Cart"
	newDiv.appendChild(button)
}

// This first video will walk you through how to add and show items on your console 
// by writing the functions addItem() and showItems().

const cart = []

function addItem(name, price) {
    const item = { name: name, price: price, qty: 1 }
    cart.push(name)
}

function showItems() {
    console.log(`You have ${cart.length} items in your cart.`)
}

addItem('Happiness',  5.99)
addItem('Anger', 5.99)
addItem('Disgust', 5.99)
addItem('Shy', 5.99)

showItems()