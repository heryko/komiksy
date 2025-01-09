let currentIndex = 0;
let currentImages = [];

function loadGallery(komiks, totalImages) {
    // Przejście do galerii
    document.getElementById('menu').style.display = 'none';
    document.getElementById('gallery').style.display = 'block';

    // Ustawienie nazwy komiksu w górnej części galerii
    document.getElementById('comic-name').textContent = komiks;  // Ustawienie nazwy komiksu

    // Generowanie listy obrazów na podstawie folderu i liczby plików
    currentImages = [];
    for (let i = 1; i <= totalImages; i++) {
        currentImages.push(`${komiks}/${i}.jpg`);
    }

    // Ustawienie pierwszego obrazu
    currentIndex = 0;
    document.getElementById('image').src = currentImages[currentIndex];

    // Aktualizacja numeru strony
    updatePageInfo(totalImages);
}

function changeImage(direction) {
    if (direction === 'prev') {
        currentIndex = (currentIndex === 0) ? currentImages.length - 1 : currentIndex - 1;
    } else if (direction === 'next') {
        currentIndex = (currentIndex === currentImages.length - 1) ? 0 : currentIndex + 1;
    }

    // Ustawienie nowego obrazu
    document.getElementById('image').src = currentImages[currentIndex];

    // Aktualizacja numeru strony
    updatePageInfo(currentImages.length);
}

// Funkcja do aktualizacji numeru strony
function updatePageInfo(totalImages) {
    document.getElementById('current-page').textContent = currentIndex + 1;  // Dodajemy 1, bo numeracja zaczyna się od 1
    document.getElementById('total-pages').textContent = totalImages;
}
