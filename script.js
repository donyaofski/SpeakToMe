const words = {
  en: "Cat",
  de: "Katze",
  fa: "گربه"
};

function changeLanguage(lang) {
  document.getElementById("wordLabel").innerText = words[lang];
}
