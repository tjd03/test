//Index.js For The Feedback Page
//Submit The Feedback Form From The Input Of The Feedback
const feedbackForm = document.querySelector('#feedbackForm');
feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();
  //Setting The Feedback Form To A Thank You Message After Submitting The Feedback Form
  const feedbackCard = document.querySelector('#feedbackCard');
  feedbackCard.innerHTML = '<h5 class="center-align">Thank you for your feedback!</h5>'; 
});
