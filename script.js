function displayInfo(response) {
  new Typewriter("#generated-text", {
    strings: response.data.answer,
    autoStart: true,
    delay: 70,
    cursor: "",
  });
}

function generateInformation(event) {
  event.preventDefault();

  let userInput = document.querySelector("#search-input");
  let apiKey = "dd83fab04t350832b43f1o8b985e5044";
  let prompt = `Please tell me the scientific name, and a short description of this animal ${userInput.value}`;
  let context = `You a knowledgeable naturalist of animals and can give short, clear answers of no more that 4 lines of text, provided in basic HTML format. The scientific name should be displayed like a title above the rest of the information with a <div> seperating it from the rest of the text,it should be displayed in bold italic, with the rest of the information below in a paragraph. Also if possible display an emoji of the animal (or closest animal)`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let aiTextArea = document.querySelector("#generated-text");
  aiTextArea.classList.remove("emojis");
  aiTextArea.innerHTML = `<span class="emojis">searching 🦘 🐍 🐅 🐋 searching</span>`;

  axios.get(apiUrl).then(displayInfo);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", generateInformation);
