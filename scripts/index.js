//Index.js For The Home Page
const login = document.querySelector('#loginButton');
login.addEventListener('click', (e) => {
  const email = document.querySelector('#emailLogin');
  const password = document.querySelector('#passwordLogin');
  if (email.value == '' || password.value == '') {
    document.getElementById('validationText').classList.add('red-text');
    document.getElementById('validationText').textContent = 'Please enter the required fields';
  } else {
    document.getElementById('loginContent').classList.add('hide');
    document.getElementById('preLoadingSection').classList.remove('hide');
    document.getElementById('loginFooter').classList.add('hidden-visibility');
  }

}); 
