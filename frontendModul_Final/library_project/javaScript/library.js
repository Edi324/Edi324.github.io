document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search');
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        document.querySelectorAll('.book-card').forEach(card => {
          const title = card.querySelector('h3').textContent.toLowerCase();
          const author = card.querySelector('.author').textContent.toLowerCase();
          card.style.display = (title.includes(searchTerm) || author.includes(searchTerm)) ? 'flex' : 'none';
        });
      });
    }

    const genreFilter = document.getElementById('genre-filter');
    if (genreFilter) {
      genreFilter.addEventListener('change', function () {
        const genre = this.value;
        document.querySelectorAll('.book-card').forEach(card => {
          const cardGenre = card.querySelector('.genre').textContent.toLowerCase();
          card.style.display = (!genre || cardGenre === genre) ? 'flex' : 'none';
        });
      });
    }
  });

  document.getElementById('logoClick').addEventListener('click', function () {
    alert("Look, an awesome secret");
  });