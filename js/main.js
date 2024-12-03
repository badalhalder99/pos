/* Full Screen */
const fullscreenButton = document.getElementById('dbdash-header__full');
const htmlElement = document.documentElement;

if (fullscreenButton) {
    fullscreenButton.addEventListener('click', () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            htmlElement.requestFullscreen();
        }
    });
}

/* Password Field */
document.addEventListener('DOMContentLoaded', function() {
    const passwordField = document.getElementById('password-field');
    const toggleIcon = document.getElementById('toggle-icon');
    const togglePassword = () => {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            toggleIcon.classList.remove('fa-eye');
            toggleIcon.classList.add('fa-eye-slash');
        } else {
            passwordField.type = 'password';
            toggleIcon.classList.remove('fa-eye-slash');
            toggleIcon.classList.add('fa-eye');
        }
    };

    if (toggleIcon) {
        toggleIcon.addEventListener('click', togglePassword);
    }
});


// Crancy Options
const cs_button = document.querySelectorAll("#crancy__sicon");
const cs_action = document.querySelectorAll(".dbdash-smenu, .dbdash-header, .dbdash-adashboard");
const dashboard_side = document.querySelector(".dashboard-options__side");
const dashboard_default = document.querySelector(".dashboard-options__default");
const dashboard_horizontal = document.querySelector(".dashboard-options__horizontal");
const crancy_body_area = document.querySelector(".dbdash-body-area");

// Function to toggle classes and update localStorage
function toggleClassesAndLocalStorage() {
    cs_action.forEach((el) => {
        el.classList.toggle("dbdash-close");
    });
    localStorage.setItem("iscicon", cs_action[0].classList.contains("dbdash-close"));
    crancy_body_area?.classList.remove("dbdash-body-area-hractive"); // Added optional chaining to handle null crancy_body_area
}

// Function to toggle horizontal icon shape class
function toggleHorizontalClass() {
    crancy_body_area?.classList.toggle("dbdash-body-area-hractive"); // Added optional chaining to handle null crancy_body_area
}

// Add event listener for #crancy__sicon click if cs_button is found
cs_button?.forEach(button => {
    button.addEventListener("click", toggleClassesAndLocalStorage);
});

// Add event listener for .dashboard-options__side click if dashboard_side is found
dashboard_side?.addEventListener("click", () => {
    toggleClassesAndLocalStorage();
});

// Add event listener for .dashboard-options__default click if dashboard_default is found
dashboard_default?.addEventListener("click", () => {
    cs_action.forEach((el) => {
      el.classList.remove("dbdash-close");
    });
    localStorage.setItem("iscicon", false);
    crancy_body_area?.classList.remove("dbdash-body-area-hractive"); // Added optional chaining to handle null crancy_body_area
});

// Add event listener for .dashboard-options__horizontal click if dashboard_horizontal is found
dashboard_horizontal?.addEventListener("click", () => {
    toggleHorizontalClass();
});

// Check localStorage on page load
if (localStorage.getItem("iscicon") === "true") {
    cs_action.forEach((el) => {
      el.classList.add("dbdash-close");
    });
}


jQuery(document).ready(function($) {

    $('#dbdash-header__nav,.dbdash-sidebarmenu__close').on( "click", function(){
        $('.dbdash-sidebarmenu').toggleClass('active');
    });

    $('.dbdash-filters-button').on( "click", function(){
        $('.dbdash-table-filter-tables').toggleClass('active');
    });
    /*====================================
        Select2 JS
    ======================================*/
    $('select').niceSelect();


});


// Get all elements with the class "dbdash-toggle"
const toggleElements = document.querySelectorAll('.dbdash-toggle');

// Add click event listeners to each ".dbdash-toggle" element
toggleElements.forEach((toggleElement) => {
  toggleElement.addEventListener('click', (event) => {
    // Find the corresponding ".dbdash-toggle__dropdown" element
    const dropdownElement = toggleElement.querySelector('.dbdash-toggle__dropdown');

    // Toggle the "active" class on the clicked dropdownElement
    dropdownElement.classList.toggle('active');

    // Close other open dropdowns
    toggleElements.forEach((otherToggleElement) => {
      if (otherToggleElement !== toggleElement) {
        const otherDropdownElement = otherToggleElement.querySelector('.dbdash-toggle__dropdown');
        otherDropdownElement.classList.remove('active');
      }
    });
  });
});



