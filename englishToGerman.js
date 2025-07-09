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
            repWord = /[A-Z]/.test(word[0])
              ? engGerDict[word.toUpperCase()].charAt(0).toUpperCase() +
                engGerDict[word.toUpperCase()].slice(1)
              : engGerDict[word.toUpperCase()];
            el.textContent = el.textContent.replace(word, repWord);
          }
        });
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
      if (el.textContent && el.children.length > 0) {
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

            const newNode = document.createTextNode(childText);
            childTextNodes.push({ 'ct': childText, 'nt': newText, 'index': index });
          }
        })
        if (childTextNodes.length > 0) {
          const newNode = document.createTextNode("Water");
          console.log('childTextNodes', childTextNodes)
        }
        // console.log('childTextNodes', childTextNodes)
      }
    });
  }

  cLo();
})();
