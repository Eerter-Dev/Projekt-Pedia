document.addEventListener('DOMContentLoaded', function() {
    // Obsługa kliknięć w serduszka
    const heartIcons = document.querySelectorAll('.heart-icon');
    
    heartIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const isLiked = this.getAttribute('data-like') === '1';
            const likeCountElement = this.nextElementSibling;
            let likeCount = parseInt(likeCountElement.textContent);
            
            if (isLiked) {
                this.setAttribute('data-like', '0');
                likeCount--;
                this.style.fill = '#555'; // Reset kolor serduszka do szarego
            } else {
                this.setAttribute('data-like', '1');
                likeCount++;
                this.style.fill = 'var(--primary-color)'; // Użyj koloru primary
            }
            
            likeCountElement.textContent = likeCount;
        });
    });

    // Obsługa przycisków nawigacyjnych
    document.querySelectorAll('.scroll-button').forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });

            // Zmiana stanu aktywnego przycisku
            document.querySelectorAll('.scroll-button').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
