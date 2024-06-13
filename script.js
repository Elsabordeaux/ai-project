function generateInformation(event) {
  event.preventDefault();

  new Typewriter("#generated-text", {
    strings: "Hello",
    autoStart: true,
    delay: 50,
  });
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", generateInformation);
