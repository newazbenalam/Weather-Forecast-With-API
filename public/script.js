function darkMode() {
  if (document.body.style.backgroundColor == "black") {
      document.body.style.backgroundColor = "white";
      // document.body.style.color = "black";
      document.body.style.color = "white";
      document.body.style.dev.color = "white";
  } else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.body.style.dev.color = "white";
  }
  console.log(document.body.style.backgroundColor);   // ctrl + j and you can see which mode you're in
}