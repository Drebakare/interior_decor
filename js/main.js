// Get the modal
const modals = (imgs) => {
  var modal = document.getElementById("modal");

  var expandImg = document.getElementById("expandedImg");

  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  modal.style.display = "block";
  expandImg.parentElement.style.display = "block";
  imgText.innerHTML = imgs.alt;
};
