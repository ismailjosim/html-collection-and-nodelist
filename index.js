// get the nodeList
// const listEl = document.getElementById('myList');
// const childNodes = listEl.childNodes;
// console.log(childNodes)

// methods that return NodeList:
/*
* querySelectorAll
* childNodes
* getElementsByName (less common)
*/

// const listEl = document.querySelectorAll('li'); // specific li items.
// console.log(listEl)

// both are ARRAY link elements: (They don't have all the method that array have: i.e: map, filter, reduce etc.)
// for (let i = 0; i < listEl.length; i++) {
//     listEl[i].style.color = 'red'
// }

// listEl[2].style.backgroundColor = 'black'
// listEl[2].style.color = 'white'




// Get HTML collection
// const listEl = document.getElementsByTagName('li');
// console.log(listEl)

// others method to get html collection
/*
* getElementsByTagname
* getElementsByClassName
* document.forms
* children

*/
// both are ARRAY link elements:
// for (let i = 0; i < listEl.length; i++) {
//     listEl[i].style.color = 'green'
//     listEl[i].style.fontSize = '2rem'
//     listEl[i].style.fontWeight = '600'
// }

// listEl[3].style.color = 'brown'


// convert htmlCollection & NodeList to Real Array
// ! Don't have Array method
// listEl.map(function (el, index) {
//     const item = `${ index + 1 }: ${ el.innerText }`;
//     console.log(item)
// })

// const arr = Array.from(listEl);
// arr.map(function (el, index) {
//     const item = `${ index + 1 }: ${ el.innerText }`;
//     console.log(item)
// })

//* Difference NodeList VS HtmlCollection
// const listEl = document.querySelectorAll('li');

// Own forEach method
// listEl.forEach(element => {
//     element.style.color = 'red'
// });
// it also have keys, values & entries
// for (const item of listEl.entries()) { // entries
// for (const item of listEl.keys()) { // keys
// for (const item of listEl.entries()) {
// console.log(item)

