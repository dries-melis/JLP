//// object literals ////

// You can make an object with curly braces

let book = {
    title: 'harry potter and the room of secrets',
    author: 'J.K.Rowling',
    pages: 352,
    otherBooks: ['the philosopher stone', 'the red dragon?? :)'],
};

console.table({book: book});
console.log(typeof book);

// you can acces the single properties like this:
console.log(book.author);
//or like this
console.log(book['author']);

// you can give the different properties another value like this:
book.pages = 450;
console.log(book.pages);
// Or like this:
book['pages'] = 890;
console.log(book['pages']);
/* You need the second method if you want to pass a variable in
*/
const pg = 'pages';
console.log(book[pg]);

/* If you try it like this it wont work
console.log(book.pg);
*/      