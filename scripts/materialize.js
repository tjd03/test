// setup Home materialize components
document.addEventListener('DOMContentLoaded', function() {

  //initialize Side Navigation Bar
  var sideNavBar = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sideNavBar);

  //initialize Dropdown Trigger
  var dropdown = document.querySelectorAll('.dropdown-trigger');
  M.Dropdown.init(dropdown);

  //initialize Modal Trigger
  var modal = document.querySelectorAll('.modal');
  M.Modal.init(modal);

  //initialize Floating Action Button Trigger
  var floatingActionButton = document.querySelectorAll('.fixed-action-btn');
  M.FloatingActionButton.init(floatingActionButton); 

});
