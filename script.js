const portfolioData = {
    skills: [
        { name: "HTML5", icon: '<i class="fa-brands fa-html5 mr-2"></i>', colorClass: "text-orange-600 dark:text-orange-500" },
        { name: "CSS3", icon: '<i class="fa-brands fa-css3-alt mr-2"></i>', colorClass: "text-blue-600 dark:text-blue-500" },
        { name: "JavaScript", icon: '<i class="fa-brands fa-js mr-2"></i>', colorClass: "text-yellow-600 dark:text-yellow-400" },
        { name: "TypeScript", icon: '', colorClass: "text-blue-500" },
        { name: "React", icon: '<i class="fa-brands fa-react mr-2"></i>', colorClass: "text-cyan-500" },
        { name: "Node.js", icon: '<i class="fa-brands fa-node-js mr-2"></i>', colorClass: "text-green-600 dark:text-green-500" },
        { name: "PHP", icon: '<i class="fa-brands fa-php mr-2"></i>', colorClass: "text-indigo-600 dark:text-indigo-400" },
        { name: "Laravel", icon: '<i class="fa-brands fa-laravel mr-2"></i>', colorClass: "text-red-600 dark:text-red-500" },
        { name: "C# / .NET", icon: '', colorClass: "text-purple-600 dark:text-purple-500" },
        { name: "Python", icon: '<i class="fa-brands fa-python mr-2"></i>', colorClass: "text-blue-400" },
        { name: "Arduino / IoT", icon: '<i class="fa-solid fa-microchip mr-2"></i>', colorClass: "text-sky-500" },
        { name: "WordPress", icon: '<i class="fa-brands fa-wordpress mr-2"></i>', colorClass: "text-gray-800 dark:text-white" },
        { name: "Tailwind CSS", icon: '', colorClass: "text-teal-500" },
        { name: "Bootstrap", icon: '<i class="fa-brands fa-bootstrap mr-2"></i>', colorClass: "text-purple-500" },
        { name: "REST API", icon: '<i class="fa-solid fa-server mr-2"></i>', colorClass: "text-green-500" },
        { name: "MySQL / SQL", icon: '<i class="fa-solid fa-database mr-2"></i>', colorClass: "text-orange-500" },
        { name: "Git / GitHub", icon: '<i class="fa-brands fa-github mr-2"></i>', colorClass: "text-gray-800 dark:text-gray-300" },
        { name: "Postman", icon: '', colorClass: "text-orange-600 dark:text-orange-500" },
        { name: "Figma", icon: '<i class="fa-brands fa-figma mr-2"></i>', colorClass: "text-pink-500" }
    ],

    projects: [
        {
            id: "familiada-pc", category: "hardware",
            title: "Familiada System PC", rgb: "234, 179, 8",
            inProgress: true, recentlyFinished: false,
            img: "", icon: '<i class="fa-solid fa-tv"></i>', iconBg: "bg-yellow-500/10 text-yellow-500",
            descPl: "System teleturniejowy z 3 niezależnymi ekranami (widz, admin, prowadzący).",
            descEn: "Game show system with 3 independent screens (audience, admin, host).",
            longDescPl: "Aplikacja stworzona od zera do kompleksowej obsługi teleturnieju opartego na popularnym formacie. System dzieli się na 3 niezależne instancje: renderowaną planszę dla publiczności, panel kontrolny dla administratora oraz czytelny podgląd dla prowadzącego.<br><br><strong>Kluczowe osiągnięcia techniczne:</strong><br>&bull; Dynamiczny silnik skalowania odpowiedzi na planszy (od 2 do 6 wierszy).<br>&bull; Zintegrowana, asynchroniczna obsługa efektów dźwiękowych i animacji SVG.<br>&bull; Dwukierunkowa komunikacja po Bluetooth Web API z zewnętrznymi mikrokontrolerami.",
            longDescEn: "An application built from scratch to comprehensively manage a TV-style game show. The system is divided into 3 independent instances: a rendered board for the audience, an admin control panel, and a clean preview for the host.<br><br><strong>Key technical achievements:</strong><br>&bull; Dynamic answer scaling engine on the board (2 to 6 rows).<br>&bull; Integrated, asynchronous handling of sound effects and SVG animations.<br>&bull; Two-way Bluetooth Web API communication with external microcontrollers.",
            rolePl: "Główny Programista / Architekt", roleEn: "Lead Developer / Architect",
            tag: "PC / Multi-Screen", tagColor: "text-yellow-500", extraClass: "", githubLink: "https://github.com/KolegaTatar/Familiada", liveLink: ""
        },
        {
            id: "familiada-ard", category: "hardware",
            title: "Familiada Arduino Controller", rgb: "14, 165, 233",
            inProgress: true, recentlyFinished: false,
            img: "", icon: '<i class="fa-solid fa-microchip"></i>', iconBg: "bg-sky-500/10 text-sky-500",
            descPl: "Fizyczny kontroler gry z systemem blokad i dynamicznym oświetleniem LED.",
            descEn: "Physical game controller with lockout logic and dynamic LED lighting.",
            longDescPl: "Fizyczny i programowy komponent teleturnieju zintegrowany z główną aplikacją PC. Urządzenie obsługuje wejścia od graczy ('grzybki'), mierząc czas reakcji z dokładnością do milisekund i rozwiązując ewentualne remisy.<br><br><strong>Kluczowe osiągnięcia techniczne:</strong><br>&bull; Napisanie w C++ niskopoziomowej logiki 'lockout' blokującej sygnały innych graczy po pierwszym kliknięciu.<br>&bull; Integracja modułu Bluetooth do bezprzewodowego przesyłania pakietów danych o stanie gry.<br>&bull; Sterowanie taśmami LED RGB, które dynamicznie reagują na błędy, wygrane rundy i zgłoszenia uczestników.",
            longDescEn: "A physical and software game show component integrated with the main PC app. The device handles player inputs ('buzzers'), measuring reaction times with millisecond precision and resolving ties.<br><br><strong>Key technical achievements:</strong><br>&bull; Wrote low-level C++ 'lockout' logic blocking other players' signals after the first click.<br>&bull; Bluetooth module integration for wireless transmission of game state data packets.<br>&bull; Controlling RGB LED strips that dynamically react to mistakes, won rounds, and participant inputs.",
            rolePl: "IoT Developer / Inżynier Elektronik", roleEn: "IoT Developer / Electronics Engineer",
            tag: "Arduino / C++ / BT", tagColor: "text-sky-500", extraClass: "", githubLink: "https://github.com/KolegaTatar/Familiada", liveLink: ""
        },
        {
            id: "kw", category: "web",
            title: "KW Inwentarz", rgb: "37, 99, 235", 
            inProgress: false, recentlyFinished: true, 
            img: "", icon: '<i class="fa-solid fa-train"></i>', iconBg: "bg-blue-500/10 text-blue-500",
            descPl: "Kompleksowy system SPA dla Kolei Wielkopolskich do ewidencji zasobów IT.",
            descEn: "Comprehensive SPA system for Koleje Wielkopolskie for IT resource tracking.",
            longDescPl: "Wydajna aplikacja klasy Enterprise (SPA) stworzona dla Kolei Wielkopolskich w celu centralizacji zarządzania sprzętem, kartami SIM oraz nadawaniem dostępów ROGER.<br><br><strong>Kluczowe osiągnięcia techniczne:</strong><br>&bull; Zbudowanie responsywnego front-endu w środowisku React + Vite dla błyskawicznego renderowania tabel danych.<br>&bull; Stworzenie backendu API w Node.js połączonego z relacyjną bazą MSSQL (architektura Controller-Service-Repository).<br>&bull; Wdrożenie restrykcyjnego systemu ról (Przeglądanie, Edycja, Administrator) oraz autoryzacji opartej na weryfikacji tokenów i sesji.",
            longDescEn: "An efficient Enterprise-class application (SPA) created for Koleje Wielkopolskie to centralize the management of hardware, SIM cards, and ROGER access granting.<br><br><strong>Key technical achievements:</strong><br>&bull; Built a responsive front-end in React + Vite for blazing-fast data table rendering.<br>&bull; Created a Node.js API backend connected to a relational MSSQL database (Controller-Service-Repository architecture).<br>&bull; Implemented a strict role system (View, Edit, Admin) and authorization based on token and session verification.",
            rolePl: "Full-stack Developer", roleEn: "Full-stack Developer",
            tag: "React / Node.js / MSSQL", tagColor: "text-blue-500", githubLink: "", liveLink: ""
        },

        {
            id: "terraquest", category: "web",
            title: "TerraQuest Web", rgb: "20, 184, 166",
            inProgress: false, recentlyFinished: false,
            img: "", icon: '<i class="fa-solid fa-hotel"></i>', iconBg: "bg-teal-500/10 text-teal-500",
            descPl: "Kompleksowa platforma rezerwacyjna noclegów (booking) z systemem ocen i ofertami promocyjnymi.",
            descEn: "Comprehensive accommodation booking platform with a rating system and promotional offers.",
            longDescPl: "Zaawansowana platforma rezerwacyjna umożliwiająca wyszukiwanie, rezerwowanie i ocenianie obiektów turystycznych. Projekt obejmował stworzenie intuicyjnego interfejsu oraz solidnego zaplecza backendowego.<br><br><strong>Kluczowe funkcjonalności i technologie:</strong><br>&bull; <strong>Frontend:</strong> React.js + SCSS (dynamiczne wyszukiwanie, filtry ceny i ocen, sortowanie).<br>&bull; <strong>Backend:</strong> Node.js + Express.js z bezpiecznym przechowywaniem haseł (bcryptjs).<br>&bull; <strong>Baza danych:</strong> Integracja z Supabase (zarządzanie użytkownikami, recenzjami i rezerwacjami).<br>&bull; <strong>Testy:</strong> Pełne pokrycie testami (Jest, Supertest, React Testing Library).",
            longDescEn: "An advanced booking platform for searching, reserving, and rating tourist accommodations. The project involved creating an intuitive interface and a robust backend.<br><br><strong>Key features and technologies:</strong><br>&bull; <strong>Frontend:</strong> React.js + SCSS (dynamic search, price/rating filters, sorting).<br>&bull; <strong>Backend:</strong> Node.js + Express.js with secure password storage (bcryptjs).<br>&bull; <strong>Database:</strong> Supabase integration (user, review, and booking management).<br>&bull; <strong>Testing:</strong> Full test coverage (Jest, Supertest, React Testing Library).",
            rolePl: "Full-stack Developer (Core Contributor)", roleEn: "Full-stack Developer (Core Contributor)",
            tag: "React / Node.js / Supabase", tagColor: "text-teal-500", extraClass: "", githubLink: "https://github.com/BergFilip/TerraQuest_web", liveLink: ""
        },
        {
            id: "terraquest-mob", category: "mobile",
            title: "TerraQuest Mobile", rgb: "6, 182, 212",
            inProgress: false, recentlyFinished: false,
            img: "", icon: '<i class="fa-solid fa-mobile-screen-button"></i>', iconBg: "bg-cyan-500/10 text-cyan-500",
            descPl: "Natywna aplikacja na Androida (Java) będąca mobilnym klientem platformy TerraQuest.",
            descEn: "Native Android application (Java) serving as the mobile client for the TerraQuest platform.",
            longDescPl: "Mobilna interpretacja ekosystemu TerraQuest, stworzona jako natywna aplikacja na system Android. Pozwala na szybkie odkrywanie atrakcji i zarządzanie rezerwacjami w podróży.<br><br><strong>Kluczowe osiągnięcia techniczne:</strong><br>&bull; <strong>UI:</strong> Implementacja zaawansowanych layoutów XML, Fragmentów oraz autorskich widoków (np. TrapezoidImageView).<br>&bull; <strong>Data Storage:</strong> Wykorzystanie lokalnej bazy danych SQLite (AppDatabaseHelper) do synchronizacji danych.<br>&bull; <strong>UX:</strong> System FAQ z wyszukiwarką, paginacją i animowanymi odpowiedziami.",
            longDescEn: "A mobile interpretation of the TerraQuest ecosystem, built as a native Android app. It allows for quick discovery of attractions and on-the-go booking management.<br><br><strong>Key technical achievements:</strong><br>&bull; <strong>UI:</strong> Implementation of advanced XML layouts, Fragments, and custom views (e.g., TrapezoidImageView).<br>&bull; <strong>Data Storage:</strong> Using local SQLite database (AppDatabaseHelper) for data synchronization.<br>&bull; <strong>UX:</strong> FAQ system with search, pagination, and animated responses.",
            rolePl: "Android Developer (Java)", roleEn: "Android Developer (Java)",
            tag: "Android / Java / SQLite", tagColor: "text-cyan-500", extraClass: "", githubLink: "https://github.com/KolegaTatar/TerraQuest_mobile", liveLink: ""
        },
        {
            id: "skyvision", category: "desktop",
            title: "SkyVision Desktop", rgb: "99, 102, 241",
            inProgress: false, recentlyFinished: false,
            img: "", icon: '<i class="fa-solid fa-cloud-sun"></i>', iconBg: "bg-indigo-500/10 text-indigo-500",
            descPl: "Intuicyjna aplikacja desktopowa (PyQt6) do monitorowania prognozy pogody w czasie rzeczywistym.",
            descEn: "Intuitive desktop application (PyQt6) for real-time weather forecast monitoring.",
            longDescPl: "Eleganckie narzędzie okienkowe korzystające z OpenWeatherMap API, dostarczające precyzyjne dane meteorologiczne dla dowolnego miejsca na świecie.<br><br><strong>Kluczowe osiągnięcia techniczne:</strong><br>&bull; <strong>Interfejs:</strong> Nowoczesny UI oparty na PyQt6 z obsługą motywów (QSS).<br>&bull; <strong>Analityka:</strong> Wizualizacja zmian temperatury i ciśnienia za pomocą biblioteki Matplotlib.<br>&bull; <strong>Integracja:</strong> Obsługa współrzędnych geograficznych i asynchroniczne pobieranie danych pogodowych.",
            longDescEn: "An elegant window-based tool using the OpenWeatherMap API, providing precise meteorological data for any location in the world.<br><br><strong>Key technical achievements:</strong><br>&bull; <strong>Interface:</strong> Modern UI based on PyQt6 with theme support (QSS).<br>&bull; <strong>Analytics:</strong> Temperature and pressure changes visualization using the Matplotlib library.<br>&bull; <strong>Integration:</strong> Geographical coordinates support and asynchronous weather data retrieval.",
            rolePl: "Python / Desktop Developer", roleEn: "Python / Desktop Developer",
            tag: "Python / PyQt6 / API", tagColor: "text-indigo-500", extraClass: "", githubLink: "https://github.com/KolegaTatar/SkyVision_desktop", liveLink: ""
        },
        {
            id: "animaster", category: "web",
            title: "Animaster", rgb: "168, 85, 247",
            inProgress: false, recentlyFinished: false,
            img: "img/animaster.webp", icon: '<i class="fa-solid fa-palette"></i>', iconBg: "bg-purple-500/10 text-purple-500",
            descPl: "Nowoczesna strona WWW z systemem CMS dla agencji eventowej.",
            descEn: "Modern website with CMS for an event agency.",
            longDescPl: "Kompleksowa realizacja komercyjna obejmująca wdrożenie pełnej strony internetowej z panelem zarządzania treścią. Celem było stworzenie wesołego, dynamicznego interfejsu przyciągającego zarówno rodziców, jak i biznesowych organizatorów imprez.<br><br><strong>Kluczowe osiągnięcia techniczne:</strong><br>&bull; Implementacja autorskich bloków Gutenberg w ekosystemie WordPress.<br>&bull; Głęboka optymalizacja zasobów statycznych (konwersja WebP, minifikacja CSS/JS), drastycznie zmniejszająca LCP.<br>&bull; Zintegrowanie zewnętrznych wtyczek i formularzy rezerwacyjnych dopasowanych do potrzeb klienta.",
            longDescEn: "A comprehensive commercial implementation involving a full website deployment with a CMS. The goal was to create a cheerful, dynamic interface attracting both parents and corporate event organizers.<br><br><strong>Key technical achievements:</strong><br>&bull; Implementation of custom Gutenberg blocks in the WordPress ecosystem.<br>&bull; Deep optimization of static assets (WebP conversion, CSS/JS minification), drastically reducing LCP.<br>&bull; Integration of external plugins and booking forms tailored to client needs.",
            rolePl: "Web Developer / Wykonawca", roleEn: "Web Developer / Contractor",
            tag: "WordPress", tagColor: "text-purple-500", githubLink: "", liveLink: "https://animaster.pl"
        },
        {
            id: "hendi", category: "web",
            title: "Hendi E-Learning", rgb: "59, 130, 246",
            inProgress: false, recentlyFinished: false,
            img: "img/hendi.webp", icon: '<i class="fa-solid fa-graduation-cap"></i>', iconBg: "bg-blue-500/10 text-blue-500",
            descPl: "Platforma szkoleniowa B2B (LMS) certyfikująca kontrahentów Hendi.",
            descEn: "B2B training platform (LMS) certifying Hendi contractors.",
            longDescPl: "Zamknięta platforma edukacyjna stworzona z myślą o weryfikacji i poszerzaniu wiedzy partnerów biznesowych. Narzędzie automatyzuje proces onboardingu sprzętowego.<br><br><strong>Kluczowe osiągnięcia techniczne:</strong><br>&bull; Konfiguracja zaawansowanego systemu LMS na bazie środowiska WordPress.<br>&bull; Wdrożenie mechanizmów weryfikacji odtwarzania wideo (zabezpieczenie przed przewijaniem).<br>&bull; Integracja modułu automatycznego wystawiania spersonalizowanych certyfikatów PDF po zaliczeniu końcowych quizów.",
            longDescEn: "A closed educational platform designed to verify and expand the knowledge of business partners. The tool automates the hardware onboarding process.<br><br><strong>Key technical achievements:</strong><br>&bull; Configuration of an advanced LMS system based on the WordPress environment.<br>&bull; Implementation of video playback verification mechanisms (anti-scrubbing).<br>&bull; Integration of a module for automatic generation of personalized PDF certificates upon completion of final quizzes.",
            rolePl: "E-learning Developer", roleEn: "E-learning Developer",
            tag: "WordPress / LMS", tagColor: "text-blue-500", githubLink: "", liveLink: "http://elearning.hendi.com/login/"
        },
        {
            id: "liczmy", category: "web",
            title: "Licz.my", rgb: "16, 185, 129",
            inProgress: false, recentlyFinished: false,
            img: "img/math_website.webp", icon: '<i class="fa-solid fa-calculator"></i>', iconBg: "bg-emerald-500/10 text-emerald-500",
            descPl: "Platforma edukacyjna do narzędzi matematycznych zrealizowana od podstaw.",
            descEn: "Educational platform for mathematical tools built from scratch.",
            longDescPl: "Edukacyjna witryna front-endowa prezentująca zbiór narzędzi i wzorów matematycznych. Projekt był poligonem doświadczalnym dla tworzenia w pełni responsywnych, kaskadowych układów stron bez użycia ciężkich bibliotek JS.<br><br><strong>Kluczowe osiągnięcia techniczne:</strong><br>&bull; Zbudowanie całej struktury DOM w oparciu o czysty semantyczny HTML5.<br>&bull; Sprawne wykorzystanie systemu siatek (Grid) z frameworka Bootstrap 5 do zarządzania layoutem.<br>&bull; Implementacja lekkich skryptów waniliowego JavaScriptu do obsługi interaktywnych elementów kalkulacyjnych.",
            longDescEn: "An educational front-end site presenting a collection of mathematical tools and formulas. The project served as a testing ground for creating fully responsive, cascading page layouts without heavy JS libraries.<br><br><strong>Key technical achievements:</strong><br>&bull; Built the entire DOM structure using pure semantic HTML5.<br>&bull; Efficient use of the grid system from the Bootstrap 5 framework for layout management.<br>&bull; Implementation of lightweight vanilla JavaScript scripts to handle interactive calculation elements.",
            rolePl: "UI / Front-end Developer", roleEn: "UI / Front-end Developer",
            tag: "HTML / CSS / Bootstrap", tagColor: "text-emerald-500", githubLink: "", liveLink: "https://kolegatatar.github.io/Bootstrap/Projekt/"
        },
        {
            id: "linkbridge", category: "web",
            title: "LinkBridge", rgb: "236, 72, 153",
            inProgress: false, recentlyFinished: false,
            img: "", icon: '<i class="fa-solid fa-link"></i>', iconBg: "bg-pink-500/10 text-pink-500",
            descPl: "Minimalistyczna, open-source'owa alternatywa dla Linktree skupiona na szybkości.",
            descEn: "A minimalist, open-source Linktree alternative focused on speed.",
            longDescPl: "Spontaniczny, 3-osobowy projekt zespołowy rozwijany na GitHubie. Aplikacja rozwiązuje problem centralizacji linków w bio na platformach społecznościowych, stawiając na najwyższą wydajność i estetykę.<br><br><strong>Kluczowe osiągnięcia techniczne:</strong><br>&bull; Stworzenie modularnej architektury komponentów w React i TypeScript (strict mode).<br>&bull; Wdrożenie zaawansowanego stylowania z wykorzystaniem preprocesora SCSS (metodologia BEM).<br>&bull; Uzyskanie perfekcyjnych wyników wydajnościowych (Lighthouse 100/100) dzięki konfiguracji bundlera Vite.",
            longDescEn: "A spontaneous, 3-person team project developed on GitHub. The app solves the problem of centralizing bio links on social platforms, focusing on peak performance and aesthetics.<br><br><strong>Key technical achievements:</strong><br>&bull; Created a modular component architecture in React and TypeScript (strict mode).<br>&bull; Implemented advanced styling using the SCSS preprocessor (BEM methodology).<br>&bull; Achieved perfect performance scores (Lighthouse 100/100) through Vite bundler configuration.",
            rolePl: "Front-end Contributor", roleEn: "Front-end Contributor",
            tag: "React / TS / Vite", tagColor: "text-pink-500", extraClass: "", githubLink: "https://github.com/KolegaTatar/LinkBridge", liveLink: ""
        },
        {
            id: "laravel", category: "web",
            title: "Laravel UserManager", rgb: "239, 68, 68",
            inProgress: false, recentlyFinished: false,
            img: "", icon: '<i class="fa-brands fa-laravel"></i>', iconBg: "bg-red-500/10 text-red-500",
            descPl: "Silnik backendowy (PHP) rozwiązujący problem administracji pracownikami.",
            descEn: "Backend engine (PHP) solving employee administration problems.",
            longDescPl: "Solidna aplikacja serwerowa typu Proof-of-Concept, która ilustruje głębokie zrozumienie programowania zorientowanego obiektowo w PHP. Narzędzie ułatwia zarządzanie danymi, działami oraz stanowiskami.<br><br><strong>Kluczowe osiągnięcia techniczne:</strong><br>&bull; Wdrożenie zaawansowanego wzorca MVC przy zachowaniu bardzo czystego routingu.<br>&bull; Integracja autoryzacji ACL i mechanizmów chroniących przed popularnymi atakami (CSRF, SQL Injection).<br>&bull; Skonfigurowanie relacji ORM (Eloquent) do wydajnego łączenia tabel bazy danych (One-to-Many, Many-to-Many).",
            longDescEn: "A robust Proof-of-Concept server application illustrating a deep understanding of object-oriented programming in PHP. The tool facilitates the management of data, departments, and positions.<br><br><strong>Key technical achievements:</strong><br>&bull; Implementation of an advanced MVC pattern while maintaining very clean routing.<br>&bull; Integration of ACL authorization and mechanisms protecting against common attacks (CSRF, SQL Injection).<br>&bull; Configured ORM relationships (Eloquent) for efficient database table linking (One-to-Many, Many-to-Many).",
            rolePl: "Backend PHP Developer", roleEn: "Backend PHP Developer",
            tag: "Laravel / Blade / PHP", tagColor: "text-red-500", extraClass: "", githubLink: "https://github.com/KolegaTatar/zsk_2023-2024_laravel", liveLink: ""
        },
        {
            id: "csharp", category: "desktop",
            title: "C# Currency Calculator", rgb: "217, 70, 239",
            inProgress: false, recentlyFinished: false,
            img: "", icon: '<i class="fa-solid fa-terminal"></i>', iconBg: "bg-fuchsia-500/10 text-fuchsia-500",
            descPl: "System terminalowy (konsola) wykonujący błyskawiczne konwersje finansowe.",
            descEn: "Terminal system (console) performing instant financial conversions.",
            longDescPl: "Aplikacja konsolowa .NET, która pod warstwą surowego terminala skrywa potężną, obiektową architekturę. Program służy do przechowywania rejestrów finansowych i przeliczania wartości w oparciu o ustalone algorytmy.<br><br><strong>Kluczowe osiągnięcia techniczne:</strong><br>&bull; Wykorzystanie zaawansowanych kolekcji C# oraz wyrażeń LINQ do manipulacji danymi.<br>&bull; Rygorystyczne trzymanie się zasad OOP (Hermetyzacja, Dziedziczenie, Polimorfizm).<br>&bull; Zaimplementowanie kompleksowego systemu walidacji danych wejściowych od użytkownika.",
            longDescEn: "A .NET console application that hides a powerful, object-oriented architecture beneath a raw terminal layer. The program is used to store financial records and convert values based on defined algorithms.<br><br><strong>Key technical achievements:</strong><br>&bull; Utilized advanced C# collections and LINQ expressions for data manipulation.<br>&bull; Strict adherence to OOP principles (Encapsulation, Inheritance, Polymorphism).<br>&bull; Implemented a comprehensive validation system for user input data.",
            rolePl: ".NET Software Engineer", roleEn: ".NET Software Engineer",
            tag: "C# / .NET", tagColor: "text-fuchsia-500", extraClass: "", githubLink: "https://github.com/KolegaTatar/Currency_Calculator", liveLink: ""
        },
        {
            id: "food", category: "web",
            title: "Food World", rgb: "249, 115, 22",
            inProgress: false, recentlyFinished: false,
            img: "", icon: '<i class="fa-solid fa-burger"></i>', iconBg: "bg-orange-500/10 text-orange-500",
            descPl: "Interfejs kliencki typu Landing Page naśladujący natywną aplikację.",
            descEn: "Landing Page client interface mimicking a native app.",
            longDescPl: "Interaktywna wizytówka typu One-Pager dla gastronomii. Oprócz prezentacji produktów, zadaniem kodu było dostarczenie użytkownikowi wrażeń znanych z płynnych aplikacji natywnych.<br><br><strong>Kluczowe osiągnięcia techniczne:</strong><br>&bull; Napisanie modularnego arkusza stylów (Flexbox/Grid), w 100% responsywnego (Mobile-First).<br>&bull; Zakodowanie złożonych animacji hover i przejść stron wyłącznie za pomocą natywnych własności CSS (transitions/transforms).<br>&bull; Logika domowego 'koszyka' oparta o lokalną manipulację drzewem DOM.",
            longDescEn: "An interactive One-Pager showcase for gastronomy. Besides presenting products, the code's task was to provide the user with an experience familiar from smooth native applications.<br><br><strong>Key technical achievements:</strong><br>&bull; Wrote a modular stylesheet (Flexbox/Grid), 100% responsive (Mobile-First).<br>&bull; Coded complex hover animations and page transitions using exclusively native CSS properties (transitions/transforms).<br>&bull; Homebrew 'cart' logic based on local DOM tree manipulation.",
            rolePl: "Front-end Developer", roleEn: "Front-end Developer",
            tag: "HTML / CSS / Bootstrap", tagColor: "text-orange-500", extraClass: "border border-dashed border-gray-400 dark:border-gray-700", githubLink: "", liveLink: "https://kolegatatar.github.io/Fast_Food_Restaurant_Website/"
        }
    ],

testimonials: [
    {
        name: "Koleje Wielkopolskie", 
        position: "Wpływ Projektu",
        textPl: "Wdrożenie autorskiego systemu KW Inwentarz pozwoliło na pełną cyfryzację ewidencji zasobów IT. Narzędzie wyeliminowało błędy w dokumentacji i znacząco przyspieszyło procesy administracyjne wewnątrz struktur firmy.",
        textEn: "The implementation of the custom KW Inventory system enabled full digitalization of IT resource tracking. The tool eliminated documentation errors and significantly accelerated administrative processes within the company structure.",
        avatar: '<i class="fa-solid fa-train"></i>'
    },
    {
        name: "Patrycja, Animaster", 
        position: "Modernizacja platformy",
        textPl: "Projekt obejmował kompleksowe odświeżenie i usprawnienie istniejącej strony WWW. Dzięki optymalizacji szybkości oraz wdrożeniu intuicyjnego systemu zarządzania ofertą, platforma stała się znacznie bardziej przystępna dla klientów i łatwiejsza w obsłudze dla zespołu.",
        textEn: "The project involved a comprehensive refresh and improvement of the existing website. Thanks to speed optimization and the implementation of an intuitive offer management system, the platform became much more accessible to clients and easier for the team to manage.",
        avatar: '<i class="fa-solid fa-user-tie"></i>'
    }
    ],

    certificates: [
        { id: "inf03", title: "INF.03", modalTitle: "Kwalifikacja INF.03", shortDesc: "Tworzenie aplikacji", descPl: "Tworzenie i administrowanie stronami internetowymi oraz bazami danych.", descEn: "Creating and administering websites and databases.", icon: '<i class="fa-solid fa-code"></i>', date: "06.2024", credentialId: "INF.03-XXXXX", link: "#" },
        { id: "inf04", title: "INF.04", modalTitle: "Kwalifikacja INF.04", shortDesc: "Projektowanie oprog.", descPl: "Projektowanie, programowanie i testowanie aplikacji.", descEn: "Designing, programming and testing applications.", icon: '<i class="fa-solid fa-laptop-code"></i>', date: "01.2026", credentialId: "INF.04-XXXXX", link: "#" },
        { id: "ccna1", title: "CCNA 1", modalTitle: "CCNA: Introduction to Networks", shortDesc: "Sieci Cisco", descPl: "Podstawy sieci komputerowych, budowa i konfiguracja.", descEn: "Computer networks basics, building and configuration.", icon: '<i class="fa-solid fa-server"></i>', date: "04.2025", credentialId: "CCNA1-XXXXX", link: "img/ccna.webp" },
        { id: "cisco", title: "CISCO", modalTitle: "CISCO IT Essentials", shortDesc: "IT Essentials", descPl: "Podstawy IT i budowa komputerów", descEn: "IT basics and computer build", icon: '<i class="fa-solid fa-network-wired"></i>', date: "06.2024", credentialId: "CSC-987654321", link: "img/ite.webp" },
        { id: "testing", title: "Testing", modalTitle: "Software Testing", shortDesc: "Testowanie Oprogram.", descPl: "Praktyczne testowanie oprogramowania", descEn: "Practical software testing", icon: '<i class="fa-solid fa-list-check"></i>', date: "05.2024", credentialId: "TST-123456789", link: "img/testing.webp" },
        { id: "postman", title: "Postman", modalTitle: "Postman API Testing", shortDesc: "API Testing", descPl: "Testowanie i walidacja API", descEn: "API testing and validation", icon: '<i class="fa-solid fa-space-shuttle"></i>', date: "05.2024", credentialId: "PST-456789123", link: "img/postman.webp" }
    ]
};

