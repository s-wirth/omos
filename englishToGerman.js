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
      if (el.textContent) {
        childTextNodes = [];
        el.childNodes.forEach((child, index) => {
          if (child.nodeType === Node.TEXT_NODE) {
            childText = child.textContent;
            newText = child.textContent;
            oldWords = childText.trim().split(/[^a-z]/gi);
            oldWords.forEach((word) => {
              if (engGerDict[word.toUpperCase()]) {
                repWord = /[A-Z]/.test(word[0])
                  ? engGerDict[word.toUpperCase()].charAt(0).toUpperCase() +
                    engGerDict[word.toUpperCase()].slice(1)
                  : engGerDict[word.toUpperCase()];
                newText = newText.replace(word, repWord);
              }
            });
            childTextNodes.push({ 'ct': childText, 'nt': newText, 'index': index });
            }
          if (childTextNodes.length > 0) {
            childTextNodes.forEach((node) => {
              el.childNodes[node.index].textContent = node.nt
            })
          }
        })
      }
    });
  }
  replaceTranslations();
})();

/* Function to test individual bits of code */

(function testStuff() {
  const elements = document.querySelectorAll("body, body *");
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

  function cLo() {
    elements.forEach((el) => {
      console.log('el', el)
    });
  }

  cLo();
})();
