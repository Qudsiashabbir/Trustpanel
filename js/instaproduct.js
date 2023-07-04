var countries = ["Pakistan", "UK", "USA", "Canada", "Australia"];

var dropdownMenu = document.getElementById("countryDropdown");

for (var i = 0; i < countries.length; i++) {
  var country = countries[i];
  var dropdownItem = document.createElement("a");
  dropdownItem.classList.add("dropdown-item");
  dropdownItem.href = "https://example.com/" + country.toLowerCase();
  dropdownItem.textContent = "Views from " + country;
  dropdownMenu.appendChild(dropdownItem);
}