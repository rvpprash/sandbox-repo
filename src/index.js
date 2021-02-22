import "./styles.css";

window.tabEvent = function (e, selector) {
  var $tabElement1, $tabElement2, $tabElement3;
  debugger;
  $tabElement1 = document.getElementById("tab1");
  $tabElement2 = document.getElementById("tab2");
  $tabElement3 = document.getElementById("tab3");

  if (selector === "tab1") {
    $tabElement1.classList.add("selected-tab");
    $tabElement2.classList.add("deselected-tab");
    $tabElement3.classList.add("deselected-tab");

    $tabElement1.classList.remove("deselected-tab");
    $tabElement2.classList.remove("selected-tab");
    $tabElement3.classList.remove("selected-tab");
  } else if (selector === "tab2") {
    $tabElement2.classList.add("selected-tab");
    $tabElement1.classList.add("deselected-tab");
    $tabElement3.classList.add("deselected-tab");

    $tabElement2.classList.remove("deselected-tab");
    $tabElement1.classList.remove("selected-tab");
    $tabElement3.classList.remove("selected-tab");
  } else {
    $tabElement3.classList.add("selected-tab");
    $tabElement2.classList.add("deselected-tab");
    $tabElement1.classList.add("deselected-tab");

    $tabElement3.classList.remove("deselected-tab");
    $tabElement2.classList.remove("selected-tab");
    $tabElement1.classList.remove("selected-tab");
  }
};
