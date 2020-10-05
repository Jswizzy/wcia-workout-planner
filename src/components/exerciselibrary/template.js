import Exercise from "../exercise/exercise.js";

export default {
  render(exercises) {
    return `${this.css()}
            ${this.html(exercises)}`;
  },
  html(exercises) {
    let mkup = exercises.reduce(
      (str, exercise) =>
        (str += `<wkout-exercise
                  class="${exercise.type}"
                  ${Exercise.toAttributeString(exercise)}
               >
               </wkout-exercise>`),
      ""
    );
    return `<h1>Execises</h1>
            <div id="container">
            ${mkup}
            </div>`;
  },
  css() {
    return `<style>
              :host {
                display: flex;
                flex-direction: column;
              }

              #container {
                overflow-y: scroll;
                height: calc(100% - 60px);
              }
            </style>`;
  },
};
