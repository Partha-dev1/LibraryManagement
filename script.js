document.addEventListener('DOMContentLoaded', () => {
    fetchBooks();

    document.getElementById('add-book-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;

        fetch('/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, author }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            fetchBooks();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});

function fetchBooks() {
    fetch('/books')
        .then(response => response.json())
        .then(data => {
            const bookList = document.getElementById('book-list');
            bookList.innerHTML = '';
            data.forEach(book => {
                const div = document.createElement('div');
                div.textContent
            });
        });
    };