let currentLang = 'pl';
let currentFilter = 'all';

function renderPortfolio() {
    
    document.getElementById('skills-container').innerHTML = portfolioData.skills.map(s => 
        `<span class="px-4 py-2 bg-white dark:bg-[#202124] border border-gray-200 dark:border-gray-800 rounded-xl text-sm font-medium ${s.colorClass} shadow-sm transition-colors cursor-default hover:border-gray-300 dark:hover:border-gray-600">
            ${s.icon}${s.name}
        </span>`
    ).join('');

  
    const filteredProjects = currentFilter === 'all' 
        ? portfolioData.projects 
        : portfolioData.projects.filter(p => p.category === currentFilter);

    document.getElementById('projects-container').innerHTML = filteredProjects.map(p => {
        let badgeHtml = '';
        if (p.inProgress) {
            badgeHtml = `
                <div class="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-sm z-20">
                    <span class="relative flex h-2 w-2">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span class="text-[10px] font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider">${currentLang === 'pl' ? 'Rozwijane' : 'In Progress'}</span>
                </div>
            `;
        } else if (p.recentlyFinished) {
            badgeHtml = `
                <div class="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-sm z-20">
                    <i class="fa-solid fa-check-circle text-blue-500 text-xs"></i>
                    <span class="text-[10px] font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider">${currentLang === 'pl' ? 'Ostatnio ukończone' : 'Recently Finished'}</span>
                </div>
            `;
        }

        const bgClass = p.tagColor.replace('text-', 'bg-');
        const tagHtml = `<span class="text-xs font-bold ${p.tagColor} px-2 py-1 rounded-md bg-opacity-10 ${bgClass}">${p.tag}</span>`;

        if (p.img && p.img.length > 0) {
            return `<div onclick="openProjectModal('${p.id}')" style="--project-rgb: ${p.rgb};" class="project-card block bento-card rounded-3xl overflow-hidden group relative">
                ${badgeHtml}
                <div class="h-48 bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                    <img src="${p.img}" alt="${p.title}" loading="lazy" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" onerror="this.src='https://placehold.co/600x400/202124/B09E8D?text=Brak+Zdjecia'">
                </div>
                <div class="p-6">
                    <h4 class="project-title text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">${p.title}</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">${currentLang === 'pl' ? p.descPl : p.descEn}</p>
                    ${tagHtml}
                </div>
            </div>`;
        } else {
            return `<div onclick="openProjectModal('${p.id}')" style="--project-rgb: ${p.rgb};" class="project-card block bento-card rounded-3xl overflow-hidden group relative ${p.extraClass || ''}">
                ${badgeHtml}
                <div class="p-6 h-full flex flex-col justify-between z-10 relative">
                    <div>
                        <div class="project-icon w-12 h-12 ${p.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform">${p.icon}</div>
                        <h4 class="project-title text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">${p.title}</h4>
                        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">${currentLang === 'pl' ? p.descPl : p.descEn}</p>
                    </div>
                    <div class="mt-auto">${tagHtml}</div>
                </div>
            </div>`;
        }
    }).join('');

  
    document.getElementById('testimonials-container').innerHTML = portfolioData.testimonials.map(t => 
        `<div class="bento-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
                <i class="fa-solid fa-quote-left text-3xl text-primary/30 mb-4"></i>
                <p class="text-gray-600 dark:text-gray-300 italic mb-6 text-sm sm:text-base">"${currentLang === 'pl' ? t.textPl : t.textEn}"</p>
            </div>
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-xl text-gray-500 border border-gray-300 dark:border-gray-700">
                    ${t.avatar}
                </div>
                <div>
                    <h4 class="font-bold text-gray-900 dark:text-white text-sm">${t.name}</h4>
                    <p class="text-xs text-primary font-medium">${t.position}</p>
                </div>
            </div>
        </div>`
    ).join('');

  
    document.getElementById('certificates-container').innerHTML = portfolioData.certificates.map(c => 
        `<button onclick="openCertModal('${c.id}')" class="bg-white dark:bg-[#202124] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 text-center hover:border-primary dark:hover:border-primary transition-colors shadow-sm w-full">
            <div class="text-3xl text-primary mb-4">${c.icon}</div>
            <h4 class="text-gray-900 dark:text-white font-bold mb-1">${c.title}</h4>
            <p class="text-xs text-gray-500">${c.shortDesc}</p>
        </button>`
    ).join('');
}


