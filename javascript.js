document.addEventListener("DOMContentLoaded", function() {
  // Fetch books from API or database
  fetch("https://api.example.com/books")
    .then(response => response.json())
    .then(data => {
      const booksContainer = document.getElementById("books");
      data.forEach(book => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("card");
        bookElement.innerHTML = `
          <img src="${book.image}" class="card-img-top" alt="Book Image">
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">${book.author}</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        `;
        booksContainer.appendChild(bookElement);
      });
    })
    .catch(error => console.log(error));
});
