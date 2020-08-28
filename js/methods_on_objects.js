//// Make Methods On Objects ////

// you can make a method on an object using the key: value pairs

let book = {
    title: 'harry potter and the room of secrets',
    author: 'J.K.Rowling',
    pages: 352,
    otherBooks: ['the philosopher stone', 'the red dragon?? :)'],
    read: function() {
        console.log('You have read this book!!');
    },
    showotherBooks: function(){
        console.log('There are other books from this serie: ');
        this.otherBooks.forEach(otherbook => {
            console.log(otherbook);
        });
    }
};

// you can call the method like this:
book.read();    
book.showotherBooks();