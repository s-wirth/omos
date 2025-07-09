(function translateAndLocalize() {
  const engGerDict = {
    ACTIVE: "aktiv",
    PAUSED: "pausiert",
    NEXT: "nächste",
    DELIVERY: "Lieferung",
    SUBSCRIPTION: "Abbo",
    SUBSCRIPTIONS: "Abbos",
    SELECTED: "ausgewählte",
    FLAVOR: "Sorte",
    FLAVORS: "Sorten",
    WEEK: "Woche",
    WEEKS: "Wochen",
    FOR: "für",
  };
  function replaceTranslations() {
    const elements = document.querySelectorAll("body, body *");
    elements.forEach((el) => {
      if (el.children.length === 0 && el.textContent) {
        oldWords = el.textContent.trim().split(/[^a-z]/gi);
        oldWords.forEach((word) => {
          if (engGerDict[word.toUpperCase()]) {
            repWord = (/[A-Z]/.test(word[0])) ? engGerDict[word.toUpperCase()].charAt(0).toUpperCase() + engGerDict[word.toUpperCase()].slice(1) : engGerDict[word.toUpperCase()];
            el.textContent = el.textContent.replace(word, repWord);
          }
        })
      }
    });
  }
  replaceTranslations();
})();


/* Function to test individual bits of code */

(
  function testStuff(){
    const elements = document.querySelectorAll("body, body *");

    function cLo(){
      elements.forEach((el) => {
        if (el.children.length === 0 && el.textContent) {
          oldWords = el.textContent.trim().split(/[^a-z]/gi);
          oldWords.forEach((word) => {
            el.textContent = el.textContent.replace(word, word.toUpperCase());
          })
          console.log('el.textContent.trim()', el.textContent.trim());
          console.log('el.textContent.trim()', el.textContent.trim().split(/[^a-z]/gi));
        }
      });
    }

    cLo();
  }
)();