function filterProjects(category) {
    currentFilter = category;
    
  
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        if(btn.getAttribute('data-filter') === category) {
            btn.classList.add('active', 'bg-primary', 'text-white', 'border-primary');
            btn.classList.remove('bg-white', 'dark:bg-darkCard', 'text-gray-700', 'dark:text-gray-300');
        } else {
            btn.classList.remove('active', 'bg-primary', 'text-white', 'border-primary');
            btn.classList.add('bg-white', 'dark:bg-darkCard', 'text-gray-700', 'dark:text-gray-300');
        }
    });

    renderPortfolio();
}

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.t').forEach(el => el.innerText = el.getAttribute(`data-${lang}`));
    document.getElementById('cv-link').href = lang === 'pl' 
        ? "Wiktor Tatarynowicz CV - pl.pdf" 
        : "Wiktor Tatarynowicz CV - en.pdf";
    document.getElementById('btn-pl').className = lang === 'pl' ? 'text-sm font-bold text-primary transition-colors' : 'text-sm font-bold text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors cursor-pointer';
    document.getElementById('btn-en').className = lang === 'en' ? 'text-sm font-bold text-primary transition-colors' : 'text-sm font-bold text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors cursor-pointer';
    
    typewriterText = lang === 'pl' 
        ? ["Web Developer", "Front-end Developer", "Pasjonat UI/UX", "Problem Solver"] 
        : ["Web Developer", "Front-end Developer", "UI/UX Enthusiast", "Problem Solver"];
    typeIndex = 0; charIndex = 0; isDeleting = false;

    renderPortfolio();
}

