function darkMode() {
  if (document.body.style.backgroundColor == "black") {
      document.body.style.backgroundColor = "white";
      // document.body.style.color = "black";
      document.getElementById("hero").style.background = "linear-gradient(0deg, var(--primary-color) 0%, var(--bg-color) 60%)";
      document.body.style.color = "black";
      document.body.style.dev.color = "black";
  } else {
      document.body.style.backgroundColor = "black";
      document.getElementById("hero").style.background = "linear-gradient(0deg, #261b2e 0%, #868bb9 60%)";
      ocument.getElementByTagName("a")[0-10].style.background = "white";
      document.body.style.color = "white";
      document.body.style.dev.color = "white";
  }
  console.log(document.body.style.backgroundColor);   // ctrl + j and you can see which mode you're in
}