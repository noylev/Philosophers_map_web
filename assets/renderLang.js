let dropdown = document.getElementById('philoLang');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'All Languages';
defaultOption.value = "All"

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

let langs = [
    {
      "Language": "Ancient Greek"
    },
    {
      "Language": "Arabic"
    },
    {
      "Language": "Armenian"
    },
    {
      "Language": "Bulgarian"
    },
    {
      "Language": "Canadian English"
    },
    {
      "Language": "Chinese"
    },
    {
      "Language": "Danish"
    },
    {
      "Language": "Dutch"
    },
    {
      "Language": "English"
    },
    {
      "Language": "Esperanto"
    },
    {
      "Language": "French"
    },
    {
      "Language": "German"
    },
    {
      "Language": "Greek"
    },
    {
      "Language": "Gujarati"
    },
    {
      "Language": "Hebrew"
    },
    {
      "Language": "Hindi"
    },
    {
      "Language": "Hungarian"
    },
    {
      "Language": "Icelandic"
    },
    {
      "Language": "Indonesian"
    },
    {
      "Language": "Italian"
    },
    {
      "Language": "Japanese"
    },
    {
      "Language": "Korean"
    },
    {
      "Language": "Latin"
    },
    {
      "Language": "Magadhi Prakrit"
    },
    {
      "Language": "Marathi"
    },
    {
      "Language": "Medieval Greek"
    },
    {
      "Language": "Middle English"
    },
    {
      "Language": "Middle French"
    },
    {
      "Language": "Middle High German"
    },
    {
      "Language": "Modern Greek"
    },
    {
      "Language": "Mongolian"
    },
    {
      "Language": "Norwegian"
    },
    {
      "Language": "Persian"
    },
    {
      "Language": "Polish"
    },
    {
      "Language": "Portuguese"
    },
    {
      "Language": "Romanian"
    },
    {
      "Language": "Russian"
    },
    {
      "Language": "Serbian"
    },
    {
      "Language": "Slovene"
    },
    {
      "Language": "Spanish"
    },
    {
      "Language": "Swedish"
    },
    {
      "Language": "Turkish"
    },
    {
      "Language": "Ukrainian"
    },
    {
      "Language": "Urdu"
    }
  ];
let option;

for (let i = 0; i < langs.length; i++) {
    option = document.createElement('option');
    option.text = langs[i].Language;
    option.value = langs[i].Language;
    dropdown.add(option);
}