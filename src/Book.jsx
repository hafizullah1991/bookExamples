
function Book ({title, author, description}) {
  // Descructuring props
  // const bookName = "John Text"
  // const author = "Hafiz"
  // const description = " A great book for beginners"
  return (
    <div className="bookStyle">
      <h1> we hav ebooks with foloowing info</h1>
      <h2>Book Nam: {title}</h2>
      <h2> Author : {author}</h2>
      <h3> Description : {description } </h3>
    </div>
  )
}
export default Book;