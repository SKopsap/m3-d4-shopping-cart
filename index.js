console.log('app.js conneted')

const renderBookList = (books) => {
  return books
    .map((book, i) => {
      //console.log(element.title)
      return `<div>${book.title}</div>`
    })
    .join('')
}

const getBooks = () => {
  return fetch('https://striveschool-api.herokuapp.com/books').then((resp) =>
    resp.json()
  )
}

window.onload = function () {
  Promise.resolve(getBooks())
    .then((books) => {
      const selected = document.getElementById('root')
      selected.innerHTML = renderBookList(books)
    })
    .catch((err) => console.error(err))
}
