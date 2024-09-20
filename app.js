document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', () => {
      const likeCountSpan = button.querySelector('.like-count');
      let likeCount = parseInt(likeCountSpan.textContent);
  
      // Toggle the "liked" class
      button.classList.toggle('liked');
  
      // Increment or decrement the like count
      if (button.classList.contains('liked')) {
        likeCount++;
      } else {
        likeCount--;
      }
  
      likeCountSpan.textContent = likeCount;
    });
  });
  