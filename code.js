let currentIndex = 0; // Aktualny indeks obrazka
let currentImages = []; // Lista obrazków w bieżącej galerii

// Funkcja otwierająca wybrane menu
function openMenu(menuId) {
    // Ukryj wszystkie sekcje
    const menus = document.querySelectorAll('.container');
    menus.forEach(menu => {
        menu.style.display = 'none';
    });

    // Wyświetl wybrane menu
    const selectedMenu = document.getElementById(menuId);
    if (selectedMenu) {
        selectedMenu.style.display = 'block';
    } else {
        console.error(`Menu with id "${menuId}" not found.`);
    }
}

// Funkcja wczytująca galerię dla wybranego komiksu
function loadGallery(komiks, totalImages) {
    // Ukryj wszystkie sekcje
    document.querySelectorAll('.container').forEach(menu => menu.style.display = 'none');

    // Pokaż galerię
    document.getElementById('gallery').style.display = 'block';

    // Ustaw nazwę komiksu
    document.getElementById('comic-name').textContent = komiks;

    // Przygotuj listę obrazków w galerii
    currentImages = [];
    for (let i = 1; i <= totalImages; i++) {
        currentImages.push(`${komiks}/${i}.jpg`); // Ścieżki obrazków
    }

    // Ustaw pierwszy obrazek
    currentIndex = 0;
    document.getElementById('image').src = currentImages[currentIndex];

    // Zaktualizuj informacje o numerze strony
    updatePageInfo(totalImages);
}

// Funkcja zmieniająca obrazek w galerii
function changeImage(direction) {
    if (direction === 'prev') {
        currentIndex = (currentIndex === 0) ? currentImages.length - 1 : currentIndex - 1;
    } else if (direction === 'next') {
        currentIndex = (currentIndex === currentImages.length - 1) ? 0 : currentIndex + 1;
    }

    // Ustaw nowy obrazek
    document.getElementById('image').src = currentImages[currentIndex];

    // Zaktualizuj informacje o numerze strony
    updatePageInfo(currentImages.length);
}

// Funkcja aktualizująca numer strony
function updatePageInfo(totalImages) {
    document.getElementById('current-page').textContent = currentIndex + 1; // Dodaj 1 do indeksu
    document.getElementById('total-pages').textContent = totalImages;
}

