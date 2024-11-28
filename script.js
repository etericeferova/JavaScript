document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("username");

  inputField.addEventListener("input", (event) => {
    const currentValue = event.target.value;
    const filteredChars = [];

    for (let char of currentValue) {
      if (!char.match(/\d/)) {
        filteredChars.push(char);
      }
    }
    event.target.value = filteredChars.join("");
  });
});
