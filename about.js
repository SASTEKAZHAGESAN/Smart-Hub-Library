const books = [
    { title: "siva", file: "books/lordsiva.pdf" },
    { title: "yoga", file: "books/essence_yoga.pdf" },
    { title: "gita", file: "books/gita_busy.pdf" }
];

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const booksContainer = document.getElementById("booksContainer");

function displayBooks(filteredBooks) {
    booksContainer.innerHTML = "";

    if (filteredBooks.length === 0) {
        booksContainer.innerHTML = "<p>No books found.</p>";
        return;
    }

    filteredBooks.forEach(book => {
        const card = document.createElement("div");
        card.className = "book-card";

        const title = document.createElement("h4");
        title.textContent = book.title;

        const downloadBtn = document.createElement("button");
        downloadBtn.textContent = "Download";
        downloadBtn.onclick = () => {
            window.open(book.file, "_blank");
        };

        card.appendChild(title);
        card.appendChild(downloadBtn);
        booksContainer.appendChild(card);
    });
}

// ✅ SHOW BOOKS ON LOAD
displayBooks(books);

function searchBooks() {
    const query = searchInput.value.toLowerCase().trim();
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(query)
    );
    displayBooks(filteredBooks);
}

searchBtn.addEventListener("click", searchBooks);

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") searchBooks();
});
