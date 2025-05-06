const quotes = [
    "“A reader lives a thousand lives before he dies.” – George R.R. Martin",
    "“So many books, so little time.” – Frank Zappa",
    "“Until I feared I would lose it, I never loved to read.” – Harper Lee",
  ];
  let i = 0;
  setInterval(() => {
    document.getElementById('quoteText').textContent = quotes[i % quotes.length];
    i++;
  }, 5000);
  


  document.getElementById('logoClick').addEventListener('click', function () {
    alert("Look, an awesome secret");
  });

