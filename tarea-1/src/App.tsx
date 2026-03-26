import Title from './components/Title'
import Card from './components/Card'
import book0 from './assets/book0.jpg'
import book1 from './assets/book1.jpg'
import book2 from './assets/book2.jpg'
import book3 from './assets/book3.jpg'
import book4 from './assets/book4.jpg'
import book5 from './assets/book5.jpg'
import './App.css'

function App() {

  return (
    <>
      <Title
        text="LIBROS DE LA EDAD MEDIA"/>

      <div className="gallery">
        <Card info = {
          {
            image: book0,
            book_title: "The Hobbit: The Classic Fantasy Novel and Prelude to The Lord of the Rings",
            author: "J.R.R. Tolkien",
            publication_year: 1937
          }
        }/>
        <Card info = {
          {
            image: book1,
            book_title: "The Fellowship Of The Ring: Being the First Part of The Lord of the Rings",
            author: "J.R.R. Tolkien",
            publication_year: 1954
          }
        }/>
        <Card info = {
          {
            image: book2,
            book_title: "The Two Towers: Being the Second Part of The Lord of the Rings",
            author: "J.R.R. Tolkien",
            publication_year: 1954
          }
        }/>
        <Card info = {
          {
            image: book3,
            book_title: "The Return of the King: Being the Third Part of The Lord of the Rings",
            author: "J.R.R. Tolkien",
            publication_year: 1955
          }
        }/>
        <Card info = {
          {
            image: book4,
            book_title: "The Silmarillion",
            author: "J.R.R. Tolkien",
            publication_year: 1977
          }
        }/>
        <Card info = {
          {
            image: book5,
            book_title: "Unfinished Tales Of Númenor And Middle-Earth",
            author: "J.R.R. Tolkien",
            publication_year: 1980
          }
        }/>
      </div>
    </>
  )
}

export default App
