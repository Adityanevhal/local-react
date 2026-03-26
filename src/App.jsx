import React from 'react'

const App = () => {
  const user={
    name:'John Doe',
    email:'john.doe@example.com'
  }
  localStorage.setItem('user', JSON.stringify(user))
  return (
    <div>App</div>
  )
}

export default App
// Key Points about localStorage
// Data is stored as strings (you’ll need 
// JSON.stringify and JSON.parse for objects/arrays).

// Storage is synchronous and limited to about 5MB.

// Data persists until explicitly 
// removed (unlike sessionStorage, 
//   which clears when the tab closes).// Save data
// localStorage.setItem("username", "Aditya");

// // Retrieve data
// const user = localStorage.getItem("username");
// console.log(user); // "Aditya"

// // Remove data
// localStorage.removeItem("username");

// // Clear all
// localStorage.clear();
