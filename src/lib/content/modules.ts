export type FlashcardItem = {
  front: string;
  back: string;
  pronunciation?: string;
  example?: string;
  exampleTranslation?: string;
};

export type Lesson = {
  id: string;
  title: string;
  description: string;
  items: FlashcardItem[];
};

export type Module = {
  id: string;
  title: string;
  description: string;
  level: number;
  levelLabel: string;
  icon: string;
  color: string;
  lessons: Lesson[];
  aiPrompt: string;
};

export const modules: Module[] = [
  // ─── LEVEL 1: ABSOLUTE BEGINNER ────────────────────────────
  {
    id: "alphabet",
    title: "The Alphabet & Pronunciation",
    description: "Learn the German letters, umlauts, and special sounds.",
    level: 1,
    levelLabel: "Absolute Beginner",
    icon: "type",
    color: "bg-coral",
    aiPrompt:
      "The user just finished learning the German alphabet and pronunciation. Quiz them on how specific letters and umlauts sound. Ask them to spell simple German words letter by letter. Keep it fun and encouraging.",
    lessons: [
      {
        id: "alphabet-letters",
        title: "The 26 Letters",
        description: "Learn each letter and how Germans pronounce it.",
        items: [
          { front: "A", back: "ah", pronunciation: "ah" },
          { front: "B", back: "beh", pronunciation: "beh" },
          { front: "C", back: "tseh", pronunciation: "tseh" },
          { front: "D", back: "deh", pronunciation: "deh" },
          { front: "E", back: "eh", pronunciation: "eh" },
          { front: "F", back: "eff", pronunciation: "eff" },
          { front: "G", back: "geh", pronunciation: "geh" },
          { front: "H", back: "hah", pronunciation: "hah" },
          { front: "I", back: "ih", pronunciation: "ih" },
          { front: "J", back: "yot", pronunciation: "yot" },
          { front: "K", back: "kah", pronunciation: "kah" },
          { front: "L", back: "ell", pronunciation: "ell" },
          { front: "M", back: "emm", pronunciation: "emm" },
          { front: "N", back: "enn", pronunciation: "enn" },
          { front: "O", back: "oh", pronunciation: "oh" },
          { front: "P", back: "peh", pronunciation: "peh" },
          { front: "Q", back: "kuh", pronunciation: "kuh" },
          { front: "R", back: "err", pronunciation: "err" },
          { front: "S", back: "ess", pronunciation: "ess" },
          { front: "T", back: "teh", pronunciation: "teh" },
          { front: "U", back: "uh", pronunciation: "uh" },
          { front: "V", back: "fau", pronunciation: "fau" },
          { front: "W", back: "veh", pronunciation: "veh" },
          { front: "X", back: "iks", pronunciation: "iks" },
          { front: "Y", back: "üpsilon", pronunciation: "üpsilon" },
          { front: "Z", back: "tsett", pronunciation: "tsett" },
        ],
      },
      {
        id: "alphabet-umlauts",
        title: "Umlauts & ß",
        description: "The special German characters: Ä, Ö, Ü, and ß.",
        items: [
          {
            front: "Ä / ä",
            back: "Like the 'e' in 'bed'",
            pronunciation: "eh (open)",
            example: "Äpfel",
            exampleTranslation: "Apples",
          },
          {
            front: "Ö / ö",
            back: "Like the 'u' in 'burn'",
            pronunciation: "oe",
            example: "schön",
            exampleTranslation: "beautiful",
          },
          {
            front: "Ü / ü",
            back: "Like 'ew' with rounded lips",
            pronunciation: "ue",
            example: "über",
            exampleTranslation: "over / about",
          },
          {
            front: "ß",
            back: "Sharp S, always pronounced 'ss'",
            pronunciation: "ss",
            example: "Straße",
            exampleTranslation: "street",
          },
        ],
      },
      {
        id: "alphabet-combos",
        title: "Special Sound Combos",
        description: "German letter combinations that sound different than English.",
        items: [
          {
            front: "sch",
            back: "Like 'sh' in 'ship'",
            pronunciation: "sh",
            example: "Schule",
            exampleTranslation: "school",
          },
          {
            front: "ch",
            back: "A soft hissing sound (after e, i) or a throaty sound (after a, o, u)",
            pronunciation: "kh / hh",
            example: "ich / Buch",
            exampleTranslation: "I / book",
          },
          {
            front: "ei",
            back: "Sounds like English 'eye'",
            pronunciation: "eye",
            example: "Eis",
            exampleTranslation: "ice / ice cream",
          },
          {
            front: "ie",
            back: "Sounds like English 'ee'",
            pronunciation: "ee",
            example: "Liebe",
            exampleTranslation: "love",
          },
          {
            front: "eu / äu",
            back: "Sounds like 'oy' in 'boy'",
            pronunciation: "oy",
            example: "heute",
            exampleTranslation: "today",
          },
          {
            front: "sp / st",
            back: "At the start of a word, pronounced 'shp' / 'sht'",
            pronunciation: "shp / sht",
            example: "Spaß / Straße",
            exampleTranslation: "fun / street",
          },
        ],
      },
    ],
  },
  {
    id: "numbers",
    title: "Numbers & Time",
    description: "Master counting 1-100, telling time, and dates.",
    level: 1,
    levelLabel: "Absolute Beginner",
    icon: "hash",
    color: "bg-woad",
    aiPrompt:
      "The user just finished learning German numbers. Quiz them by asking them to translate numbers from English to German and vice versa. Ask what time it is using German. Make it conversational.",
    lessons: [
      {
        id: "numbers-1-20",
        title: "Numbers 1 to 20",
        description: "The foundation of all German counting.",
        items: [
          { front: "1", back: "eins", pronunciation: "eyns" },
          { front: "2", back: "zwei", pronunciation: "tsvye" },
          { front: "3", back: "drei", pronunciation: "dry" },
          { front: "4", back: "vier", pronunciation: "feer" },
          { front: "5", back: "fünf", pronunciation: "fuenf" },
          { front: "6", back: "sechs", pronunciation: "zeks" },
          { front: "7", back: "sieben", pronunciation: "zee-ben" },
          { front: "8", back: "acht", pronunciation: "akht" },
          { front: "9", back: "neun", pronunciation: "noyn" },
          { front: "10", back: "zehn", pronunciation: "tsehn" },
          { front: "11", back: "elf", pronunciation: "elf" },
          { front: "12", back: "zwölf", pronunciation: "tsvoelf" },
          { front: "13", back: "dreizehn", pronunciation: "dry-tsehn" },
          { front: "14", back: "vierzehn", pronunciation: "feer-tsehn" },
          { front: "15", back: "fünfzehn", pronunciation: "fuenf-tsehn" },
          { front: "16", back: "sechzehn", pronunciation: "zekh-tsehn" },
          { front: "17", back: "siebzehn", pronunciation: "zeep-tsehn" },
          { front: "18", back: "achtzehn", pronunciation: "akht-tsehn" },
          { front: "19", back: "neunzehn", pronunciation: "noyn-tsehn" },
          { front: "20", back: "zwanzig", pronunciation: "tsvan-tsig" },
        ],
      },
      {
        id: "numbers-tens",
        title: "Tens: 10 to 100",
        description: "Count by tens in German.",
        items: [
          { front: "10", back: "zehn", pronunciation: "tsehn" },
          { front: "20", back: "zwanzig", pronunciation: "tsvan-tsig" },
          { front: "30", back: "dreißig", pronunciation: "dry-sig" },
          { front: "40", back: "vierzig", pronunciation: "feer-tsig" },
          { front: "50", back: "fünfzig", pronunciation: "fuenf-tsig" },
          { front: "60", back: "sechzig", pronunciation: "zekh-tsig" },
          { front: "70", back: "siebzig", pronunciation: "zeep-tsig" },
          { front: "80", back: "achtzig", pronunciation: "akht-tsig" },
          { front: "90", back: "neunzig", pronunciation: "noyn-tsig" },
          { front: "100", back: "hundert", pronunciation: "hoon-dert" },
        ],
      },
      {
        id: "numbers-combined",
        title: "Combined Numbers (21-99)",
        description: "In German, the ones come BEFORE the tens. 'einundzwanzig' = one-and-twenty.",
        items: [
          { front: "21", back: "einundzwanzig", pronunciation: "eyn-oont-tsvan-tsig" },
          { front: "32", back: "zweiunddreißig", pronunciation: "tsvye-oont-dry-sig" },
          { front: "45", back: "fünfundvierzig", pronunciation: "fuenf-oont-feer-tsig" },
          { front: "58", back: "achtundfünfzig", pronunciation: "akht-oont-fuenf-tsig" },
          { front: "63", back: "dreiundsechzig", pronunciation: "dry-oont-zekh-tsig" },
          { front: "77", back: "siebenundsiebzig", pronunciation: "zee-ben-oont-zeep-tsig" },
          { front: "84", back: "vierundachtzig", pronunciation: "feer-oont-akht-tsig" },
          { front: "99", back: "neunundneunzig", pronunciation: "noyn-oont-noyn-tsig" },
        ],
      },
    ],
  },
  {
    id: "greetings",
    title: "Greetings & Introductions",
    description: "Say hello, goodbye, and introduce yourself in German.",
    level: 1,
    levelLabel: "Absolute Beginner",
    icon: "hand-wave",
    color: "bg-leaf",
    aiPrompt:
      "The user just finished learning basic German greetings and introductions. Roleplay meeting them at a party. Greet them in German, ask their name, age, and where they live. Use simple German with English translations.",
    lessons: [
      {
        id: "greetings-basic",
        title: "Basic Greetings",
        description: "Essential ways to say hello and goodbye.",
        items: [
          { front: "Hello", back: "Hallo", pronunciation: "ha-lo" },
          { front: "Good morning", back: "Guten Morgen", pronunciation: "goo-ten mor-gen" },
          { front: "Good day", back: "Guten Tag", pronunciation: "goo-ten tahk" },
          { front: "Good evening", back: "Guten Abend", pronunciation: "goo-ten ah-bent" },
          { front: "Good night", back: "Gute Nacht", pronunciation: "goo-te nakht" },
          { front: "Goodbye", back: "Auf Wiedersehen", pronunciation: "owf vee-der-zey-en" },
          { front: "Bye (informal)", back: "Tschüss", pronunciation: "chuess" },
          { front: "See you later", back: "Bis später", pronunciation: "bis shpay-ter" },
        ],
      },
      {
        id: "greetings-introductions",
        title: "Introducing Yourself",
        description: "Tell people who you are and ask about them.",
        items: [
          { front: "My name is...", back: "Ich heiße...", pronunciation: "ikh hy-se" },
          { front: "What is your name?", back: "Wie heißt du?", pronunciation: "vee hyst doo" },
          { front: "I am ... years old", back: "Ich bin ... Jahre alt", pronunciation: "ikh bin ... yah-re alt" },
          { front: "How old are you?", back: "Wie alt bist du?", pronunciation: "vee alt bist doo" },
          { front: "I come from...", back: "Ich komme aus...", pronunciation: "ikh ko-me ows" },
          { front: "Where do you come from?", back: "Woher kommst du?", pronunciation: "vo-hair komst doo" },
          { front: "I live in...", back: "Ich wohne in...", pronunciation: "ikh vo-ne in" },
          { front: "Nice to meet you", back: "Freut mich", pronunciation: "froyt mikh" },
        ],
      },
      {
        id: "greetings-polite",
        title: "Polite Phrases",
        description: "Essential polite words that Germans use every day.",
        items: [
          { front: "Please", back: "Bitte", pronunciation: "bi-te" },
          { front: "Thank you", back: "Danke", pronunciation: "dan-ke" },
          { front: "Thank you very much", back: "Vielen Dank", pronunciation: "fee-len dank" },
          { front: "You're welcome", back: "Bitte schön", pronunciation: "bi-te shoen" },
          { front: "Excuse me", back: "Entschuldigung", pronunciation: "ent-shool-di-goong" },
          { front: "Sorry", back: "Es tut mir leid", pronunciation: "es toot meer lyte" },
          { front: "Yes", back: "Ja", pronunciation: "yah" },
          { front: "No", back: "Nein", pronunciation: "nyne" },
        ],
      },
    ],
  },

  // ─── LEVEL 2: CORE MECHANICS ───────────────────────────────
  {
    id: "articles",
    title: 'The Dreaded "Der, Die, Das"',
    description: "Understand gendered nouns and the nominative case.",
    level: 2,
    levelLabel: "Core Mechanics",
    icon: "book-open",
    color: "bg-dye",
    aiPrompt:
      "The user just learned about German articles (der, die, das). Quiz them on the gender of common German nouns. Give them a noun and ask if it is der, die, or das.",
    lessons: [
      {
        id: "articles-rules",
        title: "Gender Rules & Patterns",
        description: "Tips and patterns to figure out if a noun is der, die, or das.",
        items: [
          { front: "der (masculine)", back: "Days, months, seasons, male people", example: "der Mann, der Montag", exampleTranslation: "the man, Monday" },
          { front: "die (feminine)", back: "Female people, flowers, trees, numbers", example: "die Frau, die Rose", exampleTranslation: "the woman, the rose" },
          { front: "das (neuter)", back: "Diminutives (-chen, -lein), metals, letters", example: "das Mädchen, das Gold", exampleTranslation: "the girl, gold" },
          { front: "die (plural)", back: "ALL plural nouns use 'die'", example: "die Kinder, die Männer", exampleTranslation: "the children, the men" },
        ],
      },
      {
        id: "articles-common",
        title: "50 Most Common Nouns",
        description: "Learn the articles for the most used German nouns.",
        items: [
          { front: "the man", back: "der Mann", pronunciation: "dehr man" },
          { front: "the woman", back: "die Frau", pronunciation: "dee frow" },
          { front: "the child", back: "das Kind", pronunciation: "das kint" },
          { front: "the house", back: "das Haus", pronunciation: "das hows" },
          { front: "the car", back: "das Auto", pronunciation: "das ow-to" },
          { front: "the dog", back: "der Hund", pronunciation: "dehr hoont" },
          { front: "the cat", back: "die Katze", pronunciation: "dee ka-tse" },
          { front: "the water", back: "das Wasser", pronunciation: "das va-ser" },
          { front: "the bread", back: "das Brot", pronunciation: "das broht" },
          { front: "the milk", back: "die Milch", pronunciation: "dee milkh" },
          { front: "the book", back: "das Buch", pronunciation: "das bookh" },
          { front: "the table", back: "der Tisch", pronunciation: "dehr tish" },
          { front: "the door", back: "die Tür", pronunciation: "dee tuer" },
          { front: "the window", back: "das Fenster", pronunciation: "das fen-ster" },
          { front: "the city", back: "die Stadt", pronunciation: "dee shtat" },
          { front: "the country", back: "das Land", pronunciation: "das lant" },
        ],
      },
    ],
  },
  {
    id: "verbs",
    title: "Basic Verbs",
    description: "Master 'sein' (to be), 'haben' (to have), and everyday verbs.",
    level: 2,
    levelLabel: "Core Mechanics",
    icon: "zap",
    color: "bg-marigold",
    aiPrompt:
      "The user just learned basic German verbs including sein and haben conjugations. Create simple fill-in-the-blank exercises. Give them a sentence in English and ask them to conjugate the correct verb form.",
    lessons: [
      {
        id: "verbs-sein",
        title: 'Sein (to be)',
        description: "The most important German verb.",
        items: [
          { front: "I am", back: "ich bin", pronunciation: "ikh bin" },
          { front: "you are (informal)", back: "du bist", pronunciation: "doo bist" },
          { front: "he/she/it is", back: "er/sie/es ist", pronunciation: "ehr/zee/es ist" },
          { front: "we are", back: "wir sind", pronunciation: "veer zint" },
          { front: "you are (plural)", back: "ihr seid", pronunciation: "eer zyte" },
          { front: "they are", back: "sie sind", pronunciation: "zee zint" },
          { front: "you are (formal)", back: "Sie sind", pronunciation: "zee zint" },
        ],
      },
      {
        id: "verbs-haben",
        title: 'Haben (to have)',
        description: "The second most important German verb.",
        items: [
          { front: "I have", back: "ich habe", pronunciation: "ikh ha-be" },
          { front: "you have (informal)", back: "du hast", pronunciation: "doo hast" },
          { front: "he/she/it has", back: "er/sie/es hat", pronunciation: "ehr/zee/es hat" },
          { front: "we have", back: "wir haben", pronunciation: "veer ha-ben" },
          { front: "you have (plural)", back: "ihr habt", pronunciation: "eer habt" },
          { front: "they have", back: "sie haben", pronunciation: "zee ha-ben" },
          { front: "you have (formal)", back: "Sie haben", pronunciation: "zee ha-ben" },
        ],
      },
      {
        id: "verbs-everyday",
        title: "Everyday Verbs",
        description: "12 verbs you will use in almost every conversation.",
        items: [
          { front: "to go", back: "gehen", pronunciation: "gey-en" },
          { front: "to come", back: "kommen", pronunciation: "ko-men" },
          { front: "to eat", back: "essen", pronunciation: "eh-sen" },
          { front: "to drink", back: "trinken", pronunciation: "trin-ken" },
          { front: "to sleep", back: "schlafen", pronunciation: "shlah-fen" },
          { front: "to work", back: "arbeiten", pronunciation: "ar-by-ten" },
          { front: "to speak", back: "sprechen", pronunciation: "shpre-khen" },
          { front: "to learn", back: "lernen", pronunciation: "ler-nen" },
          { front: "to know", back: "wissen", pronunciation: "vi-sen" },
          { front: "to want", back: "wollen", pronunciation: "vo-len" },
          { front: "to need / must", back: "müssen", pronunciation: "mue-sen" },
          { front: "to be able to", back: "können", pronunciation: "koe-nen" },
        ],
      },
    ],
  },
  {
    id: "questions",
    title: "W-Questions",
    description: "Master who, what, where, when, why, and how in German.",
    level: 2,
    levelLabel: "Core Mechanics",
    icon: "help-circle",
    color: "bg-coral",
    aiPrompt:
      "The user just learned German W-questions. Have a simple Q&A conversation using only W-questions. Ask them to translate questions from English to German and answer some simple ones.",
    lessons: [
      {
        id: "questions-words",
        title: "The W-Words",
        description: "Learn the essential question words.",
        items: [
          { front: "Who?", back: "Wer?", pronunciation: "vehr" },
          { front: "What?", back: "Was?", pronunciation: "vas" },
          { front: "Where?", back: "Wo?", pronunciation: "vo" },
          { front: "Where to?", back: "Wohin?", pronunciation: "vo-hin" },
          { front: "Where from?", back: "Woher?", pronunciation: "vo-hehr" },
          { front: "When?", back: "Wann?", pronunciation: "van" },
          { front: "Why?", back: "Warum?", pronunciation: "va-room" },
          { front: "How?", back: "Wie?", pronunciation: "vee" },
          { front: "How much?", back: "Wie viel?", pronunciation: "vee feel" },
          { front: "How many?", back: "Wie viele?", pronunciation: "vee fee-le" },
        ],
      },
      {
        id: "questions-practice",
        title: "Common Questions",
        description: "Practice full question sentences.",
        items: [
          { front: "What is your name?", back: "Wie heißt du?", pronunciation: "vee hyst doo" },
          { front: "Where do you live?", back: "Wo wohnst du?", pronunciation: "vo vohnst doo" },
          { front: "How are you?", back: "Wie geht es dir?", pronunciation: "vee geyt es deer" },
          { front: "What do you do? (job)", back: "Was machst du?", pronunciation: "vas makhst doo" },
          { front: "Where is the bathroom?", back: "Wo ist die Toilette?", pronunciation: "vo ist dee toy-le-te" },
          { front: "How much does this cost?", back: "Wie viel kostet das?", pronunciation: "vee feel kos-tet das" },
          { front: "When does the train leave?", back: "Wann fährt der Zug?", pronunciation: "van fehrt dehr tsook" },
          { front: "Why are you learning German?", back: "Warum lernst du Deutsch?", pronunciation: "va-room lernst doo doytsh" },
        ],
      },
    ],
  },

  // ─── LEVEL 3: EVERYDAY LIFE ────────────────────────────────
  {
    id: "family",
    title: "Family & Friends",
    description: "Describe people, relationships, and appearances.",
    level: 3,
    levelLabel: "Everyday Life",
    icon: "users",
    color: "bg-leaf",
    aiPrompt:
      "The user just finished learning German family vocabulary. Ask them to describe their family in German. Prompt them with questions like 'How many siblings do you have?' in German.",
    lessons: [
      {
        id: "family-members",
        title: "Family Members",
        description: "Learn the words for family relationships.",
        items: [
          { front: "the mother", back: "die Mutter", pronunciation: "dee moo-ter" },
          { front: "the father", back: "der Vater", pronunciation: "dehr fah-ter" },
          { front: "the sister", back: "die Schwester", pronunciation: "dee shves-ter" },
          { front: "the brother", back: "der Bruder", pronunciation: "dehr broo-der" },
          { front: "the grandmother", back: "die Großmutter", pronunciation: "dee grohs-moo-ter" },
          { front: "the grandfather", back: "der Großvater", pronunciation: "dehr grohs-fah-ter" },
          { front: "the son", back: "der Sohn", pronunciation: "dehr zohn" },
          { front: "the daughter", back: "die Tochter", pronunciation: "dee tokh-ter" },
          { front: "the uncle", back: "der Onkel", pronunciation: "dehr on-kel" },
          { front: "the aunt", back: "die Tante", pronunciation: "dee tan-te" },
        ],
      },
    ],
  },
  {
    id: "food",
    title: "Food & Drink",
    description: "Order in a restaurant, name common foods and drinks.",
    level: 3,
    levelLabel: "Everyday Life",
    icon: "utensils",
    color: "bg-woad",
    aiPrompt:
      "The user just finished learning food and drink vocabulary. Roleplay being a waiter at a German restaurant. Ask them what they would like to order and use simple German.",
    lessons: [
      {
        id: "food-basics",
        title: "Common Foods",
        description: "Learn the names of everyday foods.",
        items: [
          { front: "the bread", back: "das Brot", pronunciation: "das broht" },
          { front: "the cheese", back: "der Käse", pronunciation: "dehr keh-ze" },
          { front: "the sausage", back: "die Wurst", pronunciation: "dee voorst" },
          { front: "the egg", back: "das Ei", pronunciation: "das eye" },
          { front: "the apple", back: "der Apfel", pronunciation: "dehr ap-fel" },
          { front: "the potato", back: "die Kartoffel", pronunciation: "dee kar-to-fel" },
          { front: "the chicken", back: "das Hähnchen", pronunciation: "das hehn-khen" },
          { front: "the rice", back: "der Reis", pronunciation: "dehr ryce" },
          { front: "the soup", back: "die Suppe", pronunciation: "dee zoo-pe" },
          { front: "the cake", back: "der Kuchen", pronunciation: "dehr koo-khen" },
        ],
      },
      {
        id: "food-ordering",
        title: "Ordering at a Restaurant",
        description: "Key phrases for dining out.",
        items: [
          { front: "I would like...", back: "Ich möchte...", pronunciation: "ikh moekh-te" },
          { front: "The menu, please", back: "Die Speisekarte, bitte", pronunciation: "dee shpy-ze-kar-te bi-te" },
          { front: "The bill, please", back: "Die Rechnung, bitte", pronunciation: "dee rekh-noong bi-te" },
          { front: "A glass of water", back: "Ein Glas Wasser", pronunciation: "eyn glahs va-ser" },
          { front: "A coffee", back: "Einen Kaffee", pronunciation: "ey-nen ka-feh" },
          { front: "A beer", back: "Ein Bier", pronunciation: "eyn beer" },
          { front: "With / Without", back: "Mit / Ohne", pronunciation: "mit / oh-ne" },
          { front: "Delicious!", back: "Lecker!", pronunciation: "le-ker" },
        ],
      },
    ],
  },
  {
    id: "directions",
    title: "Navigating the City",
    description: "Ask for directions and understand where things are.",
    level: 3,
    levelLabel: "Everyday Life",
    icon: "map-pin",
    color: "bg-dye",
    aiPrompt:
      "The user just finished learning directions vocabulary. Roleplay being a local in Berlin. The user is a tourist asking for directions to the train station, a restaurant, or a famous landmark. Use simple German.",
    lessons: [
      {
        id: "directions-vocab",
        title: "Direction Words",
        description: "Learn left, right, straight, and key location words.",
        items: [
          { front: "left", back: "links", pronunciation: "links" },
          { front: "right", back: "rechts", pronunciation: "rekhts" },
          { front: "straight ahead", back: "geradeaus", pronunciation: "ge-rah-de-ows" },
          { front: "next to", back: "neben", pronunciation: "ney-ben" },
          { front: "across from", back: "gegenüber", pronunciation: "gey-gen-ue-ber" },
          { front: "the street", back: "die Straße", pronunciation: "dee shtrah-se" },
          { front: "the train station", back: "der Bahnhof", pronunciation: "dehr bahn-hohf" },
          { front: "the supermarket", back: "der Supermarkt", pronunciation: "dehr zoo-per-markt" },
          { front: "Where is...?", back: "Wo ist...?", pronunciation: "vo ist" },
          { front: "How do I get to...?", back: "Wie komme ich zu...?", pronunciation: "vee ko-me ikh tsoo" },
        ],
      },
    ],
  },
];

export function getModuleById(id: string): Module | undefined {
  return modules.find((m) => m.id === id);
}

export function getLessonById(
  moduleId: string,
  lessonId: string
): { module: Module; lesson: Lesson } | undefined {
  const mod = getModuleById(moduleId);
  if (!mod) return undefined;
  const lesson = mod.lessons.find((l) => l.id === lessonId);
  if (!lesson) return undefined;
  return { module: mod, lesson };
}

export function getModulesByLevel(): { level: number; label: string; modules: Module[] }[] {
  const levelMap = new Map<number, { label: string; modules: Module[] }>();
  modules.forEach((mod) => {
    if (!levelMap.has(mod.level)) {
      levelMap.set(mod.level, { label: mod.levelLabel, modules: [] });
    }
    levelMap.get(mod.level)!.modules.push(mod);
  });
  return Array.from(levelMap.entries())
    .sort(([a], [b]) => a - b)
    .map(([level, data]) => ({ level, ...data }));
}
