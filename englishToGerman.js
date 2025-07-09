(function translateAndLocalize() {
  const engGerDict = {
    Active: "Aktiv",
    Subscription: "Abbo",
    Subscriptions: "Abbos",
  };

  // 1. Replace English text with German
  function replaceTranslations() {
    const elements = document.querySelectorAll("body, body *");
    elements.forEach((el) => {
      if (el.children.length === 0 && el.textContent) {
        // console.log('el.textContent.trim()', el.textContent.trim().split(' '));
        el.textContent = el.textContent
          .trim()
          .split(" ")
          .map((word) => engGerDict[word] || word)
          .join(" ");
      }
      if (el.children.length === 0 && el.textContent.trim() in engGerDict) {
        console.log('el.textContent', el.textContent);
        el.textContent = engGerDict[el.textContent.trim()];
        console.log('el.textContent', el.textContent);
      }
    });
  }

  // 2. Localize Dates and Times
  // function localizeDates() {
  // }

  // 3. Run both
  replaceTranslations();
  // localizeDates();
})();