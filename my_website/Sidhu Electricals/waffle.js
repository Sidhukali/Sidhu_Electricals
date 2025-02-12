// Get elements
const waffleBtn = document.getElementById('waffle-btn');
const dropdownMenu = document.getElementById('dropdown-menu');
const searchBox = document.getElementById('search-box');
const menuItems = document.getElementById('menu-items').getElementsByTagName('li');

// Toggle dropdown
waffleBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
});

// Close when clicking outside
document.addEventListener('click', (event) => {
    if (!waffleBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add('hidden');
    }
});

// Search filter
searchBox.addEventListener('keyup', () => {
    let filter = searchBox.value.toLowerCase();
    for (let i = 0; i < menuItems.length; i++) {
        let text = menuItems[i].textContent.toLowerCase();
        menuItems[i].style.display = text.includes(filter) ? '' : 'none';
    }
});
