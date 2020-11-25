// <⚠️ DONT DELETE THIS ⚠️>

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const title = document.querySelector("#title");

const superEventHandler = {
  handleResize: function(event) {
    title.style.color = colors[0];
    title.innerHTML = "You just resized!"
  },
  handleMouseOver: function(event) {
    title.style.color = colors[1];
    title.innerHTML = "The mouse is here!"
  },
  handleMouseOut: function(event) {
    title.style.color = colors[2];
    title.innerHTML = "The mouse is gone!"
  },
  handleClick: function(event) {
    title.style.color = colors[3];
    title.innerHTML = "That was a right click!"
  }
};

window.addEventListener('resize', superEventHandler.handleResize); 
title.addEventListener('contextmenu', superEventHandler.handleClick)
title.addEventListener('mouseover', superEventHandler.handleMouseOver)
title.addEventListener('mouseout', superEventHandler.handleMouseOut)