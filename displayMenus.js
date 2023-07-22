// Function to set HTML content in the specified div elements with their respective IDs
function displayContentsByIds(contentsMap) {
  for (const id in contentsMap) {
    const targetDiv = document.getElementById(id);

    if (targetDiv) {
      targetDiv.innerHTML = contentsMap[id];
    } else {
      console.error(`Element with ID "${id}" not found.`);
    }
  }
}

// Defined menus
const contentsMap = {
  'projects-menu': '<div class="submenu"><a href="/projects/">Projects</a> / <a href="/themes/">Themes</a> / <a href="/code/">Code</a> / <a href="/pages/">Pages</a> / <a href="/sites/">Sites</a> / <a href="/websites/">Websites</a></div>',
  'themes-menu': '<div class="pills"><a href="/wordpress-themes/" class="pills-link">WordPress Themes</a> <a href="/ghost-themes/" class="pills-link">Ghost Themes</a> <a href="/jekyll-themes/" class="pills-link">Jekyll Themes</a> <a href="/bootstrap-themes/" class="pills-link">Bootstrap Themes</a> <a href="/starter-themes/" class="pills-link">Starters</a></div>',
};

// Display the contents based on the provided map
displayContentsByIds(contentsMap);
