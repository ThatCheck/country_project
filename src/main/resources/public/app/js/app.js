var invert = function (obj) {

    var new_obj = {};

    for (var prop in obj) {
        if(obj.hasOwnProperty(prop)) {
            new_obj[obj[prop].toUpperCase()] = prop;
        }
    }

    return new_obj;
};
MesPays = {};

MesPays.map = null;

MesPays.equivalentID = {
    "AF": "Afghanistan",
    "AL": "Albanie",
    "DZ": "Algérie",
    "AS": "Samoa américaine",
    "AD": "Andorre",
    "AO": "Angola",
    "AI": "Anguilla",
    "AQ": "Antarctique",
    "AG": "Antigua et Barbuda",
    "AR": "Argentine",
    "AM": "Arménie",
    "AW": "Aruba",
    "AU": "Australie",
    "AT": "Autriche",
    "AZ": "Azerbaidjan",
    "BS": "Bahamas",
    "BH": "Bahrein",
    "BD": "Bangladesh",
    "BB": "Barbade",
    "BY": "Bielorussie",
    "BE": "Belgique",
    "BZ": "Belize",
    "BJ": "Bénin",
    "BM": "Bermudes",
    "BT": "Bhoutan",
    "BO": "Bolivie",
    "BA": "Bosnie-Herzégovine",
    "BW": "Botswana",
    "BV": "Île Bouvet",
    "BR": "Brésil",
    "IO": "Océan Indien Britannique",
    "BN": "Brunei Darussalam",
    "BG": "Bulgarie",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "KH": "Cambodge",
    "CM": "Cameroun",
    "CA": "Canada",
    "CV": "Cap-Vert",
    "KY": "Caïmanes",
    "CF": "Centrafricaine, République",
    "TD": "Tchad",
    "CL": "Chili",
    "CN": "Chine",
    "CX": "Île Christmas",
    "CC": "Cocos",
    "CO": "Colombie",
    "KM": "Comores",
    "CG": "Congo, République populaire",
    "CD": "Congo, République démocratique",
    "CK": "Îles Cook",
    "CR": "Costa Rica",
    "CI": "Côte-d'Ivoire",
    "HR": "Croatie",
    "CU": "Cuba",
    "CY": "Chypre",
    "CZ": "Tchéquie",
    "DK": "Danemark",
    "DJ": "Djibouti",
    "DM": "Dominique",
    "DO": "République Dominicaine",
    "EC": "Équateur",
    "EG": "Égypte",
    "SV": "El Salvador",
    "GQ": "Guinée équatoriale",
    "ER": "Érythrée",
    "EE": "Estonie",
    "ET": "Éthiopie",
    "FK": "Îles Malouines",
    "FO": "Îles Féroé",
    "FJ": "Fidji",
    "FI": "Finlande",
    "FR": "France",
    "GF": "Guyane française",
    "PF": "Polynésie française",
    "TF": "Terres australes françaises",
    "GA": "Gabon",
    "GM": "Gambie",
    "GE": "Géorgie",
    "DE": "Allemagne",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Grèce",
    "GL": "Groenland",
    "GD": "Grenada",
    "GP": "Guadeloupe",
    "GU": "Guam",
    "GT": "Guatemala",
    "GN": "Guinée",
    "GW": "Guinée-Bissau",
    "GY": "Guyana",
    "HT": "Haïti",
    "HM": "Îles Heard-et-MacDonald",
    "VA": "Saint-Siège",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hongrie",
    "IS": "Islande",
    "IN": "Inde",
    "ID": "Indonésie",
    "IR": "Iran",
    "IQ": "Irak",
    "IE": "Irlande",
    "IL": "Israël",
    "IT": "Italie",
    "JM": "Jamaïque",
    "JP": "Japon",
    "JO": "Jordanie",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "KP": "Corée du Nord, République populaire démocratique",
    "KR": "Corée du Sud, République",
    "KW": "Koweit",
    "KG": "Kirghistan",
    "LA": "Laos",
    "LV": "Lettonie",
    "LB": "Liban",
    "LS": "Lesotho",
    "LR": "Libéria",
    "LY": "Libye",
    "LI": "Liechtenstein",
    "LT": "Lituanie",
    "LU": "Luxembourg, Grand-Duché",
    "MO": "Macao",
    "MK": "Macédoine, Ex-République yougoslave",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaisie",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malte",
    "MH": "Îles Marshall",
    "MQ": "Martinique",
    "MR": "Mauritanie",
    "MU": "Maurice",
    "YT": "Mayotte",
    "MX": "Mexique",
    "FM": "Micronésie",
    "MD": "Moldavie",
    "MC": "Monaco",
    "MN": "Mongolie",
    "MS": "Montserrat",
    "MA": "Maroc",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibie",
    "NR": "Nauru",
    "NP": "Népal",
    "NL": "Pays-Bas",
    "NC": "Nouvelle-Calédonie",
    "NZ": "Nouvelle-Zélande",
    "NI": "Nicaragua",
    "NE": "Niger",
    "NG": "Nigéria",
    "NU": "Niué",
    "NF": "Île Norfolk",
    "MP": "Mariannes du Nord",
    "NO": "Norvège",
    "OM": "Oman",
    "PK": "Pakistan",
    "PW": "Palau",
    "PS": "Palestine",
    "PA": "Panama",
    "PG": "Papouasie-Nouvelle-Guinée",
    "PY": "Paraguay",
    "PE": "Pérou",
    "PH": "Philippines",
    "PN": "Pitcairn",
    "PL": "Pologne",
    "PT": "Portugal",
    "PR": "Porto Rico",
    "QA": "Qatar",
    "RE": "Réunion",
    "RO": "Roumanie",
    "RU": "Russie",
    "RW": "Rwanda",
    "SH": "Sainte-Hélène",
    "KN": "Saint-Christophe-et-Niévès",
    "LC": "Sainte-Lucie",
    "PM": "Saint Pierre and Miquelon",
    "VC": "Saint-Vincent et les Grenadines",
    "WS": "Samoa",
    "SM": "Saint-Marin",
    "ST": "São Tomé et Principe",
    "SA": "Arabie Saoudite",
    "SN": "Sénégal",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapour",
    "SK": "Slovaquie",
    "SI": "Slovénie",
    "SB": "Salomon",
    "SO": "Somalie",
    "ZA": "Afrique du Sud",
    "GS": "Géorgie du Sud-et-les Îles Sandwich du Sud",
    "ES": "Espagne",
    "LK": "Sri Lanka",
    "SD": "Soudan",
    "SR": "Suriname",
    "SJ": "Svalbard et Île Jan Mayen",
    "SZ": "Ngwane, Royaume du Swaziland",
    "SE": "Suède",
    "CH": "Suisse",
    "SY": "Syrie",
    "TW": "Taïwan",
    "TJ": "Tadjikistan",
    "TZ": "Tanzanie, République unie",
    "TH": "Thaïlande",
    "TL": "Timor Leste",
    "TG": "Togo",
    "TK": "Tokelau",
    "TO": "Tonga",
    "TT": "Trinidad et Tobago",
    "TN": "Tunisie",
    "TR": "Turquie",
    "TM": "Turkménistan",
    "TC": "Îles Turques-et-Caïques",
    "TV": "Tuvalu",
    "UG": "Ouganda",
    "UA": "Ukraine",
    "AE": "Émirats arabes unis",
    "GB": "Royaume-Uni",
    "US": "États-Unis",
    "UM": "États-Unis d'Amérique",
    "UY": "Uruguay",
    "UZ": "Ouzbékistan",
    "VU": "Vanuatu",
    "VE": "Venezuela",
    "VN": "Vietnam",
    "VG": "Îles vierges britanniques",
    "VI": "Îles vierges américaines",
    "WF": "Wallis et Futuna",
    "EH": "Sahara occidental",
    "YE": "Yémen",
    "ZM": "Zambie",
    "ZW": "Zimbabwe",
    "AX": "Åland",
    "BQ": "Bonaire, Saint-Eustache et Saba",
    "CW": "Curaçao",
    "GG": "Guernesey",
    "IM": "Île de Man",
    "JE": "Jersey",
    "ME": "Monténégro",
    "BL": "Saint-Barthélemy",
    "MF": "Saint-Martin (partie française)",
    "RS": "Serbie",
    "SX": "Saint-Martin (partie néerlandaise)",
    "SS": "Sud-Soudan"
};

