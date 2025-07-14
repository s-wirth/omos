# Omos Coding Casestudy

This is my solution for the Omos coding casestudy

## Usage

Copy and paste the entire body of englishToGerman.js into the console of the test site


## Functions

### translateAndLocalize() <-- main function

"global" scope contains the dictionary

### replaceTranslations() <-- translation function

1. searches for all text nodes
2. splits text into words
3. checks if a word is in the dictionary
4. replaces the word with its translation
5. replaces the old text with the new text in child nodes

### localizeEnglishDates() <-- localization function

1. init regex to match against dates with English formatting
2. searches for text matching regex
3. creates new date object with German formatting
4. replaces the old date with the new date

## Used Tools

1. Visual Studio Code
2. Windsurf AI Plugin for VS Code
3. GitHub