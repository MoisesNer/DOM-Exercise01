/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)

*/
const ex01 = document.querySelector('p');
ex01.innerHTML = ex01.innerText
.split(' ')
.map(word => word.length >= 8 ? `<span style="background-color: yellow"> ${word}</span>` : word)
.join(' ');

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/
const ex02 = document.createElement('a');
ex02.innerText = 'http://officeipsum.com/'
document.body.appendChild(ex02)
/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/
ex01.innerHTML = ex01.innerHTML
  .split(/\.[^\.|<]/)
  .join('.</p><p>') + '</p>';

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/

const words = document.querySelector('p').innerText.split(' ').length;
console.log("Total of words in the parragraph " + words);

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/

Array.from(document.querySelectorAll('p'))
.forEach(p => {
  p.innerHTML = p.innerHTML
  .replace(/\?/g, '🤔')
  .replace(/\!/g, '😲')
})