document.addEventListener('DOMContentLoaded', function() {
    const bookForm = document.getElementById('book-form');
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const genreInput = document.getElementById('genre');
    const bookList = document.getElementById('book-list');
    const filterButtons = document.querySelectorAll('.filter-button');
    const prevPageButton = document.getElementById('prev-page');
    const nextPageButton = document.getElementById('next-page');
    const pageInfo = document.getElementById('page-info');

    const initialBooks = [
        { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'classics' },
        { title: '1984', author: 'George Orwell', genre: 'classics' },
        { title: 'Moby Dick', author: 'Herman Melville', genre: 'classics' },
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'classics' },
        { title: 'War and Peace', author: 'Leo Tolstoy', genre: 'classics' },
        { title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'classics' },
        { title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'classics' },
        { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', genre: 'classics' },
        { title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'fantasy' },
        { title: 'Brave New World', author: 'Aldous Huxley', genre: 'fiction' },
        { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', genre: 'fantasy' },
        { title: 'Jane Eyre', author: 'Charlotte Brontë', genre: 'classics' }
    ];

    let books = [...initialBooks];
    let currentPage = 1;
    const booksPerPage = 5;
    let currentGenre = 'all';

    function displayBooks(page, genre) {
        bookList.innerHTML = '';
        const filteredBooks = genre === 'all' ? books : books.filter(book => book.genre === genre);
        const totalBooks = filteredBooks.length;
        const totalPages = Math.ceil(totalBooks / booksPerPage);
        const start = (page - 1) * booksPerPage;
        const end = page * booksPerPage;
        const booksToShow = filteredBooks.slice(start, end);

        booksToShow.forEach(book => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${book.title} by ${book.author} (${book.genre})</span>
                <button>Delete</button>
            `;
            li.querySelector('button').addEventListener('click', function() {
                const index = books.indexOf(book);
                if (index > -1) {
                    books.splice(index, 1);
                    displayBooks(currentPage, genre);
                }
            });
            bookList.appendChild(li);
        });

        pageInfo.textContent = `Page ${page} of ${totalPages}`;
        prevPageButton.disabled = page === 1;
        nextPageButton.disabled = page === totalPages;
    }

    function filterBooks(genre) {
        currentGenre = genre;
        currentPage = 1;
        displayBooks(currentPage, genre);
    }

    bookForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const newBook = { title: titleInput.value, author: authorInput.value, genre: genreInput.value };
        books.push(newBook);
        titleInput.value = '';
        authorInput.value = '';
        genreInput.value = '';
        displayBooks(currentPage, currentGenre);
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const genre = button.getAttribute('data-genre');
            filterBooks(genre);
        });
    });

    prevPageButton.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            displayBooks(currentPage, currentGenre);
        }
    });

    nextPageButton.addEventListener('click', function() {
        currentPage++;
        displayBooks(currentPage, currentGenre);
    });

    // Set initial filter button to active
    document.querySelector('.filter-button[data-genre="all"]').classList.add('active');
    displayBooks(currentPage, currentGenre);
});


