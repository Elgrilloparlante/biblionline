import React from 'react';
import './books.css';
import Book from './Book';
import { Books } from './Books';

const Booklist = () => {

    
    return (
        <section className = 'booklist'>
            {Books.map(
                (book) => {
                return (
                    // {...book} extender propiedades
                    <Book key = {book.id} {...book}></Book>
                );
                }
            )}
        </section>
    );
}

export default Booklist;
