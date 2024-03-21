function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#generated-poem", {
    strings: "this is a test poem",
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
