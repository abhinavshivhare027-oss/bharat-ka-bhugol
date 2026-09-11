document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const chapterCards = document.querySelectorAll(".chapter-card");

    function searchChapters() {

        const searchText = searchInput.value.toLowerCase().trim();

        chapterCards.forEach(function (card) {

            const chapterText = card.textContent.toLowerCase();

            if (chapterText.includes(searchText)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });
    }

    if (searchInput) {
        searchInput.addEventListener("input", searchChapters);
    }

    if (searchButton) {
        searchButton.addEventListener("click", searchChapters);
    }

});
