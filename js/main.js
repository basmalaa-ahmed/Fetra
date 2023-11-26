
function show(){
  document.getElementById('sidebar').classList.toggle('active')
  }

  function toggleNavbar() {
      var sidebar = document.getElementById("navbar");
      if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
      } else {
        sidebar.style.width = "250px";

      }

  }
  // add newInput
  function toggleVisibility() {
      let element = document.getElementById("newInput");
      if (element.classList.contains("d-none")) {
        element.classList.remove("d-none");
        element.classList.add("d-block");
      }
       else {
        element.classList.remove("d-block");
        element.classList.add("d-none");
      }
    }
    function toggleInVisibility() {
      let element = document.getElementById("newInput");
      if (element.classList.contains("d-block")) {
        element.classList.remove("d-block");
        element.classList.add("d-none");
      }
       else {
        element.classList.remove("d-none");
        element.classList.add("d-block");
      }
    }
  //   sideBar
    function toggleSidebar() {
      let sidebar = document.querySelector('.sideBar');
      let content = document.querySelector('.content');
      let meals =document.getElementById('meals');

      if (sidebar.style.right === '-256px') {
        sidebar.style.right = '0';
        content.style.marginRight = '256px';
        meals.style.marginRight='256px'
      } else {
        sidebar.style.right = '-256px';
        content.style.marginRight = '0';
        meals.style.marginRight='0'
      }
    }
  //   counter
  let counters = {};

  function updateCounter(cardId) {
    document.getElementById(cardId).getElementsByClassName("counter")[0].innerText = counters[cardId];
  }

  function increment(cardId) {
    if (!counters[cardId]) {
      counters[cardId] = 0;
    }
    counters[cardId]++;
    updateCounter(cardId);
  }

  function decrement(cardId) {
    if (counters[cardId] && counters[cardId] > 0) {
      counters[cardId]--;
      updateCounter(cardId);
    }
  }


//Dropdown
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
  // =-=-=-=-=-=-==-=-=-==========Dark Mood===============


  document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const toggleBtn = document.getElementById('toggleBtn');

    if (localStorage.getItem('dark') === 'enabled') {
        enableDarkMode();
    }

    toggleBtn.addEventListener('click', function () {
        if (body.classList.contains('dark')) {
            // Disable dark mode
            disableDarkMode();

        } else {
            // Enable dark mode
            enableDarkMode();


        }
    });

    function enableDarkMode() {
        body.classList.add('dark');
        localStorage.setItem('darkMode', 'enabled');
    }

    function disableDarkMode() {
        body.classList.remove('dark');
        localStorage.setItem('darkMode', null);
    }
});
var activeButton  = document.getElementById("activeButton");
var activeButtonWomen  = document.getElementById("activeButtonWomen");



activeButton.addEventListener("click", function () {
  activeButton.classList.add("activeButton");
  activeButtonWomen.classList.remove("activeButton");

})

activeButtonWomen.addEventListener("click", function () {
  activeButton.classList.remove("activeButton");

  activeButtonWomen.classList.add("activeButton");

})

var s = document.getElementById("searchSide");

function changeWidth() {
s.style.width ="100%"


}

let x = document.getElementById("closeForm");

document.getElementById("myButton").onclick = function() {
  alert("Button clicked!");
};



function toggleDropdown() {
  var dropdown = document.getElementById("notificationDropdown");
  dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
}