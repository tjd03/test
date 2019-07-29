//Index.js For The Sign Up Page
// Back Button When The User Clicks It
const back = document.querySelector('#backButton');
back.addEventListener('click', (e) => {
  document.getElementById('usernameArea').value = '';
  document.getElementById('emailArea').value = '';
  document.getElementById('passwordArea').value = '';
  document.getElementById('confirmPasswordArea').value = '';
  window.location.href = 'C:/Users/Cory/Documents/Developing/Web Applications/capitum/index.html';
});
// Sign Up Button When The User Clicks It
const signUp = document.querySelector('#signUpForm');
signUp.addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('usernameSection').classList.add('hidden-visibility');
  document.getElementById('preLoadingSection').classList.remove('hide');
  document.getElementById('emailSection').classList.add('hide');
  document.getElementById('passwordSection').classList.add('hidden-visibility');
  document.getElementById('descriptionSection').classList.add('hidden-visibility');
  document.getElementById('buttonSection').classList.add('hidden-visibility');
}); 
