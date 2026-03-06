/* SIDEBAR */

function toggleSidebar(){
document.getElementById("sidebar").classList.toggle("active");
}

/* THEME */

function toggleTheme(){
document.body.classList.toggle("dark");
}

/* SEARCH FUNCTIONALITY */

function filterLinks() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const text = link.textContent.toLowerCase();
        if (text.includes(searchInput)) {
            link.style.display = 'flex';
        } else {
            link.style.display = 'none';
        }
    });
}

/* CLICK OUTSIDE TO CLOSE */

document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const rfidBtn = document.querySelector('.rfid-btn');
    
    if (sidebar.classList.contains('active') && 
        !sidebar.contains(event.target) && 
        !rfidBtn.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});
