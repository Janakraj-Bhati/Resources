const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", function () {
  const searchText = this.value.toLowerCase();
  cards.forEach((card) => {
    let isMatch = false;
    card.querySelectorAll("*").forEach((element) => {
      const textContent = element.textContent.toLowerCase();
      if (textContent.includes(searchText)) {
        isMatch = true;
      }
    });
    if (isMatch) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
});
