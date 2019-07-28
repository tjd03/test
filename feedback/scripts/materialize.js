// setup Feedback materialize components
document.addEventListener('DOMContentLoaded', function() {

  //initialize Side Navigation Bar
  var sideNavBar = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sideNavBar);

  //initialize Dropdown Trigger
  var dropdown = document.querySelectorAll('.dropdown-trigger');
  M.Dropdown.init(dropdown);

});
