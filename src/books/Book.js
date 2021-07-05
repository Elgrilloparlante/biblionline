import React from 'react'

const Book = (
  {
    titulo, autor, tags, year, editorial, formato, 
    idioma, link
  }) => {
  //attribute, eventHandler

  return (
  <article className = 'book'>
    <p className = 'title'>{titulo}</p>
    <p className = 'author'>Autor/a: {autor}</p>
    <a href = {link} target = '_blank' rel = 'noreferrer'>
      Descargar en formato {formato}
    </a>
  </article>
  )
}
export default Book
