// Change text content and style
document.getElementById("change-button").addEventListener("click", function () {
  const intro = document.getElementById("intro-text");
  intro.textContent = "The text has been updated!";
  intro.style.color = "blue";
  intro.style.fontWeight = "bold";
});

// Add a new list item
document.getElementById("add-button").addEventListener("click", function () {
  const ul = document.getElementById("item-list");
  const li = document.createElement("li");
  li.textContent = "New Item";
  ul.appendChild(li);
});

// Remove the last list item
document.getElementById("remove-button").addEventListener("click", function () {
  const ul = document.getElementById("item-list");
  if (ul.lastElementChild) {
    ul.removeChild(ul.lastElementChild);
  }
});
