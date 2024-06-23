$(document).ready(function(){

  // functions for drop downs
  const sportDropDown = document.getElementById('sports');
  const sports = document.getElementById('sports-catagories');
  const sportsClass = sports.classList;
  const optionsDropDown = document.getElementById('options')
  $(sportDropDown).click(function() {
    $(sports).toggleClass("show");
  });
  $(optionsDropDown).click(function() {
    $("#options-catagories").toggleClass("show", function() {
      if (sports.classList.contains('show')) {
        $('#sports-catagories').css('display', 'none');
      };
    });
  });
  // function for search bar
  $('#search-bar').click(function() {
    $('#search-list').toggleClass('show');
  });

  // function for mobile-device slide toggle
    $(".menu-icon").click(function() {  
      $(".collapsed").slideToggle("slow");
    });
  });


  

  /*
  // script.js

$(document).ready(function () {
  let activeDropdown = null;

  $('.dropdown-button').on('click', function () {
    const dropdown = $(this).closest('.dropdown');

    // If the clicked dropdown is already active, close it
    if (activeDropdown === dropdown[0]) {
      dropdown.toggleClass('active');
      activeDropdown = null;
    } else {
      // Close the active dropdown (if any)
      if (activeDropdown) {
        $(activeDropdown).removeClass('active');
      }

      // Open the clicked dropdown
      dropdown.addClass('active');
      activeDropdown = dropdown[0];
    }
  });

  // Close dropdowns when clicking outside
  $(document).on('click', function (event) {
    if (activeDropdown && !$(activeDropdown).find(event.target).length) {
      $(activeDropdown).removeClass('active');
      activeDropdown = null;
    }
  });
});
*/




  let activeDropdown = null;

  function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
  
    // If the clicked dropdown is already active, close it
    if (activeDropdown === dropdown) {
      dropdown.classList.toggle('show');
      activeDropdown = null;
    } else {
      // Close the active dropdown (if any)
      if (activeDropdown) {
        activeDropdown.classList.remove('show');
      }
  
      // Open the clicked dropdown
      dropdown.classList.add('show');
      activeDropdown = dropdown;
    }
  }
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function (event) {
    if (activeDropdown && !activeDropdown.contains(event.target)) {
      activeDropdown.classList.remove('show');
      activeDropdown = null;
    }
  });

