const detect = document.getElementById('detect')
const searchLocation = document.getElementById('search-location')
const locationDropdown = document.getElementById('location-dropdown')

// popup shows up while clicking
const image = document.getElementById('dwn-arw');
const dropdownContent = document.getElementById('location-dropdown');

image.onclick = function() {
  if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
    dropdownContent.style.display = "block";
  } else {
    dropdownContent.style.display = "none";
  }
};

// Hide dropdown if clicked outside
document.addEventListener('click', function(event) {
  if (!image.contains(event.target) && !dropdownContent.contains(event.target)) {
    dropdownContent.style.display = "none";
  }
});



// detect location manually by typing
const inputField = document.getElementById('location-input');
const inputFieldTwo = document.getElementById('inp-1');
const autocompleteResults = document.getElementById('autocomplete-results');

// Function to fetch data from OpenStreetMap Nominatim API
function fetchLocationSuggestions(query) {
  fetch(`https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1&limit=5`)
    .then(response => response.json())
    .then(data => {
      displaySuggestions(data);
    })
    .catch(error => console.error('Error fetching location data:', error));
}

// Function to display suggestions in the dropdown
function displaySuggestions(suggestions) {
  autocompleteResults.innerHTML = '';

  suggestions.forEach(suggestion => {
    const suggestionDiv = document.createElement('div');
    suggestionDiv.textContent = suggestion.display_name;
    suggestionDiv.addEventListener('click', () => {
      inputField.value = suggestion.display_name;
      inputFieldTwo.value = suggestion.display_name;
      autocompleteResults.innerHTML = ''; // Clear suggestions after selection
    });

    autocompleteResults.appendChild(suggestionDiv);
    console.log(suggestions)
  });
}

// Event listener for user input
inputField.addEventListener('input', () => {
  const query = inputField.value.trim();
  
  if (query.length > 2) { // Fetch suggestions only if the input is longer than 2 characters
    fetchLocationSuggestions(query);
  } else {
    autocompleteResults.innerHTML = ''; // Clear suggestions if input is less than 2 characters
  }
});
// end of manual location

// detect location automatically when clicked
function detectLocation(){
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
} else {
    console.log("Geolocation is not supported by this browser.");
}
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    // Example latitude and longitude
    // let latitude = 11.6538994;
    // let longitude = 78.1629273;

    // Nominatim API URL
    let apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

// Fetch request to get location details 
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
    let locationName = data.display_name;
    console.log("Location Name: " + locationName);
  })
  .catch(error => console.error('Error with fetch request: ' + error));
  document.getElementById('inp-title').innerHTML = data.display_name
    // Displaying position on webpage for testing
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
    }
}

