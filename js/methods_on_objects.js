//// Make Methods On Objects ////

let otherBooks = [
    {title: 'Harry Potter and the Sorcerer\'s Stone', index: 1},
    {title: 'Harry Potter and the Chamber of Secrets', index: 2},
    {title: 'Harry Potter  and the Prisoner of Azkaban', index: 3},
    {title: 'Harry Potter and the Goblet of Fire', index: 4},
    {title: 'Harry Potter and the Order of the Phoenix', index: 5},
    {title: 'Harry Potter and the Half-Blood Prince', index: 6},
    {title: 'Harry Potter and the Deathly Hallows', index: 1},
]

// you can make a method on an object using the key: value pairs

let book = {
    title: 'harry potter and the room of secrets',
    author: 'J.K.Rowling',
    pages: 352,
    otherBooks: otherBooks,
    read() {
        console.log('You have read this book!!');
    },
    showotherBooks(){
        console.log('There are other books from this serie: ');
        console.table(this.otherBooks);
    }
};

// you can call the method like this:
book.read();    
book.showotherBooks();