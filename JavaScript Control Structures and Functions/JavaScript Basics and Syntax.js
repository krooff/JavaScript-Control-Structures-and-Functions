let loggedIn = true; 
let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 
            'Candy Corn', 'The Pragmatic Programmer', 'Tomato'];

if (loggedIn) {
  console.log("Your Cart:");
  for (let item of cart) {
    console.log(item);
  }
} else {
  console.log("Please log in to view your cart.");
}
