import "./App.css";
import Book from "./Book";

function App() {
  //  const bookName = "John Text"
  // const author = "Hafiz"
  // const description = " A great book for beginners"
  const books = [
    {
      id: 1,
      title: "Personality",
      author: "Hamidullah",
      description: "changing life",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James",
      description: "How small habits make a big difference.",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James",
      description: "How small habits make a big difference.",
    },
  ];
  return (
    <div className="App">
      {/* <Book {books.map(book =>book.author}/> */}
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          description={book.description}
        />
      ))}
    </div>
  );
}

export default App;