document.addEventListener("DOMContentLoaded", function() {
    const crancyDropdowns = document.querySelectorAll(".crancy__dropdown");

    crancyDropdowns.forEach((crancyDropdown, index) => {
        const observer = new MutationObserver(function(mutationsList) {
            const crancyDropdownHasShowClass = crancyDropdown.classList.contains("show");

            document.querySelectorAll(".admin-menu").forEach((adminMenuOne) => {
                adminMenuOne.classList.toggle("no-overflow", crancyDropdownHasShowClass);
            });
        });

        observer.observe(crancyDropdown, { attributes: true });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const optionsMenu = document.querySelector('.dashboard-options');

    // Function to toggle the 'active' class on the options menu
    function toggleOptionsMenu() {
        optionsMenu.classList.toggle('active');
    }

    // Event listener for clicking the settings link or options head span
    document.addEventListener('click', function(event) {
        const target = event.target;
        const isSettingsLinkClicked = target.closest('.dashboard-settings a');
        const isOptionsHeadSpanClicked = target.closest('.dashboard-options__head span');

        // Toggle the 'active' class on the options menu if settings link or options head span is clicked
        if (isSettingsLinkClicked || isOptionsHeadSpanClicked) {
            event.preventDefault(); // Prevent the default behavior of the link
            toggleOptionsMenu(); // Toggle the 'active' class on the options menu
        } else {
            // Close the options menu if clicked outside of it
            const isOptionsMenuClicked = target.closest('.dashboard-options');
            if (!isOptionsMenuClicked) {
                optionsMenu.classList.remove('active');
            }
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    var fullscreenBtn = document.querySelector('.dbdash-header__single--zoom');

    fullscreenBtn.addEventListener('click', function () {
        var dashboard = document.querySelector('body');

        if (!document.fullscreenElement) {
            if (dashboard.requestFullscreen) {
                dashboard.requestFullscreen();
            } else if (dashboard.webkitRequestFullscreen) { /* Safari */
                dashboard.webkitRequestFullscreen();
            } else if (dashboard.msRequestFullscreen) { /* IE11 */
                dashboard.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { /* Safari */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE11 */
                document.msExitFullscreen();
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with the class "dbdash-table__action"
    const actionElements = document.querySelectorAll('.dbdash-table__action');

    // Loop through each "dbdash-table__action" element
    actionElements.forEach(actionElement => {
        // Add a click event listener to each "dbdash-table__action" element
        actionElement.addEventListener('click', () => {
            // Toggle the 'active' class on the ".customer-action-info__popup" element within the same parent
            const popupElement = actionElement.querySelector('.customer-action-info__popup');

            // Check if the popup is active, then remove the class, else add the class
            if (popupElement.classList.contains('active')) {
                popupElement.classList.remove('active');
            } else {
                // Remove 'active' class from all ".customer-action-info__popup" elements
                document.querySelectorAll('.customer-action-info__popup').forEach(popup => {
                    popup.classList.remove('active');
                });
                popupElement.classList.add('active');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll('.input-number');

    inputs.forEach(function(input) {
        const plusBtn = input.closest('.dbdash-input-group').querySelector('.plus button');
        const minusBtn = input.closest('.dbdash-input-group').querySelector('.minus button');

        plusBtn.addEventListener('click', function() {
            const currentValue = parseInt(input.value);
            const maxValue = parseInt(input.getAttribute('data-max'));
            if (currentValue < maxValue) {
                input.value = currentValue + 1;
            }
        });

        minusBtn.addEventListener('click', function() {
            const currentValue = parseInt(input.value);
            const minValue = parseInt(input.getAttribute('data-min'));
            if (currentValue > minValue) {
                input.value = currentValue - 1;
            }
        });
    });
});

function toggleDropdown(event) {
  event.preventDefault();

  // Toggle the active class on the dropdown menu
  const dropdownMenu = event.currentTarget.nextElementSibling;
  dropdownMenu.classList.toggle("active");

  // Toggle the rotation on the arrow icon
  const arrow = event.currentTarget.querySelector(".dropdown-arrow");
  arrow.classList.toggle("rotate");
}


// this code for pos screen::

const checkbox = document.getElementById('pd1');
const singleCard = document.getElementById('single-card');

singleCard.addEventListener('click', function () {
  if (checkbox.checked) {
    checkbox.style.visibility = "visible"
    checkbox.style.opacity = "1"
  } else if(!checkbox.checked) {
    checkbox.style.visibility = "hidden"
    checkbox.style.opacity = "0"
  } else {
    console.log('Nothing to do')
  }
})


// My name is Badal Halder::

const toggleBtn = document.getElementById("arrowBtnHideShow");
const col3 = document.getElementById("col-3");
const col5 = document.getElementById("col-5");

// Initial state setup
col3.classList.add("hidden");
col5.classList.replace("col-md-5", "col-md-8");

toggleBtn.addEventListener("click", () => {
  if (col3.classList.contains("hidden")) {
    // Show col-md-3 and change col-md-8 to col-md-5
    col3.classList.remove("hidden");
    col5.classList.replace("col-md-8", "col-md-5");
  } else {
    // Hide col-md-3 and change col-md-5 to col-md-8
    col3.classList.add("hidden");
    col5.classList.replace("col-md-5", "col-md-8");
  }
});

const cartBtn = document.getElementById("cart");
const removeBtn = document.getElementById("removeBtn");
const cartWrap = document.querySelector(".cart-wrap");

cartBtn.addEventListener("click", () => {
  if (cartWrap.classList.contains("open")) {
    // Close the cart
    cartWrap.classList.remove("open");
    setTimeout(() => cartWrap.classList.add("hidden"), 300); // Wait for transition to finish
  } else {
    // Open the cart
    cartWrap.classList.remove("hidden");
    setTimeout(() => cartWrap.classList.add("open"), 10); // Delay to ensure the transition applies
  }
});

removeBtn.addEventListener("click", () => {
  cartWrap.classList.remove("open");
  setTimeout(() => cartWrap.classList.add("hidden"), 300); // Wait for transition to finish
});


