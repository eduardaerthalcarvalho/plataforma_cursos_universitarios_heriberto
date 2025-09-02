document.getElementById('menu-toggle').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});
        function toggleDetails(detailsId) {
            const details = document.getElementById(detailsId);
            details.classList.toggle('show');
        }
        function closeDetails(detailsId) {
            const details = document.getElementById(detailsId);
            details.classList.remove('show');
        }