MesPays.hoverMenu = function(){
    $('.list-item-country').click(function(e){
        e.preventDefault();
        $('.list-countries li').removeClass('nav-active active');
        $(this).parent().addClass('nav-active active');
        var inverted = invert(MesPays.equivalentID);
        var mapObject = MesPays.map.getObjectById(inverted[$(this).data('country-id')]);
        MesPays.map.clickMapObject(mapObject);
    });
};

MesPays.initJson = function(){
    $.getJSON("/app/js/iso-3166.json", function(json) {
        MesPays.countryObject = json;
    });
};

MesPays.init = function(){
    MesPays.map = AmCharts.makeChart( "maps", {
        "type": "map",
        "theme": "light",
        "pathToImages" : "/global/plugins/maps-amcharts/ammap/images/",
        "dataProvider": {
            "map": "worldLow",
            "getAreasFromMap": true
        },
        "areasSettings": {
            "autoZoom": true,
            "selectedColor": "#CC0000"
        },
        "smallMap": {},
        "export": {
            "enabled": true,
            "position": "bottom-right"
        }
    });

    MesPays.map.addListener("clickMapObject", function (event) {
        // remove class "hover" from the respective flag
        var id = event.mapObject.id;
        MesPays.searchForPaysFromISO(id);
    });
};

MesPays.quickSearch = function(){
    $('input#search-input').val('').quicksearch('.list-countries li', {
        selector: '.list-item-country',
        'onAfter': function () {
            customScroll();

        },
    });
};

MesPays.searchForPaysFromISO = function(code)
{
    $.soap({
        url: 'http://localhost:8080/ws/',
        method: 'getCountryRequest',
        appendMethodToURL: false,
        namespaceURL : 'http://cabidegrange/country-web-service',
        data: {
            name: MesPays.equivalentID[code],
        },

        success: function (soapResponse) {
            var response = soapResponse.toJSON();
            var country = response['#document']['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns2:getCountryResponse']['ns2:country'];
            $('.coutry-name').text(country['ns2:name']);
            $('.capital').text(country['ns2:capital']);
            $('.population').text(country['ns2:population']);
            $('.country-image').attr('src','/app/images/'+code+'.png');
            $('.list-countries li').removeClass('nav-active active');
            $('.list-countries li a').filter(function() {
                return $(this).data("country-id") == country['ns2:name']
            }).parent().addClass('nav-active active');
        },
        error: function (SOAPResponse) {
            console.error(SOAPResponse);
        }
    });
};

$(document).ready(function() {
    MesPays.init();
    MesPays.hoverMenu();
    MesPays.quickSearch();
});