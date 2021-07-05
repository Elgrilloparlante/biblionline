import React, { useState }from 'react';
import '../books/books.css';
import Book from '../books/Book';
import {Books} from '../books/Books';

const Menu = ({ books }) => {

    const showHorizontalMenu = () => {

        var links = document.getElementById("links");

        if(window.innerWidth < 680){
            links.style.display = "none";
        } else {
            links.style.display = "flex";
        }
        
    }

    const displayBurguerMenu = () => {

        var links = document.getElementById("links");
        
        if(links.style.display === "none"){
            links.style.display = "block";
            console.log('if');
        } else {
            links.style.display = "none";        
            console.log('else');
        }
    }

    window.onresize = showHorizontalMenu;

    const [searchField, setSearchField] = useState("");
    const [, setBooks] = useState([]);

    const filteredBooks = books.filter(
        book => {
          return (
                book
                .titulo
                .toLowerCase()
                .includes(searchField.toLowerCase()) ||
                book
                .autor
                .toLowerCase()
                .includes(searchField.toLowerCase())
            );
        }
    )
    .map(
        (book) => {
            return (
                // {...book} extender propiedades
                <Book key = {book.id} {...book}></Book>
            );
        }
    );

    function booklist() {
        return(
            filteredBooks
        );
    }

    const handleChange = e => {
        setSearchField(e.target.value);
      };

    function sortBy(category){

        var sorted;

        switch (category) {
            case 'titulo':
                sorted = Books.sort((a,b) => (a.titulo > b.titulo) ? 1 : -1).map(
                    (book) => {
                    return (
                        // {...book} extender propiedades
                        <Book key = {book.id} {...book}></Book>
                    );
                    }
                );    
                break;
            case 'autor':
                sorted = Books.sort((a,b) => (a.autor > b.autor) ? 1 : -1).map(
                    (book) => {
                    return (
                        // {...book} extender propiedades
                        <Book key = {book.id} {...book}></Book>
                    );
                    }
                );    
                break;
            case 'fecha':
                sorted = Books.sort((a,b) => (a.year > b.year) ? 1 : -1).map(
                    (book) => {
                    return (
                        // {...book} extender propiedades
                        <Book key = {book.id} {...book}></Book>
                    );
                    }
                );    
                break;
            default:
                Books.sort((a,b) => (a.id > b.id) ? 1 : -1).map(
                    (book) => {
                    return (
                        // {...book} extender propiedades
                        <Book key = {book.id} {...book}></Book>
                    );
                    }
                );
    
          }

          setBooks(sorted);
    };
     
    return (
        <>
            <nav>
                <div id = 'links'>
                    <button onClick = {() => sortBy('')}>Inicio</button>
                    <div className = 'dropdown'>
                        <button className = 'dropbtn'>Ordenar por</button>
                        <div className = 'dropdown-content'>
                            <button onClick = {() => sortBy('titulo')}>Título</button>
                            <button onClick = {() => sortBy('autor')}>Autor</button>
                            <button onClick = {() => sortBy('fecha')}>Fecha</button>
                        </div>   
                    </div>
                    <button onClick = {console.log('')}>Búsqueda avanzada</button>
                </div>

                <div id="search-container">
                    <div className = 'form'>
                        <input id = 'searchValue' type = "search" placeholder = "Buscar..." onChange = {handleChange} />
                        {/*<button onClick = {() => searchBooks()}><i className = "fa fa-search"></i></button>*/}
                   </div>        
                </div>
                
                <button id="icon" tabIndex="0" onClick = {() => displayBurguerMenu()}>
                    <i className="fa fa-bars"></i>
                </button>
            </nav>
            <section className = 'booklist'>
                {booklist()}
            </section>
                    
        </>
        
    );
}

export default Menu;

/*
INICIO | ORDENAR TODOS POR        | CATEGORÍAS
            Titulo                    Formación
            Autor                     Feminismo de clase
            Fecha                     Organizaciones
            País                            Pais

*/