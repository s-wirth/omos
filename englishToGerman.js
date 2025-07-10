(function translateAndLocalize() {
  const engGerWordsDict = {
    ACTIVE: "aktiv",
    PAUSED: "pausiert",
    SKIPPED: "übersprungen",
    NEXT: "nächste",
    SELECTED: "ausgewählte",
    FOR: "für",
    STARTED: "angefangen",
    ON: "am",
    UNTIL: "bis",
    NEW: "neues",
    // nouns
    DELIVERY: "Lieferung",
    SUBSCRIPTION: "Abbo",
    SUBSCRIPTIONS: "Abbos",
    FLAVOR: "Sorte",
    FLAVORS: "Sorten",
    WEEK: "Woche",
    WEEKS: "Wochen",
    MONDAY: "Montag",
    TUESDAY: "Dienstag",
    WEDNESDAY: "Mittwoch",
    THURSDAY: "Donnerstag",
    FRIDAY: "Freitag",
    SATURDAY: "Samstag",
    SUNDAY: "Sonntag",
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
              if (engGerWordsDict[word.toUpperCase()]) {
                repWord = /[A-Z]/.test(word[0])
                  ? engGerWordsDict[word.toUpperCase()].charAt(0).toUpperCase() +
                    engGerWordsDict[word.toUpperCase()].slice(1)
                  : engGerWordsDict[word.toUpperCase()];
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
  function localizeEnglishDates() {
    const elements = document.querySelectorAll('body, body *');
    const regex = /\b([A-Za-z]{3}) (\d{1,2}), (\d{4})\b/g;

    const months = {
      Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
      Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
    };

    elements.forEach(el => {
      if (el.children.length === 0 && regex.test(el.textContent)) {
        el.textContent = el.textContent.replace(regex, (match, mon, day, year) => {
          const date = new Date(year, months[mon], day);
          if (!isNaN(date)) {
            return new Intl.DateTimeFormat('de-DE', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            }).format(date);
          }
          return match;
        });
      }
    });
  }

  replaceTranslations();
  localizeEnglishDates();
})();

/* Function to test individual bits of code */

(function testStuff() {
  const elements = document.querySelectorAll("body, body *");
  const engGerWordsDict = {
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