function toggleTheme() {
    const html = document.documentElement;
    const icon = document.getElementById('theme-icon');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        icon.className = "fa-solid fa-sun";
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.add('dark');
        icon.className = "fa-solid fa-moon";
        localStorage.setItem('theme', 'dark');
    }
}

if (localStorage.getItem('theme') === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
    document.documentElement.classList.remove('dark');
    document.getElementById('theme-icon').className = "fa-solid fa-sun";
}


const certModal = document.getElementById('certModal');
function openCertModal(id) {
    const data = portfolioData.certificates.find(c => c.id === id);
    if(!data) return;
    document.getElementById('certModalIcon').innerHTML = data.icon;
    document.getElementById('certModalTitle').innerText = data.modalTitle;
    document.getElementById('certModalSubtitle').innerText = currentLang === 'pl' ? data.descPl : data.descEn;
    document.getElementById('certModalDate').innerText = data.date;
    //document.getElementById('certModalId').innerText = data.credentialId;
    document.getElementById('certModalLink').href = data.link;

    certModal.classList.remove('modal-enter');
    certModal.classList.add('modal-enter-active');
    document.body.style.overflow = 'hidden';
}

function closeCertModal(e, force = false) {
    if (force || e.target === certModal) {
        certModal.classList.remove('modal-enter-active');
        certModal.classList.add('modal-enter');
        document.body.style.overflow = '';
    }
}


