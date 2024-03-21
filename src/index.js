function showPoem(response) {
  new Typewriter("#generated-poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#prompt");
  let poemElement = document.querySelector("#generated-poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">Generating a poem for you</div>`;

  let apiKey = "dab4o47cf43b881e15a2t0c248003831";
  let prompt = `Write a poem about ${promptInput.value}`;
  let context =
    "You are a poet and can write poems about anything. Keep them short and be polite. They should have always have 4 lines. Give them a title and return them in a basic HTML structure. For example: <h3>title</h3><p>first line<br />second line<br />third line</p> and so on";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
