// show prodoct 
document.addEventListener('DOMContentLoaded', function () {
    const table = document.querySelector('table tbody');
    const rows = Array.from(table.querySelectorAll('tr'));
    const dropdownItems = document.querySelectorAll('#showDropdown + .dropdown-menu .dropdown-item');
    const dropdownButton = document.getElementById('showDropdown');

    function showRows(count) {
        rows.forEach((row, index) => {
            row.style.display = index < count ? '' : 'none';
        });
        dropdownButton.textContent = `Show: ${count}`;
        localStorage.setItem('showRowCount', count); // ✅ Save selected value
    }

    // ✅ Load saved value from localStorage (if any)
    const savedCount = localStorage.getItem('showRowCount');
    const defaultCount = savedCount ? parseInt(savedCount) : parseInt(dropdownItems[0].textContent);
    showRows(defaultCount);

    // ✅ Handle dropdown item clicks
    dropdownItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const count = parseInt(this.textContent);
            showRows(count);
        });
    });
});
//real time search bar
document.getElementById('tableSearch').addEventListener('keyup', function() {
    const searchValue = this.value.toLowerCase();
    const rows = document.querySelectorAll('table tbody tr');

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchValue) ? '' : 'none';
    });
});