let dropdownNation = document.getElementById('philoNation');
dropdownNation.length = 0;

let defaultOptionNation = document.createElement('option');
defaultOptionNation.text = 'All Nations';
defaultOptionNation.value = "All"

dropdownNation.add(defaultOptionNation);
dropdownNation.selectedIndex = 0;

let nations = [
    {
      "Nationality": "Abbasid Caliphate"
    },
    {
      "Nationality": "Afghanistan"
    },
    {
      "Nationality": "Ancient Rome"
    },
    {
      "Nationality": "Argentina"
    },
    {
      "Nationality": "Armenia"
    },
    {
      "Nationality": "Australia"
    },
    {
      "Nationality": "Austria"
    },
    {
      "Nationality": "Austria-Hungary"
    },
    {
      "Nationality": "Azerbaijan"
    },
    {
      "Nationality": "Belarus"
    },
    {
      "Nationality": "Belgium"
    },
    {
      "Nationality": "Brazil"
    },
    {
      "Nationality": "British Raj"
    },
    {
      "Nationality": "Bulgaria"
    },
    {
      "Nationality": "Byzantine Empire"
    },
    {
      "Nationality": "Cameroon"
    },
    {
      "Nationality": "Canada"
    },
    {
      "Nationality": "Chile"
    },
    {
      "Nationality": "Classical Athens"
    },
    {
      "Nationality": "Croatia"
    },
    {
      "Nationality": "Czech Republic"
    },
    {
      "Nationality": "Denmark"
    },
    {
      "Nationality": "Dutch Republic"
    },
    {
      "Nationality": "Eastern Han Dynasty"
    },
    {
      "Nationality": "Egypt"
    },
    {
      "Nationality": "Finland"
    },
    {
      "Nationality": "France"
    },
    {
      "Nationality": "Frankfurt"
    },
    {
      "Nationality": "French Third Republic"
    },
    {
      "Nationality": "German Empire"
    },
    {
      "Nationality": "Germany"
    },
    {
      "Nationality": "Ghaznavid Empire"
    },
    {
      "Nationality": "Grand Duchy of Tuscany"
    },
    {
      "Nationality": "Great Seljuq Empire"
    },
    {
      "Nationality": "Greece"
    },
    {
      "Nationality": "Holy Roman Empire"
    },
    {
      "Nationality": "Hungary"
    },
    {
      "Nationality": "Iceland"
    },
    {
      "Nationality": "India"
    },
    {
      "Nationality": "Iran"
    },
    {
      "Nationality": "Iraq"
    },
    {
      "Nationality": "Ireland"
    },
    {
      "Nationality": "Israel"
    },
    {
      "Nationality": "Italy"
    },
    {
      "Nationality": "Japan"
    },
    {
      "Nationality": "Joseon"
    },
    {
      "Nationality": "Kapilavastu"
    },
    {
      "Nationality": "Khwarazmian dynasty"
    },
    {
      "Nationality": "Kingdom of England"
    },
    {
      "Nationality": "Kingdom of France"
    },
    {
      "Nationality": "Kingdom of Great Britain"
    },
    {
      "Nationality": "Kingdom of Ireland"
    },
    {
      "Nationality": "Kingdom of Italy"
    },
    {
      "Nationality": "Kingdom of Naples"
    },
    {
      "Nationality": "Kingdom of Navarre"
    },
    {
      "Nationality": "Kingdom of Prussia"
    },
    {
      "Nationality": "Kingdom of Romania"
    },
    {
      "Nationality": "Kingdom of Sardinia"
    },
    {
      "Nationality": "Kingdom of Scotland"
    },
    {
      "Nationality": "Kingdom of Sicily"
    },
    {
      "Nationality": "Kingdom of the Netherlands"
    },
    {
      "Nationality": "Kurdish people"
    },
    {
      "Nationality": "Luxembourg"
    },
    {
      "Nationality": "Ming dynasty"
    },
    {
      "Nationality": "Nazi Germany"
    },
    {
      "Nationality": "Netherlands"
    },
    {
      "Nationality": "Nigeria"
    },
    {
      "Nationality": "Nizari Ismaili state"
    },
    {
      "Nationality": "Norway"
    },
    {
      "Nationality": "Ottoman Empire"
    },
    {
      "Nationality": "Pakistan"
    },
    {
      "Nationality": "People's Republic of China"
    },
    {
      "Nationality": "Peru"
    },
    {
      "Nationality": "Phlius"
    },
    {
      "Nationality": "Poland"
    },
    {
      "Nationality": "Portugal"
    },
    {
      "Nationality": "Principality of Serbia"
    },
    {
      "Nationality": "Republic of Florence"
    },
    {
      "Nationality": "Republic of Geneva"
    },
    {
      "Nationality": "Republic of Ragusa"
    },
    {
      "Nationality": "Romania"
    },
    {
      "Nationality": "Royal Prussia"
    },
    {
      "Nationality": "Russia"
    },
    {
      "Nationality": "Russian Empire"
    },
    {
      "Nationality": "Russian Soviet Federative Socialist Republic"
    },
    {
      "Nationality": "Seventeen Provinces"
    },
    {
      "Nationality": "Sinop"
    },
    {
      "Nationality": "Slovenia"
    },
    {
      "Nationality": "Song dynasty"
    },
    {
      "Nationality": "South Korea"
    },
    {
      "Nationality": "Soviet Union"
    },
    {
      "Nationality": "Spain"
    },
    {
      "Nationality": "Sparta"
    },
    {
      "Nationality": "Sri Lanka"
    },
    {
      "Nationality": "Sweden"
    },
    {
      "Nationality": "Switzerland"
    },
    {
      "Nationality": "Taiwan"
    },
    {
      "Nationality": "Tang dynasty"
    },
    {
      "Nationality": "Tunisia"
    },
    {
      "Nationality": "Ukraine"
    },
    {
      "Nationality": "United Kingdom"
    },
    {
      "Nationality": "United Kingdom of Great Britain and Ireland"
    },
    {
      "Nationality": "United States of America"
    },
    {
      "Nationality": "Weimar Republic"
    },
    {
      "Nationality": "Zhou dynasty"
    },
    {
      "Nationality": "Ziyarid dynasty"
    }
  ];
let optionNation;

for (let i = 0; i < nations.length; i++) {
    optionNation = document.createElement('option');
    optionNation.text = nations[i].Nationality;
    optionNation.value = nations[i].Nationality;
    dropdownNation.add(optionNation);
}