const projectModal = document.getElementById('projectModal');
function openProjectModal(id) {
    const p = portfolioData.projects.find(p => p.id === id);
    if(!p) return;

  
    const headerObj = document.getElementById('projectModalHeader');
    if(p.img && p.img.length > 0) {
        headerObj.innerHTML = `<img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover">`;
        headerObj.className = "w-full h-48 sm:h-64 rounded-t-3xl overflow-hidden relative bg-gray-200 dark:bg-gray-800 flex items-center justify-center";
    } else {
        headerObj.innerHTML = `<div class="w-24 h-24 sm:w-32 sm:h-32 ${p.iconBg} rounded-3xl flex items-center justify-center text-5xl sm:text-7xl shadow-lg border border-white/10">${p.icon}</div>`;
        headerObj.className = "w-full h-48 sm:h-64 rounded-t-3xl overflow-hidden relative bg-gray-100 dark:bg-[#161b22] flex items-center justify-center border-b border-gray-200 dark:border-gray-800";
    }

    document.getElementById('projectModalTitle').innerText = p.title;
    
    const bgClass = p.tagColor.replace('text-', 'bg-');
    document.getElementById('projectModalTags').innerHTML = `<span class="text-xs font-bold ${p.tagColor} px-3 py-1.5 rounded-md bg-opacity-10 ${bgClass} border border-opacity-20 border-current">${p.tag}</span>`;
    
    document.getElementById('projectModalRole').innerText = currentLang === 'pl' ? p.rolePl : p.roleEn;
    document.getElementById('projectModalDesc').innerHTML = currentLang === 'pl' ? p.longDescPl : p.longDescEn;


    let linksHtml = '';
    if (p.githubLink) {
        linksHtml += `<a href="${p.githubLink}" target="_blank" class="flex items-center gap-2 bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-6 py-2.5 rounded-xl font-bold hover:bg-primary dark:hover:bg-primary hover:text-white transition-colors text-sm"><i class="fa-brands fa-github text-lg"></i> GitHub</a>`;
    }
    if (p.liveLink) {
        linksHtml += `<a href="${p.liveLink}" target="_blank" class="flex items-center gap-2 border-2 border-primary text-primary px-6 py-2.5 rounded-xl font-bold hover:bg-primary hover:text-white transition-colors text-sm"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live</a>`;
    }
    document.getElementById('projectModalLinks').innerHTML = linksHtml;

    projectModal.classList.remove('modal-enter');
    projectModal.classList.add('modal-enter-active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal(e, force = false) {
    if (force || e.target === projectModal) {
        projectModal.classList.remove('modal-enter-active');
        projectModal.classList.add('modal-enter');
        document.body.style.overflow = '';
    }
}

let typewriterText = ["Web Developer", "Front-end Developer", "Pasjonat UI/UX", "Problem Solver"];
let typeIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeTarget = document.getElementById('typewriter-text');

function typeWriter() {
    if(!typeTarget) return;
    const currentWord = typewriterText[typeIndex];
    
    if (isDeleting) {
        typeTarget.innerText = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typeTarget.innerText = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typeIndex = (typeIndex + 1) % typewriterText.length;
        typeSpeed = 500;
    }

    setTimeout(typeWriter, typeSpeed);
}


renderPortfolio();
filterProjects('all');
typeWriter();