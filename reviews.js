             // javaScript code..
    const reviews = document.querySelectorAll('.review');
    let currentIndex = 0;
         
    function showReview(index) {
    reviews[currentIndex].style.display = 'none';
    currentIndex = index;
    reviews[currentIndex].style.display = 'block';
}
         
    function showNextReview() {
    const nextIndex = (currentIndex + 1) % reviews.length;
     showReview(nextIndex);
}
         
     function showPrevReview() {
     const prevIndex = (currentIndex - 1 + reviews.length) % reviews.length;
     showReview(prevIndex);
}
         
     document.getElementById('nextBtn').addEventListener('click', showNextReview);
     document.getElementById('prevBtn').addEventListener('click', showPrevReview);
     
     // Show the first review initially
     reviews[currentIndex].style.display = 'block';             