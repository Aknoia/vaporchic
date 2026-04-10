import { title } from "process";


type ServiceSectionData = {
    title: String;
    description: String;
    underText: String;
    img: string;
}

type ServicePlans = {
    name: String;
    prices: String;
    icon?: String;
}

export type ServiceData = {
    name: string;
    title: string;
    background: string;
    section1: ServiceSectionData;
    section2: ServiceSectionData;
    section3: ServiceSectionData;
    section4?: ServiceSectionData;
    section5?: ServiceSectionData;
    section6?: ServiceSectionData;

    tableTitle?: String;
    table: string[];

    preventivo: boolean;
    tabellaAuto: boolean;
    prices?: ServicePlans[];

    video1: string;
    video2: string;
    video3?: string;
    video4?: string;
    video5?: string;
    finalDescription: string;
}

export const listaServizi: Array<ServiceData> = [

    // Autovetture
    {
        name: 'Autovetture',
        title: "SANIFICAZIONE E PULIZIA VEICOLI INTERNO E LAVAGGIO ESTERNO A DOMICILIO SIRACUSA E PROVINCIA",
        background: "assets/gallery/autovetture/auto40.webp",

        section1: {
            title: "Servizio di <span class=\"highlight_txt\">AUTOMOTIVE</span> - Direttamente a domicilio con prodotti Waterless",
            description: `Pulizia accurata e dettagliata al <span class=\"underline highlight_txt2 \">minimo particolare</span> della vostra autovettura direttamente dentro la vostra abitazione con servizio esclusivo di lavaggio interno a vapore ed esterno con prodotti di <span class=\"highlight_txt2\">altissima qualità Waterless</span>.
                          <br>Altra novità? il <span class=\"highlight_txt_green\">CAR DETAILING</span>`,
            underText: "<span class=\"highlight_txt2\">COSA COMPRENDE</span><br>Aspirazione totale della tappezzeria della tua vettura compresa la zona del portabagagli eseguita con <span class=\"highlight_txt_green\">Vapore secco.</span><br><br>Lavaggio e sanificazione della <span class=\"highlight_txt2\">tappezzeria</span> auto eseguito con vapore secco<br>Questo trattamento di pulizia e sanificazione renderà <span class=\"highlight_txt_green\">sterile</span> il tessuto trattato eliminando macchie e batteri.<br><br>Lavaggio a vapore dei <span class=\"highlight_txt2\">tappetini</span> e della <span class=\"highlight_txt2\">moquette</span> presente. Inoltre verranno puliti e sgrassati anche il volante, i pedali e i binari guida dei sedili.<br> Trattamento di sanificazione e sterilizzazione dei <span class=\"highlight_txt2\">condotti dell'aria condizionata.</span> Solo l'utilizzo del vapore e dell'ozono riesce ad eliminare la carica batterica e le impurità presenti al suo interno. Rivolgiti a <span class=\"highlight_txt2\">VaporChic</span> per un lavaggio e una pulizia professionale dei tuoi arredi",
            img: "assets/gallery/autovetture/auto32.webp"
        },

        section2: {
            title: "LAVAGGIO ESTERNO AUTO CON VAPORE E DETERGENTI WATERLESS",
            description: "<span class=\"highlight_txt2\">VaporChic</span> propone un servizio per quel che riguarda la cura della tua <span class=\"highlight_txt2\">auto</span>. Dopo l'ormai famoso trattamento di pulizia interno svolto con <span class=\"highlight_txt_green\">vapore e detergenti sanificanti</span>, offriamo il servizio di pulizia dell'esterno della tua <span class=\"highlight_txt2\">auto</span> svolto a mano con l'utilizzo di <span class=\"highlight_txt_green\">vapore secco</span>, detergenti professionali “waterless” per sgrassare e pulire in profondità la <span class=\"highlight_txt2\">carrozzeria</span> e prodotti ceranti che donano lucentezza e protezione fino a 3 mesi. Inoltre offriamo un servizio di rigenerazione delle <span class=\"highlight_txt2\">plastiche interne</span> della vettura Rivolgiti a VaporChic per un lavaggio e una pulizia professionale",
            underText: '',
            img: "assets/gallery/autovetture/auto9.webp"
        },

        section3: {
            title: "ALTRI SERVIZI DI SANIFICAZIONE ALL'INTERNO DELLA TUA ABITAZIONE",
            description: "Oltre al lavaggio e la sanificazione degli interni ed esterni , ci sono altri servizi che ti proponiamo per la cura e la pulizia della tua casa e dei locali a Siracusa:",
            underText: '',
            img: ""
        },


        section4: {
            title: "DESIDERI CHE LA TUA AUTOVETTURA RITORNI COME PRIMA?",
            description: `Gli step di pulizia che eseguiamo per la tua <span class="highlight_txt2">autovettura alluvionata</span>:<br>
                            Passaggio 1: Affidarsi a <span class="highlight_txt_green">professionisti</span>.
                            L'aspirazione totale con <span class="highlight_txt_green">smontaggio completo della moquette e componentistica</span> che aiuterà a rimuovere lo <span class="highlight_txt">sporco e l' acqua restante</span> in modo di eliminarla e sanificarla.<br>
                            Passaggio 2: <span class="highlight_txt_green">pulizia accurata</span> con prodotti specifici per ogni materiale e asciugatura completa.<br>
                            Passaggio 3: montaggio e <span class="highlight_txt_green">sanificazione totale con ozono</span> per eliminazione <span class="highlight_txt">batteri, muffe e cattivi odori.</span>`,
            underText: `<span class="highlight_txt2">Pulizia accurata di ogni elemento della tua autovettura:</span><br>
                            La sanificazione è l'unico trattamento in grado di <span class="highlight_txt_green">eliminare fino al 99%</span> la carica microbica presente nell'aria e sulle superfici.<br>
                            Noi utilizziamo <span class="highlight_txt2">un generatore di ozono</span>, sostanza naturale, biodegradabile e sicura per la salute, che <span class="highlight_txt_green">igienizza e sanifica perfettamente.</span><br>
                            Una volta eseguito il trattamento ci assicuriamo di far arieggiare.`,
            img: "assets/gallery/autovetture/auto2.gif"
        },

        table: [
            "- Pulizia vetri, finestre, tapparelle, serrande, inferriate con l'utilizzo di macchinari a vapore secco",
            "- Lavaggio e pulizia servizi igienici con disinfettanti    e detergenti idonei, di tutti gli apparecchi igienico sanitari comuni",
            "- Lavaggio moquette - tappeti",
            "- Lavaggio pulizia e sanificazione materassi",
            "- Lavaggio pulizia e sanificazione Divani e Poltrone",
            "- Trattamenti per tutti i tipi di Tendaggi: Tende da sole - Gazebi Pvc - Ombrelloni. ",
            "- Trattamenti per Zanzariere - serrande - infissi",
            "- Pulizia Hotel - Case Vacanze",
            "- Pulizia Tende Veneziane",
            "- Lavaggio pulizia e sanificazione Tappezzerie",
            "- Sanificazione e sterilizzazione ambientale con ozono"
        ],


        preventivo: false,
        tabellaAuto: true,
        prices: [
            {
                name: "Lavaggio solo Esterno (Acqua)",
                prices: "20€",
            },

            {
                name: "Detailing solo interno",
                prices: "50€"
            },

            {
                name: "Lavaggio solo Tappezzeria",
                prices: "70€"
            }
        ],

        video1: "assets/video/autovetture.webm",
        video2: "assets/gallery/autovetture/auto2.webm",
        video3: "assets/video/auto2.webm",
        video4: "assets/video/auto3.webm",
        finalDescription: "L'Ozono è in grado di eliminare qualsiasi tipo di Virus, insetti, batteri, acari, agenti allergizzanti, muffe e spore che proliferano e rappresentano una costante minaccia soprattutto per bambini e anziani o per chi vive giornalmente l'ambiente dell'auto. I nostri dispositivi permettono invece di sanificare tutte le superfici, rimuovendo ogni odore, eliminando la carica batterica e assicurando la perfetta vivibilità, L'impatto ambientale dei sistemi della VaporChic è pari a zero, perché  convertono totalmente in ossigeno l'ozono residuo. Il Ministero della Salute lo ha riconosciuto come presidio per sterilizzare l'aria e gli ambienti in cui viviamo."
    },




    // Imbarcazioni
    {
        name: 'Imbarcazioni',
        title: "PULIZIA E SANIFICAZIONE BARCHE A SIRACUSA E PROVINCIA",
        background: "assets/gallery/imbarcazioni/imbarcazioni2.gif",

        section1: {
            title: "SANIFICAZIONE E IGIENIZZAZIONE BARCHE E YACHT",
            description: `Gli interni, anche in pelle, delle <span class=\"highlight_txt2\">barche o degli yacht</span> possono facilmente essere macchiati da olii e creme solari.<br>
                          Se esposti all'aperto anche il <span class=\"highlight_txt\">sole e la salsedine</span> possono aggredirli creando macchie e aloni antiestetici.<br>
                          Pulirli in maniera superficiale è facile e delle volte dannoso, infatti <span class=\"highlight_txt\">allergeni, macchie, muffe e cattivi odori</span> possono rimanere nonostante la pulizia.<br><br>`,
            underText: "Con il nostro rivoluzionario sistema di igienizzazione <span class=\"highlight_txt_green\">all'ozono</span> e lavaggio a <span class=\"highlight_txt_green\">vapore</span> della tappezzeria presente, possiamo garantire, in pochi minuti, la totale sanificazione degli interni del tuo <span class=\"highlight_txt2\">yacht</span> senza pericolo di rovinare gli interni della tua barca.",
            img: "assets/gallery/imbarcazioni/imbarcazioni1.gif"
        },

        section2: {
            title: "SANIFICAZIONE AMBIENTALE CON OZONO BARCHE E YACHT.",
            description: `Uno dei <span class=\"highlight_txt2\">Trattamenti più richiesti</span> è la sanificazione ambientale con <span class=\"highlight_txt_green\">Ozono</span> del tuo yacht poiché non comporta nessun pericolo per cose o oggetti.<br>
                          <span class=\"highlight_txt_green\">L'Ozono</span> ossida solamente materiale organico assicurandoti la totale sicurezza degli interni della tua barca.<br> 
                          In più <span class=\"highlight_txt_green\">l'ozono</span> è un gas naturale al 100% e potrai così riprendere le normali operazioni <span class=\"highlight_txt2 underline\">subito dopo il trattamento</span> di sanificazione.<br>
                          Cosa aspetti allora a garantire l'igiene del tuo <span class=\"highlight_txt2\">yacht</span>? <span class=\"highlight_txt_green underline_green\">Contattaci</span> e saremo lieti di offrirti ogni ulteriore informazione.`,
            underText: '',
            img: "assets/gallery/imbarcazioni/imbarcazioni3.gif"
        },

        section3: {
            title: "",
            description: "",
            underText: '',
            img: ""
        },

        tableTitle: "ALTRI SERVIZI",
        table: [
            "- Pulizia vetri, finestre, tapparelle, serrande, inferriate con l'utilizzo di macchinari a vapore secco",
            "- Lavaggio e pulizia servizi igienici con disinfettanti e detergenti idonei, di tutti gli apparecchi igienico sanitari comuni",
            "- Lavaggio moquette - tappeti",
            "- Lavaggio pulizia e sanificazione materassi",
            "- Lavaggio pulizia e sanificazione Divani e Poltrone",
        ],

        preventivo: true,
        tabellaAuto: false,

        video1: "assets/gallery/imbarcazioni/imbarcazioni7.webm",
        video2: "assets/video/barche.webm",
        video3: "",
        finalDescription: ""
    },



    // Divani e Poltrone
    {
        name: 'Divani, Sedie e Poltrone',
        title: "PULIZIA E SANIFICAZIONE DIVANI A SIRACUSA E PROVINCIA A DOMICILIO ",
        background: "assets/backgrounds/divanibg.webp",

        section1: {
            title: "LAVAGGIO, PULIZIA, SANIFICAZIONE ED IGIENIZZAZIONE DIVANI A SIRACUSA ",
            description: `Il lavaggio e la sanificazione a <span class=\"highlight_txt_green\">Vapore secco</span> a 180° del divano include diverse fasi che hanno come obiettivo la completa sterilizzazione e igienizzazione di ogni suo componente.<br>
                          Il metodo di pulizia professionale di <span class=\"highlight_txt2\">VaporChic</span>per i divani e poltrone si svolge seguendo precisi passaggi di sterilizzazione.`,
            underText: `Il lavaggio e la sanificazione a vapore dei <span class=\"highlight_txt2\">divani</span> e delle <span class=\"highlight_txt2\">poltrone</span> eseguito con trattamento a vapore, elimina al 99% la carica batterica presente nel tessuto.<br>
                        Questo <span class=\"highlight_txt2\">speciale trattamento</span>, ci permette di <span class=\"highlight_txt_green\">aspirare, lavare e igienizzare in profondità</span> eliminando qualsiasi tipo di sporco e macchie presente.`,
            img: "assets/gallery/divani/divano6.webp"
        },

        section2: {
            title: "Il risultato è eccellente anche per i divani in pelle.",
            description: `Il <span class=\"highlight_txt2\">vapore ad alta temperatura</span> favorisce la <span class=\"highlight_txt_green\">completa eliminazione del grasso e dello sporco</span> che si concentrano anche sui materiali in pelle.
                          Trattiamo <span class=\"highlight_txt2\">ogni tipo di divano</span> e ogni tipo di materiale con il massimo della cura e dell'efficienza.<br>
                          `,
            underText: 'Rivolgiti a <span class=\"highlight_txt2\">VaporChic</span> per un lavaggio e una pulizia professionale dei tuoi divani in pelle o in tessuto',
            img: "assets/gallery/divani/divani11.webp"
        },

        section3: {
            title: "ALTRI SERVIZI DI SANIFICAZIONE ALL'INTERNO DELLA TUA ABITAZIONE",
            description: ``,
            underText: '',
            img: ""
        },

        section4: {
            title: "DESIDERI PULIRE LE TUE SEDIE?",
            description: `Gli step di pulizia che eseguiamo per le tue sedie / poltrone:<br>
                            <span class=\"highlight_txt2\">Passaggio 1</span>: Controllo tessuto con aspirazione;
                            L'aspirazione aiuterà a rimuovere lo sporco e la polvere che si sono accumulati sulle sedie<br>
                            <span class=\"highlight_txt2\">Passaggio 2</span>: pulizia accurata e smacchiatura con prodotti biodegrabili.<br>
                            <span class=\"highlight_txt2\">Passaggio 3</span>: spazzolamento.<br>
                            Pulizia accurata di ogni elementi delle sedie utilizzando prodotti specifici per ogni materiale.`,
            underText: `<span class=\"highlight_txt2\">Passaggio 4</span>: sanificare e smacchiatura con asciugatura uniforme.<br>
                            La sanificazione è l'unico trattamento in grado di <span class=\"highlight_txt_green\">eliminare fino al 99%</span> la <span class=\"highlight_txt\">carica microbica</span> presente nell'aria e sulle superfici.<br>
                            Noi utilizziamo un <span class=\"highlight_txt2\">generatore di ozono</span>, sostanza naturale, biodegradabile e sicura per la salute, <span class=\"highlight_txt_green\">che igienizza e sanifica perfettamente</span>`,
            img: "assets/gallery/divani/sedie2.webp",
        },

        preventivo: false,
        tabellaAuto: false,
        prices: [
            {
                name: "Lavaggio Standard Chic (A Domicilio)",
                prices: "80€",
            },
        ],

        table: [
            "- Pulizia vetri, finestre, tapparelle, serrande, inferriate con l'utilizzo di macchinari a vapore secco",
            "- Lavaggio e pulizia servizi igienici con disinfettanti e detergenti idonei, di tutti gli apparecchi igienico sanitari comuni",
            "- Lavaggio moquette",
            "- Lavaggio pulizia e sanificazione materassi e tappeti",
            "- Lavaggio pulizia e sanificazione Divani e Poltrone ",
            "- Trattamenti per tutti i tipi di pavimenti: gresporcellanato, gres effetto legno, parquet, marmo, granito, cemento, pietra, linoleum, pvc, ecc",
            "- Sgrassatura pavimenti con mono spazzola",
            "- Sanificazioni cucine a vapore",
            "- Lavaggio pulizia e sanificazione Tappeti",
            "- Sanificazione e sterilizzazione ambientale con ozono"
        ],

        video1: "assets/gallery/divani/divani12.webm",
        video2: "assets/video/divani.webm",
        video3: "assets/gallery/divani/divani.webm",
        finalDescription: ""
    },


    // Materassi
    {
        name: 'Materassi',
        title: "Servizi di Pulizia Materassi a Domicilio Siracusa",
        background: "assets/gallery/materassi/materassi15.webp",

        section1: {
            title: "PULIZIA E LAVAGGIO ANTI ACARO PER MATERASSI, CON STERILIZZAZIONE E TRATTAMENTO ANTI BATTERICO.",
            description: `Uno dei <span class=\"highlight_txt2\">trattamenti più performanti</span> e richiesti a VaporChic è il servizio di igienizzazione di <span class=\"highlight_txt2\">materassi</span><br>
                          L'efficacia del trattamento di lavaggio <span class=\"highlight_txt2\">materassi</span> sanificante con azione <span class=\"highlight_txt_green\">antiacaro e antibatterico</span> è dovuta alla temperatura del <span class=\"highlight_txt_green\">vapore secco</span> fino a 180° che consente di eliminare tutti gli <span class=\"highlight_txt\">elementi nocivi</span> che si annidano nelle fibre del materasso<br>
                          `,
            underText: "Il servizio di lavaggio e sanificazione <span class=\"highlight_txt2\">materassi</span> può essere svolto <span class=\"highlight_txt2\">a domicilio</span> su tutta Siracusa e provincia, una soluzione comoda per il cliente che può così usufruire di un servizio di igienizzazione efficiente senza alcuna difficoltà.",
            img: "assets/gallery/materassi/materassi11.webp"
        },

        section2: {
            title: "STERILIZZAZIONE DELLA TUO MATERASSO CON TRATTAMENTO AD OZONO",
            description: `Un altro trattamento che la <span class=\"highlight_txt2\">Vaporchic</span> propone è la sterilizzazione ambientale con <span class=\"highlight_txt_green\">Ozono.</span><br>
                          <span class=\"highlight_txt_green\">L'ozono</span> è un gas caratterizzato da altissime capacità ossidanti e <span class=\"highlight_txt_green\">disinfettanti.</span><br>
                          <span class=\"highlight_txt_green\">L'Ozono</span> è in grado di eliminare qualsiasi tipo di <span class=\"highlight_txt\">Virus, insetti, batteri, acari, agenti allergizzanti, muffe e spore</span> che proliferano e rappresentano una costante minaccia soprattutto per bambini ed anziani<br>`,
            underText: 'I nostri dispositivi permettono invece di sanificare <span class=\"highlight_txt2\">tutte le superfici<span>, rimuovendo ogni odore, eliminando la carica batterica e assicurando la perfetta vivibilità',
            img: "assets/gallery/materassi/materassi3.webp"
        },

        section3: {
            title: "ALTRI SERVIZI DI SANIFICAZIONE ALL'INTERNO DELLA TUA ABITAZIONE",
            description: "",
            underText: '',
            img: ""
        },

        preventivo: false,
        tabellaAuto: false,
        prices: [
            {
                name: "Lavaggio Standard Chic (A Domicilio)",
                prices: "70€",
            },
        ],

        table: [
            "- Pulizia vetri, finestre, tapparelle, serrande, inferriate con l'utilizzo di macchinari a vapore secco",
            "- Pulizia infissi, zanzariere, tende da sole, ombrelloni.",
            "- Trattamenti per tutti i tipi di pavimenti: gres porcellanato, gres effetto legno, parquet, marmo, granito, cemento, pietra, linoleum, pvc, ecc",
            "- Lavaggio e pulizia servizi igienici con disinfettanti e detergenti idonei, di tutti gli apparecchi igienico sanitari comuni",
            "- Sanificazioni cucine a vapore",
            "- Lavaggio moquette",
            "- Sgrassatura pavimenti con mono spazzola",
            "- Lavaggio pulizia e sanificazione Divani",
            "- Lavaggio pulizia e sanificazione Tappeti",
            "- Lavaggio pulizia e sanificazione Poltrone",
            "- Sanificazione e sterilizzazione ambientale con ozono"
        ],

        video1: "assets/gallery/materassi/materassi1.webm",
        video2: "",
        video3: "",
        finalDescription: ""
    },




    // Tappeti
    {
        name: 'Tappeti',
        title: "Servizi di Pulizia Tappeti a Siracusa e Provincia",
        background: "assets/gallery/tappeti/tappeti1.webp",

        section1: {
            title: "PULIZIA E SANIFICAZIONE CON VAPORE SECCO DI TAPPETI A SIRACUSA",
            description: `Tra i servizi proposti da <span class=\"highlight_txt2\">VaporChic</span> c'è la pulizia e la sanificazione <span class=\"highlight_txt_green\">a vapore secco</span> di tappeti a domicilio su tutta Siracusa<br>
                          La nostra procedura si svolge attraverso diverse <span class=\"highlight_txt2\">fasi</span> ed è in grado di garantire una <span class=\"highlight_txt_green\">perfetta pulizia</span> e igienizzazione per i tuoi <span class=\"highlight_txt2\">tappeti</span>:<br>
                          Inizialmente una <span class=\"highlight_txt_green\">completa aspirazione</span> del tappeto.<br>
                          Seconda aspirazione del tappeto eseguita con la <span class=\"highlight_txt_green\">spazzola a vapore</span> per liberarlo dalle <span class=\"highlight_txt\">impurità</span>.<br>
                          In caso di <span class=\"highlight_txt\">macchie persistenti</span> si effettua un trattamento che prevede l'impiego <span class=\"highlight_txt2\">contemporaneo</span> sulla macchia di <span class=\"highlight_txt_green\">vapore e aspirazione</span>`,
            underText: `Successivo passaggio finale del <span class=\"highlight_txt_green\">vapore</span> su tutto il tappeto per un trattamento <span class=\"highlight_txt_green\">anti-acaro e anti-batterico</span> che elimina il 99% della carica batterica per un'efficace igienizzazione.<br>
                        Questa fase di lavoro <span class=\"highlight_txt_red\">non prevede</span> il lavaggio ad acqua del tappeto.`,
            img: "assets/gallery/tappeti/tappeti8.gif"
        },

        section2: {
            title: "Risultato Eccellente",
            description: `Il risultato è eccellente la pulizia dei tappeti.<br>
                          Il <span class=\"highlight_txt_green\">vapore ad alta temperatura</span> favorisce la completa eliminazione <span class=\"highlight_txt\">del grasso e dello sporco</span> che si concentrano sulle fibre<br>
                          Trattiamo <span class=\"highlight_txt2\">ogni tipo di tappeto</span> e ogni tipo di materiale con il massimo della cura e dell'efficienza.`,
            underText: '',
            img: "assets/gallery/tappeti/tappeti7.webp"
        },

        section3: {
            title: "ALTRI SERVIZI DI SANIFICAZIONE ALL'INTERNO DELLA TUA ABITAZIONE",
            description: "",
            underText: '',
            img: ""
        },


        preventivo: false,
        tabellaAuto: false,
        prices: [
            {
                name: "Ritiro e Consegna Domicilio",
                prices: "15,90€ al m2",
            },
        ],

        table: [
            "- Pulizia vetri, finestre, tapparelle, serrande, inferriate con l'utilizzo di macchinari a vapore secco",
            "- Lavaggio e pulizia servizi igienici con disinfettanti e detergenti idonei, di tutti gli apparecchi igienico sanitari comuni",
            "- Lavaggio moquette",
            "- Lavaggio pulizia e sanificazione materassi",
            "- Lavaggio pulizia e sanificazione Divani e Poltrone",
            "- Trattamenti per tutti i tipi di Tendaggi: Tende da sole - Gazebi Pvc - Ombrelloni. ",
            "- Pulizia Hotel - Case Vacanze ",
            "- Sanificazioni cucine a vapore",
            "- Lavaggio pulizia e sanificazione Tappezzerie",
            "- Sanificazione e sterilizzazione ambientale con ozono"
        ],

        video1: "assets/gallery/tappeti/tappeti.webm",
        video2: "assets/gallery/tappeti/tappeti3.webm",
        video3: "assets/gallery/tappeti/tappeti8.webm",
        video4: "assets/gallery/tappeti/tappeti7.webm",
        finalDescription: ""
    },




    // Locali Commerciali 
    {
        name: 'Locali Commerciali',
        title: "PULIZIA LOCALI COMMERCIALI",
        background: "assets/backgrounds/localibg.webp",

        section1: {
            title: "PULIZIE: SPECIALIZZATI IN OGNI TIPO DI SERVIZIO!",
            description: `<span class=\"highlight_txt2\">Vaporchic</span> convoglia l'impegno di <span class=\"highlight_txt_green\">operatori specializzati</span> in ogni singolo settore insieme all'esperienza maturata nel corso degli anni<br>
                          Mettiamo a disposizione dei suoi clienti dei <span class=\"highlight_txt2\">Piani Pulizia digitali e personalizzati</span> adatti ad ogni tipo di ambiente e struttura, sempre seguendo i corretti protocolli di pulizia.`,
            underText: `<span class=\"highlight_txt2\">Vaporchic</span> si serve di <span class=\"highlight_txt_green\">attrezzature e macchinari specifici</span> oltre che di detergenti e sanificanti adatti a garantire alti livelli igienici ambientali.<br>
                          Da anni prestiamo attenzione ad aspetti fondamentali di pulizia.`,
            img: "assets/gallery/locali/locali44.webp"
        },

        section2: {
            title: "PULIZIA CAPPE DA CUCINA",
            description: `La Pulizia delle <span class="highlight_txt2">Cappe da Cucina</span> è importante per mantenere gli stanrdard sanitari, sia nelle <span class="highlight_txt2">Abitazioni</span>, che nei <span class="highlight_txt2">Ristoranti</span><br>
                          Offriamo un Servizio Professionale di <span class="highlight_txt2">pulizia e sanificazione</span> straordinaria, un lavaggio accurato per garantire la <span class="highlight_txt_green">massima sanificazione</span>`,
            underText: "",
            img: "assets/gallery/cappe/cappe4.webp",
        },

        section3: {
            title: "EFFETTUIAMO SERVIZI DI PULIZIE ORDINARIE PER:",
            description: ``,
            underText: '',
            img: ""
        },


        section4: {
            title: "PULIZIA VETRINE NEGOZI",
            description: `<span class=\"highlight_txt2\">Il vetro</span> è al giorno d'oggi uno dei principali elementi che caratterizzano diverse superfici sia degli edifici che delle nostre abitazioni o altre tipologie di strutture.<br>
                            È bene però tenere a mente <span class=\"highlight_txt2\">alcune complessità</span> che <span class=\"highlight_txt_red\">potrebbero compromettere</span> l'eleganza del vetro, basti pensare alla tendenza di sporcarsi facilmente portando alla formazione di <span class=\"highlight_txt\">sporco, macchie ed aloni</span>.<br>
                            Inoltre si tratta di un materiale particolarmente delicato, a tal proposito è opportuno conoscere le <span class=\"highlight_txt_green\">migliori tecniche</span> per trattarlo al meglio.<br>`,
            underText: `Tra i metodi più utilizzati per eseguire una pulizia vetrine professionale vi è il <span class=\"highlight_txt2\">trattamento nanotecnologico protettivo</span>: si tratta di un procedimento innovativo e rapido da svolgere in diverse fasi con l'intento di <span class=\"highlight_txt_green\">decontaminare ed asportare lo sporco</span> profondo attraverso una lucidatura all'avanguardia<br><br>
                            Effettuare la pulizia di vetri e vetrine è un lavoro duro e faticoso: <span class=\"highlight_txt_green\">smacchiare, strofinare e detergere</span> può portare via tanto tempo e fatica.<br>
                            A tal proposito, affidarsi ad <span class=\"highlight_txt2\">un'azienda specializzata</span> in pulizie vetrine permette di ottenere una <span class=\"highlight_txt_green\">lucidatura ottimale</span> grazie ai mezzi e alle strumentazioni moderne utilizzate dal personale qualificato al fine di ottenere un notevole risparmio sull'acquisto di formule detergenti e sgrassanti.
                            L'impresa specializzata è pronta a soddisfare qualsiasi richiesta ed <span class=\"highlight_txt2\">effettuerà un sopralluogo per stabilire l'entità dell'intervento</span>.<br><br>
                            Generalmente i prezzi della pulizia vetrine variano dai <span class=\"highlight_txt\">2 euro al metro quadro</span> per mansioni di tipo domestico ma <span class=\"highlight_txt\">i costi possono aumentare</span> se lo sporco è profondo e tenace, se si tratta di un materiale pregiato e delicato o di grandi vetrine difficili da raggiungere.`,
            img: "assets/gallery/vetrate/vetrine.webp"
        },

        preventivo: true,
        tabellaAuto: false,

        table: [
            "- Asili e scuole",
            "- Uffici di tutte le metrature",
            "- Centri commerciali e capannoni",
            "- Sale riunioni e conferenze",
            "- Centri congressi",
            "- Negozi",
            "- Condomini",
            "- Garage",
            "- Alberghi",
            "- Autosaloni",
            "- Banche",
            "- Biblioteche",
            "- Cinema e teatri",
            "- Centri sportivi",
            "- Piscine",
            "- Enti pubblici",
            "- Ristoranti",
            "- Supermercati",
            "- Vetrate",
            "- Appartamenti e ville vuote o abitate.",
            "- Cucina e Cappe"
        ],

        video1: "assets/gallery/locali/locali13.webm",
        video2: "assets/video/locali2.webm",
        video3: "assets/gallery/locali/locali48.webm",
        video4: "assets/gallery/locali/locali51.webm",
        finalDescription: ""
    },




    // Abitazioni 
    {
        name: 'Abitazioni',
        title: "SERVIZI DI PULIZIA ABITAZIONI, VILLETTE E CASE VACANZE",
        background: "assets/backgrounds/casabg.gif",

        section1: {
            title: "DESIDERI FAR RINASCERE LA TUA CASA?",
            description: `Le pulizie straordinarie di un <span class=\"highlight_txt2\">appartamento</span> sono un'operazione di <span class=\"highlight_txt_green\">pulizia profonda</span> e più completa rispetto a quella ordinaria, che si svolge con minor frequenza.<br>
                          Includono attività come il lavaggio di <span class=\"highlight_txt2\">tende, persiane e tapparelle</span>, la pulizia degli interni di <span class=\"highlight_txt2\">cassetti e armadi</span>, la rimozione della<span class=\"highlight_txt\"> polvere e dello sporco</span> accumulati dietro mobili e dietro le superfici, la <span class=\"highlight_txt_green\">pulizia approfondita</span> dei <span class=\"highlight_txt2\">sanitari e dei pavimenti<span>, e trattamenti specifici su pavimenti, tappeti e superfici.`,
            underText: `Una pulizia superficiale può sembrare sufficiente, ma in realtà <span class=\"highlight_txt_red\">non è in grado di eliminare</span> completamente lo <span class=\"highlight_txt\">sporco e i batteri</span> presenti in un ambiente.<br>
                        Questi accumuli possono causare <span class=\"highlight_txt_red\">problemi di salute</span>`,
            img: "assets/gallery/abitazioni/casa19.webp"
        },

        section2: {
            title: "PULIZIA CON OZONO DI ALBERGHI ED HOTEL IN TUTTA LA ZONA DI SIRACUSA E PROVINCIA",
            description: `<span class=\"highlight_txt_green\">Ozonizzazione</span> di stanze per eliminare qualsiasi tipo di carica batterica e odori da <span class=\"highlight_txt2\">materassi, bagni, armadi e moquette</span>.<br>
                          <span class=\"highlight_txt_green\">Sterilizzazione a vapore</span> dei servizi sanitari<br>
                          Lavaggio a vapore di <span class=\"highlight_txt2\">Materassi/Divani/Poltrone</span><br>
                          Lavaggio a vapore e a freddo di <span class=\"highlight_txt2\">Moquette</span><br>
                          Sgrossi a vapore di cucine e ambienti di lavoro<br>`,
            underText: '',
            img: "assets/gallery/abitazioni/albergo.webp"
        },

        section3: {
            title: "ALTRI SERVIZI DI SANIFICAZIONE ALL'INTERNO DELLA TUA ABITAZIONE",
            description: "",
            underText: '',
            img: ""
        },


        section4: {
            title: "PULIZIA GRONDAIE",
            description: `<span class=\"highlight_txt\">Foglie, detriti e sporcizia</span> con il tempo possono <span class=\"highlight_txt2\">accumularsi nei canali di scolo</span>, provocando acqua stagnante e ostruzioni.<br>
                          <span class=\"highlight_txt_red\">Questo è un male</span>, perché finisce col vanificare la funzione delle grondaie che hanno proprio lo scopo di controllare il flusso dell'acqua piovana<br>
                          Se il flusso è bloccato, a causa dello sporco raccolto, possono insorgere problemi come danni alle facciate e infiltrazioni, oltre a favorire la proliferazione di parassiti. `,
            underText: `<span class=\"highlight_txt2\">la cura di questi elementi è fondamentale</span>, in genere, è consigliabile dedicarsi a questa attività almeno <span class=\"highlight_txt2\">2 volte all'anno</span> anche se, in presenza di alberi vicini, sarebbe meglio farlo più assiduamente.`,
            img: "assets/gallery/abitazioni/grondaie.webp"
        },

        preventivo: true,
        tabellaAuto: false,
        table: [
            "- Disinfezione ambientale",
            "- Disinfezione casa",
            "- Disinfestazione ambientale",
            "- Disinfestazione cimici da letto - acari",
            "- Pulizia e Smacchiatura Materassi",
            "- Cucina e Cappe"
        ],

        video1: "assets/gallery/abitazioni/casa6.webm",
        video2: "assets/gallery/abitazioni/casa7.webm",
        video3: "assets/gallery/abitazioni/casa8.webm",
        finalDescription: ""
    },



    
    // Animali
    {
        name: 'Animali',
        title: "PULIZIA E RIMOZIONE URINE - VOMITO - ODORI SGRADEVOLI DEI VOSTRI ANIMALI DOMESTICI SU DIVANI E TAPPETI",
        background: "assets/backgrounds/animalibg.webp",

        section1: {
            title: "Come rimuoviamo gli odori dai divani con animali domestici?",
            description: `<span class=\"highlight_txt\">Urina, peli e secrezioni animali</span> possono impregnare il tessuto, rendendo difficile la rimozione con i classici detergenti domestici.<br>
                          <span class=\"highlight_txt2\">Vaporchic</span> offre un trattamento professionale di <span class=\"highlight_txt_green\">lavaggio profondo</span> con metodo iniezione-estrazione a vapore, capace di eliminare non solo lo sporco visibile, ma anche gli odori alla radice`,
            underText: "",
            img: "assets/gallery/vomito/canetappeto.webp"
        },

        section2: {
            title: "Il nostro metodo di pulizia",
            description: `<span class=\"highlight_txt2\">1)</span> Iniezione di <span class=\"highlight_txt_green\">detergente biocida</span>: utilizziamo una soluzione specifica a base di agenti neutralizzanti degli odori, che penetra fino a 6-7 cm di profondità nei tessuti.<br>
                          <span class=\"highlight_txt2\">2)</span> Spazzolatura manuale: per <span class=\"highlight_txt\">rimuovere peli e residui organici</span>, favorendo la penetrazione del detergente tra le fibre.<br>
                          <span class=\"highlight_txt2\">3)</span> Estrazione potenziata: grazie a un macchinario professionale a vapore con potenza di aspirazione superiore, <span class=\"highlight_txt\">eliminiamo sporco, umidità e residui chimici.</span><br>
                          `,
            underText: `<span class=\"highlight_txt2\">4)</span> Pettinatura delle fibre: per ridare al tessuto un aspetto uniforme e una sensazione di freschezza.<br>
                          <span class=\"highlight_txt2\">5)</span> Asciugatura rapida: evitiamo la formazione di muffe e ristagni, garantendo un divano pronto all'uso in poche ore.`,
            img: "assets/gallery/vomito/gatto.webp"
        },

        section3: {
            title: "Vantaggi del nostro trattamento professionale",
            description: `<span class=\"highlight_txt_green\">Eliminazione profonda</span> degli odori: non copriamo il problema con profumi temporanei, ma lo risolviamo alla radice.<br>
                          Tecnologia avanzata: il nostro macchinario professionale a vapore rimuove fino al 99% dei residui organici.<br>
                          <span class=\"highlight_txt_green\">Prodotti ecologici e sicuri</span>: non tossici per te e i tuoi animali domestici.<br>
                          Asciugatura veloce: il divano sarà quasi completamente asciutto e pronto all'uso in breve tempo.<br>
                          <span class=\"highlight_txt2\">Adatto a tutti i tipi di tessuto</span>: trattiamo divani in tessuto, pelle, nabuk, alcantara , microfibra e velluto senza rischi.`,
            underText: '',
            img: ""
        },

        preventivo: true,
        tabellaAuto: false,

        tableTitle: "ALTRI SERVIZI DI SANIFICAZIONE ALL'INTERNO DELLA TUA ABITAZIONE",
        table: [
            "- Disinfezione ambientale",
            "- Disinfezione casa",
            "- Disinfestazione ambientale",
            "- Disinfestazione cimici da letto - acari",
            "- Pulizia e Smacchiatura Materassi"
        ],

        video1: "",
        video2: "",
        video3: "",
        finalDescription: ""
    },




    // ambiente
    {
        name: 'Ambienti',
        title: "SANIFICAZIONE E DISINFESTAZIONE AMBIENTALE A SIRACUSA E PROVINCIA",
        background: "assets/backgrounds/sanificazionebg.webp",

        section1: {
            title: "SERVIZI DI DISINFESTAZIONE A SIRACUSA E PROVINCIA: SCEGLI COSA UTILIZZARE",
            description: `<span class=\"highlight_txt2\">Il Termonebbiogeno</span> è un generatore di nebbia calda, insetticida, che consente la <span class=\"highlight_txt_green\">disinfestazione e disinfezione</span> degli ambienti dove vivi e lavori.<br>
                          Questo strumento satura totalmente l'ambiente trattato poiché, essendo una nebbia fitta, riesce a penetrare ovunque e in modo sicuro.<br>
                          Indicato per <span class=\"highlight_txt_red\">eliminare mosche e zanzare e insetti come blatte e scarafaggi</span>.`,
            underText: "",
            img: "assets/gallery/ambiente/ambientale1.webp"
        },

        section2: {
            title: "DISINFEZIONE CIMICI DA LETTO",
            description: `Le infestazioni da <span class=\"highlight_txt_red\">cimici da letto</span> sono un problema ormai da qualche anno in continuo divenire.<br>
                          Si possono annidare in ogni più piccolo pertugio della tua <span class=\"highlight_txt2\">casa o locale</span> e solo dopo accurata analisi da parte dei nostri esperti si può attuare un piano di ”attacco” per debellare questi focolai.<br>
                          La VaporChic offre <span class=\"highlight_txt_green\">il più completo e variegato trattamento</span> per la rimozione delle cimici da letto`,
            underText: 'Andremo ad utilizzare <span class=\"highlight_txt2\">generatori di vapore secco</span> con una temperatura che supera i 180° per causare uno shock termico utile a debellare anche eventuali uova presenti,',
            img: "assets/gallery/ambiente/cimici.webp"
        },

        section4: {
            title: 'SANIFICAZIONE OZONO AUTO, ABITAZIONI E LOCALI: IN COSA CONSISTE',
            description: `<span class=\"highlight_txt_green\">La sanificazione con ozono</span> è la procedura più efficace per purificare l'abitacolo dell'auto o le stanze di un abitazione.<br>
                            Essa avviene attraverso l'azione di <span class=\"highlight_txt2\">saturazione dell'abitacolo o stanza</span> e dell'impianto di climatizzazione tramite un'emissione controllata di ozono che sterilizza totalmente l'ambiente.<br>
                            La pulizia viene svolta utilizzando un generatore brevettato che trasforma l'Ossigeno (O2) presente nell'aria in Ozono (O3).
                            Le <span class=\"highlight_txt_green\">molecole di ozono</span> aggrediscono e neutralizzano <span class=\"highlight_txt\">i virus e le particelle</span> causa dei cattivi odori, lasciando al loro posto una gradevole sensazione di pulito e <span class=\"highlight_txt2\">un'aria rigenerata e deodorata</span>.
                            Il generatore di ozono viene posizionato all'interno dell'abitacolo auto e attivato per il processo di sanificazione.`,
            underText: `Una volta azionato il <span class=\"highlight_txt2\">generatore di ozono</span> eroga la miscela gassosa che si interromperà dopo aver raggiunto la concentrazione prefissata.<br>
                            Al termine del trattamento, il generatore in automatico riassorbe le molecole di ozono ancora presenti nell'abitacolo e le riconverte in ossigeno.<br>
                            In questo modo l'auto sarà <span class=\"highlight_txt_green\">sanificata</span> e pronta per essere consegnata al cliente utilizzatore.`,
            img: 'assets/gallery/ambiente/ambientale2.webp'
        },

        section3: {
            title: "ALTRI SERVIZI DI SANIFICAZIONE ALL'INTERNO DELLA TUA ABITAZIONE",
            description: "",
            underText: '',
            img: ""
        },

        preventivo: true,
        tabellaAuto: false,

        table: [
            "- Pulizia vetri, finestre, tapparelle, serrande, inferriate con l'utilizzo di macchinari a vapore secco",
            "- Lavaggio e pulizia servizi igienici con disinfettanti e detergenti idonei, di tutti gli apparecchi igienico sanitari comuni",
            "- Lavaggio moquette - tappeti",
            "- Lavaggio pulizia e sanificazione materassi",
            "- Lavaggio pulizia e sanificazione Divani e Poltrone",
            "- Trattamenti per tutti i tipi di Tendaggi: Tende da sole - Gazebi Pvc - Ombrelloni.",
            "- Trattamenti per Zanzariere - serrande - infissi",
            "- Pulizia Hotel - Case Vacanze",
            "- Pulizia Tende Veneziane",
            "- Lavaggio pulizia e sanificazione Tappezzerie",
            "- Sanificazione e sterilizzazione ambientale con ozono"
        ],

        video1: "assets/gallery/ambiente/ambientale.webm",
        video2: "assets/gallery/ambiente/ambientale2.webm",
        video3: "assets/gallery/ambiente/ambientale4.webm",
        video4: "assets/gallery/ambiente/ambientale5.webm",
        finalDescription: ""
    },



    /* Camper e Roulotte */
    {
        name: 'Camper e Roulotte',
        title: "Servizio di Pulizia Camper - Roulotte",
        background: "assets/backgrounds/camperbg.webp",

        section1: {
            title: "SANIFICAZIONE E IGIENIZZAZIONE CAMPER E ROULOTTE",
            description: `Gli interni, anche in pelle, dei <span class=\"highlight_txt2\">camper o delle roulotte</span> possono facilmente essere macchiati in viaggio o su posto fisso.<br>
                          Pulirli in maniera <span class=\"highlight_txt\">superficiale</span> è facile ma il più delle volte <span class=\"highlight_txt_red\">dannoso</span>.<br>
                          Allergeni, macchie, muffe e cattivi odori possono rimanere nonostante la pulizia.<br>
                          Con il nostro <span class=\"highlight_txt_green\">rivoluzionario sistema di igienizzazione all'ozono</span> e lavaggio a vapore della tappezzeria presente, garantendo la totale sanificazione degli interni del tuo <span class=\"highlight_txt2\">camper</span> senza pericolo di rovinare gli interni.`,
            underText: "",
            img: "assets/gallery/camper/bagnocamper.webp"
        },

        section2: {
            title: "SANIFICAZIONE AMBIENTALE CON OZONO CAMPER E ROULOTTE.",
            description: `Uno dei trattamenti <span class=\"highlight_txt2\">più richiesti</span> è la sanificazione ambientale con <span class=\"highlight_txt_green\">Ozono</span> del tuo camper poiché non comporta nessun pericolo per cose o oggetti.<br>
                          <span class=\"highlight_txt_green\">L'ozono</span> ossida solamente materiale organico assicurandoti la totale sicurezza degli interni della tuo camper o della tua roulotte.`,
            underText: '',
            img: "assets/gallery/camper/murocamper.webp"
        },

        section3: {
            title: "ALTRI SERVIZI",
            description: "",
            underText: '',
            img: ""
        },

        preventivo: false,
        tabellaAuto: false,
        prices: [
            {
                name: "Furgonato",
                prices: "300€",
                icon: "/assets/icons/furgonato.webp"
            },

            {
                name: "Mansardato",
                prices: "400€",
                icon: "/assets/icons/mansardato.webp"
            },

            {
                name: "Roulotte",
                prices: "400€",
                icon: "/assets/icons/roulotte.webp"
            },

            {
                name: "Integrale",
                prices: "450€",
                icon: "/assets/icons/integrale.webp"
            }
        ],

        table: [
            "- Pulizia Completa interna camper - roulotte",
            "- Lavaggio e pulizia servizi igienici con disinfettanti e detergenti idonei, di tutti gli apparecchi igienico sanitari comuni.",
            "- Lavaggio moquette - tappeti",
            "- Lavaggio pulizia e sanificazione materassi",
            "- Lavaggio pulizia e sanificazione Divani e Poltrone"
        ],

        video1: "assets/gallery/camper/camper6.webm",
        video2: "assets/gallery/camper/camper7.webm",
		video3: "assets/gallery/camper/camper8.webm",
        video4: "assets/gallery/camper/camper9.webm",
        finalDescription: ""
    },




    // Incendi
    {
        name: 'Incendi',
        title: "PULIZIA STRAORDINARIA DA INCENDI",
        background: "assets/gallery/incendi/incendio.gif",

        section1: {
            title: "DESIDERI FAR RINASCERE LA TUA CASA POST INCENDIO?",
            description: `<span class=\"highlight_txt_red\">Gli incidenti</span> a volte avvengono ed in quei casi tutto ciò che rimane da fare è rimboccarsi le maniche ed agire di conseguenza.<br>
                          Uno di questi casi è proprio quello in cui ci si trova a dover <span class=\"highlight_txt2\">ripristinare gli ambienti</span> dopo un incendio.
                          La pulizia post incendio segue un <span class=\"highlight_txt_green\">protocollo studiato</span> per rimuovere <span class=\"highlight_txt\">odori, residui e tracce di materiali cancerogeni</span>.
`,
            underText: `<span class=\"highlight_txt2\">Aspirazione delle polveri</span>.<br>
                        In ogni <span class=\"highlight_txt_red\">incendio</span> si sviluppano varie <span class=\"highlight_txt_red\">sostanze nocive</span>.<br>
                        Esse possono essere trasportate all'esterno insieme ai <span class=\"highlight_txt\">gas di combustione</span>, o legarsi a residui come <span class=\"highlight_txt\">fuliggine o cenere</span> con il rischio di inalazione.<br>
                        In questi casi non è sufficiente una normale aspirazione ma si rende necessario l'impiego di attrezzature professionali come gli <span class=\"highlight_txt_green\">aspiratori industriali</span>.<br>
                        questi assicurano un effetto <span class=\"highlight_txt2\">sgrassante e anti-odorante</span> per una prima ed efficace decontaminazione.`,
            img: "assets/gallery/incendi/incendio.webp"
        },

        /*section2: {
            title: "DECONTAMINAZIONE MANUALE",
            description: `Con un accurato <span class=\"highlight_txt_green\">processo di decontaminazione manuale</span>, particolarmente indicato per le attrezzature elettroniche e le superfici più delicate, si procede al ripristino di locali e materiali danneggiati.<br>
                          Oltre a circoscrivere i danni, questa pratica consente di <span class=\"highlight_txt2\">decontaminare e riposizionare mobili e arredi recuperabili</span>.`,
            underText: `<span class=\"highlight_txt2\">PULIZIA CRIOGENICA</span>.<br>
                        Si tratta di un processo di <span class=\"highlight_txt_green\">pulizia a secco</span> che, attraverso uno shock termico e tramite l'utilizzo di <span class=\"highlight_txt2\">palline di ghiaccio secco</span>, permette il distacco di grasso, incrostazioni, vernici e simili senza lasciare residui.<br>
                        Il ghiaccio secco è la forma solida del carbon disossido (CO2): <span class=\"highlight_txt2\">è incolore, inodore e insapore</span>, è un elemento <span class=\"highlight_txt_green\">naturale</span> della nostra atmosfera ed ha una temperatura di -79°.<br>
                        Utilizzando la Co2 trasformata in ghiaccio secco come una <span class=\"highlight_txt_green\">valida alternativa</span> alla classica sabbiatrice, si ottiene un <span class=\"highlight_txt2\">risultato eccellente</span> a fronte di un processo totalmente ecologico e molto meno oneroso.`,
            img: "assets/gallery/incendi/incendio4.webp"
        },*/

        section2: {
            title: "",
            description: ``,
            underText: '',
            img: ""
        },

        section3: {
            title: "",
            description: ``,
            underText: '',
            img: ""
        },

        preventivo: true,
        tabellaAuto: false,
        table: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
        ],

        video1: "assets/gallery/incendi/incendio.webm",
        video2: "assets/gallery/incendi/incendio2.webm",
		video3: "assets/gallery/incendi/incendio4.webm",
        video4: "assets/gallery/incendi/incendio5.webm", 
        finalDescription: ""
    },




    // Car Detailing
    {
        name: 'Car Detailing',
        title: "SCOPRI IL SERVIZIO DI CAR DETAILING A SIRACUSA",
        background: "assets/backgrounds/cardetailing.gif",

        section1: {
            title: "CAR DETAILING E SANIFICAZIONE CON VAPORE SECCO A SIRACUSA",
            description: `Tra i servizi proposti da <span class=\"highlight_txt2\">VaporChic</span>, c'è la pulizia e la sanificazione <span class=\"highlight_txt_green\">a vapore secco</span> di tappezzeria<br> 
                            il <span class=\"highlight_txt2\">car detailing</span> a domicilio di autovetture, camper e barche su tutta Siracusa
                            è un servizio rivolto a chi vuole un trattamento professionale al <span class=\"highlight_txt_green">minimo dettaglio</span>.
                            Il <span class=\"highlight_txt2\">Detailing Interno</span> è un trattamento mirato alla pulizia, igienizzazione e sanificazione di <span class=\"highlight_txt2\">tutte le superfici</span> dell'abitacolo (pelli, tessuti, plastiche, moquette, inserti in radica e metalli).<br>
                            `,
            underText: "Una lavorazione accurata, estremamente tecnica, eseguita con attenzione e rispetto di tutte le superfici trattate.",
            img: "assets/gallery/autovetture/auto28.webp"
        },

        section2: {
            title: "RISULTATO ECCELLENTE",
            description: `<span class=\"highlight_txt_green\">Il risultato è eccellente</span> anche per la pulizia delle <span class=\"highlight_txt2\">tappezzerie, dei pannelli, della moquette ,delle autovetture</span> in pelle.<br>
                            Il <span class=\"highlight_txt_green\">vapore ad alta temperatura</span> favorisce la <span class=\"highlight_txt2\">completa eliminazione</span> del grasso e dello sporco che si concentrano sui pannelli e sulle fibre.
                            <span class=\"highlight_txt2\">Trattiamo ogni tipo di tappezzeria</span> e ogni tipo di materiale con il massimo della cura e dell'efficienza.<br>
                            Rivolgiti a <span class=\"highlight_txt2\">VaporChic</span> per un lavaggio e una pulizia professionale delle tue tappezzerie, per il car detailing che potrai comodamente ricevere a domicilio`,
            underText: ``,
            img: "assets/gallery/autovetture/auto40.gif"
        },

        section3: {
            title: "ALTRI SERVIZI DI CAR DETAILING",
            description: "",
            underText: '',
            img: ""
        },

        preventivo: true,
        tabellaAuto: false,
        table: [
            "- Pulizia Car detailing completo",
            "- Lavaggio e pulizia completa del settore automotive, barche, camper, autobus, roulotte, treni.",
            "- Lavaggio moquette e sanificazione",
            "- Ripristino Volanti in Pelle",
            "- Ripristino Pomelli Auto",
            "- Rimozione Soft Touch",
            "- Rimozione Graffi Parabrezza",
            "- Ripristino Fari Abitacolo",
            "- Pulizia a Vapore Tappezzeria - Tessuto - Alcantara - Pelle - Similpelle",
            "- Pulizia a Vapore Pannelli laterali",
            "- Pulizia a Vapore Moquette + Rimozione Peli Animali",
            "- Pulizia a Vapore Condotti aria Abitacolo",
            "- Pulizia a Vapore Motore Abitacolo",
            "- Pulizia e Smacchiatura  Cielo Tetto",
            "- Pulizia Tappezzeria e Volanti in Pelle + Protezione",
            "- Sanificazione Abitacolo Ozono"
        ],

        video1: "assets/gallery/autovetture/auto8.webm",
        video2: "assets/gallery/autovetture/auto20.webm",
		video3: "assets/gallery/autovetture/auto37.webm",
        video4: "assets/gallery/autovetture/furgone.webm",
        video5: "assets/gallery/autovetture/auto44.webm",
        finalDescription: ""
    },



    // Tende da sole e Gazebo
    {
        name: 'Tende da sole e Gazebo',
        title: "SERVIZI DI PULIZIA PER TENDE DA SOLE A SIRACUSA",
        background: "assets/gallery/tende/tende1.gif",

        section1: {
            title: "PULIZIA E SANIFICAZIONE CON VAPORE SECCO DI TENDONI A SIRACUSA",
            description: `Tra i servizi proposti da <span class=\"highlight_txt2\">VaporChic</span>, c'è la pulizia e la sanificazione a vapore secco di <span class=\"highlight_txt_green\">tende da sole, gazebi e ombrelloni</span> a domicilio su tutta Siracusa.<br>
                            Un servizio rivolto a tutte le famiglie che vogliono un trattamento professionale per le proprie <span class=\"highlight_txt2\">persiane</span>, che spesso sono elementi di arredamento trascurati e non trattati in modo adeguato.`,
            underText: `il nostro metodo di <span class=\"highlight_txt_green\">pulizia professionale</span> si basa su un processo completo di lavaggio e sanificazione a vapore secco a 180°.<br>
                            Questo approccio avanzato ci permette di poter lavorare con un <span class=\"highlight_txt2\">macchinario a vapore</span> che oltre a sgrassare arriva nei punti piu' difficili per poter pulire.`,
            img: "assets/gallery/tende/tende3.webp"
        },

        section2: {
            title: "RISULTATO ECCELLENTE",
            description: `Il risultato è eccellente anche per la pulizia delle <span class=\"highlight_txt2\">zanzarire, tende, veneziane, infissi e grandi vetrine.</span><br>
                            Infatti, il <span class=\"highlight_txt\">vapore ad alta temperatura</span> favorisce la <span class=\"highlight_txt\">completa eliminazione dello sporco</span> che si concentrano sulle fessure interne delle persiane e serrande.
                            <span class=\"highlight_txt2\">Trattiamo ogni tipo di superficie e materiale</span> con il massimo della cura e dell'efficienza. `,
            underText: '',
            img: "assets/gallery/tende/tende5.webp"
        },

        section3: {
            title: "ALTRI SERVIZI DI SANIFICAZIONE ALL'INTERNO DELLA TUA ABITAZIONE",
            description: "",
            underText: '',
            img: ""
        },

        preventivo: true,
        tabellaAuto: true,
        table: [
            "- Pulizia vetri, finestre, tapparelle, serrande, inferriate con l'utilizzo di macchinari a vapore secco",
            "- Lavaggio e pulizia servizi igienici con disinfettanti e detergenti idonei, di tutti gli apparecchi igienico sanitari comuni",
            "- Lavaggio moquette - tappeti",
            "- Lavaggio pulizia e sanificazione materassi",
            "- Lavaggio pulizia e sanificazione Divani e Poltrone",
            "- Trattamenti per tutti i tipi di Tendaggi: Tende da sole - Gazebi Pvc - Ombrelloni.",
            "- Trattamenti per Zanzariere - serrande - infissi",
            "- Pulizia Hotel - Case Vacanze",
            "- Pulizia Tende Veneziane",
            "- Lavaggio pulizia e sanificazione Tappezzerie",
            "- Sanificazione e sterilizzazione ambientale con ozono"
        ],

        video1: "assets/gallery/tende/tende.webm",
        video2: "",
		video3: "",
        finalDescription: ""
    },




    // Tappezzeria
    {
        name: 'Tappezzeria',
        title: "PULIZIA E SANIFICAZIONE TAPPEZZERIE AUTOVETTURE  A SIRACUSA E PROVINCIA",
        background: "assets/gallery/autovetture/auto30.webp",

        section1: {
            title: "PULIZIA E SANIFICAZIONE CON VAPORE SECCO DI TAPPEZZERIE A SIRACUSA",
            description: `Tra i servizi proposti da <span class=\"highlight_txt2\">VaporChic</span>, c'è la pulizia e la <span class=\"highlight_txt_green\">sanificazione a vapore secco</span> di tappezzeria a domicilio<br>
                            Un servizio rivolto a tutte le famiglie che vogliono un <span class=\"highlight_txt2\">trattamento professionale</span> per le proprie tappezzerie.<br>
                            La nostra procedura si svolge attraverso diverse fasi ed è in grado di <span class=\"highlight_txt_green\">garantire una perfetta pulizia</span> e igienizzazione delle tappezzerie:<br>
                            In primis, una <span class=\"highlight_txt_green\">completa aspirazione</span> del sedile.<br>
                            Seconda aspirazione del sedile eseguita con la spazzola a vapore per <span class=\"highlight_txt\">liberarlo dalle impurità</span>.`,
            underText: `In caso di <span class=\"highlight_txt\">macchie persistenti</span> si effettua un <span class=\"highlight_txt2\">trattamento</span> che prevede l'impiego contemporaneo sulla macchia di <span class=\"highlight_txt_green\">vapore e aspirazione</span>, per garantire una pulizia completa per i tuoi tessuti.<br>
                            Successivo passaggio finale del vapore sulle tappezzerie per un trattamento <span class=\"highlight_txt2\">anti-acaro e anti-batterico</span> che elimina il 99% della carica batterica, per un'efficace igienizzazione.<br>
                            Questa fase di lavoro non prevede il lavaggio ad acqua della tappezzeria.`,
            img: "assets/gallery/autovetture/auto17.webp"
        },

        section2: {
            title: "RISULTATO ECCELLENTE",
            description: `<span class=\"highlight_txt2\">il vapore ad alta temperatura</span> favorisce la <span class=\"highlight_txt_green\">completa eliminazione</span> del grasso e dello sporco che si concentrano sulle fibre.<br>
                            <span class=\"highlight_txt2\">Trattiamo ogni tipo di tappezzeria</span> e ogni tipo di materiale con il massimo della cura e dell'efficienza.<br>
                            Rivolgiti a <span class=\"highlight_txt2\">VaporChic</span> per un lavaggio e una pulizia professionale delle tue tappezzerie, che potrai comodamente ricevere a domicilio`,
            underText: '',
            img: "assets/gallery/autovetture/tappezzerie.webp"
        },

        section3: {
            title: "ALTRI SERVIZI DI SANIFICAZIONE ALL'INTERNO ED ESTERNO AUTOMOTIVE",
            description: ``,
            underText: '',
            img: ""
        },
        

        section4: {
            title: "PULIZIA E SANIFICAZIONE DI BOX PIZZA E SEGGIOLINI",
            description: `Tra i servizi proposti da <span class=\"highlight_txt2\">VaporChic</span> c'è la pulizia e la sanificazione a vapore secco di <span class=\"highlight_txt2\">Box pizza e Seggiolini</span> a domicilio<br>
                            Un servizio rivolto a chi lavora nel mondo della ristorazione, e che vuole un <span class=\"highlight_txt_green\">trattamento professionale</span> per i propri strumenti.<br>
                            La nostra procedura è in grado di garantire una <span class=\"highlight_txt_green\">perfetta pulizia</span> di Box Pizza e Zaini (Glovo, Deliveroo)<br>
                            Inoltre offriamo servizi per la sanificazione di <span class=\"highlight_txt2\">Seggiolini e Sedili</span><br>`,
            underText: '',
            img: "assets/images/glovo.webp"
        },


        section5: {
            title: "PULIZIA E SANIFICAZIONE LETTINI",
            description: `Tra i servizi proposti da <span class=\"highlight_txt2\">VaporChic</span> c'è la pulizia e la sanificazione a vapore secco dei <span class=\"highlight_txt2\">Lettini da Spiaggia</span> a domicilio<br>
                            Un servizio rivoltoper chi vuole un <span class=\"highlight_txt_green\">trattamento professionale</span> per i propri strumenti.<br>
                            La nostra procedura è in grado di garantire una <span class=\"highlight_txt_green\">perfetta pulizia</span> dei lettini ed i cuscinetti<br>`,
            underText: '',
            img: "assets/gallery/lettini/lettini.webp"
        },

        preventivo: true,
        tabellaAuto: false,
        table: [
            "- Pulizia Car detailing completo",
            "- Lavaggio e pulizia completa del settore automotive, barche, camper, autobus, roulotte, treni.",
            "- Lavaggio moquette e sanificazione",
            "- Ripristino Volanti in Pelle",
            "- Ripristino Pomelli Auto",
            "- Rimozione Soft Touch",
            "- Rimozione Graffi Parabrezza",
            "- Ripristino Fari Abitacolo",
            "- Pulizia a Vapore Tappezzeria - Tessuto - Alcantara   Pelle - Similpelle",
            "- Pulizia a Vapore Pannelli laterali",
            "- Pulizia a Vapore Moquette + Rimozione Peli Animali",
            "- Pulizia a Vapore Condotti aria Abitacolo",
            "- Pulizia a Vapore Motore Abitacolo",
            "- Pulizia e Smacchiatura  Cielo Tetto",
            "- Pulizia Tappezzeria e Volanti in Pelle + Protezione",
            "- Sanificazione Abitacolo Ozono"
        ],

        video1: "assets/gallery/autovetture/auto20.webm",
        video2: "assets/gallery/autovetture/auto21.webm",
		video3: "assets/gallery/autovetture/auto8.webm",
        video4: "assets/gallery/autovetture/auto13.webm",
        finalDescription: ""
    },




    // Pulzia Straordinaria
    {
        name: 'Pulizia Straordinaria',
        title: "PULIZIA STRAORDINARIA APPARTAMENTI UFFICI - LOCALI - RISTORANTI ",
        background: "assets/backgrounds/straordinaria.gif",

        section1: {
            title: "DESIDERI FAR RINASCERE LA TUA CASA - LOCALE - HOTEL - CASA VACANZE?",
            description: `Le <span class="highlight_txt2">Pulizie straordinarie</span> di un appartamento sono un'operazione di <span class="highlight_txt_green">pulizia profonda e più completa</span> rispetto a quella ordinaria, che si svolge con minor frequenza.<br>
                            Includono attività come il <span class="highlight_txt2">lavaggio di tende, persiane e tapparelle</span>, la pulizia degli interni di <span class="highlight_txt2">cassetti e armadi</span>, la <span class="highlight_txt">rimozione della polvere e dello sporco</span> accumulati dietro mobili e dietro le superfici, la pulizia approfondita dei <span class="highlight_txt2">sanitari e dei pavimenti</span>, e trattamenti specifici su <span class="highlight_txt2">pavimenti, tappeti e superfici</span>.`,
            underText: `<span class="highlight_txt2">Pulizia accurata di ogni elementi della tua casa, locali commerciali, hotel e casa vacanza</span><br>
                            Le pulizie straordinarie sono un tipo di pulizia che viene eseguito quando è necessario eseguire una <span class="highlight_txt_green">pulizia più accurata e approfondita</span> rispetto alle normali pulizie quotidiane.<br>
                            Questo tipo di pulizia viene eseguito periodicamente, in genere ogni 6 mesi o una volta all'anno, a seconda delle esigenze dell'ambiente da pulire<br>
                            Una <span class="highlight_txt">pulizia superficiale può sembrare sufficiente</span>, ma in realtà <span class="highlight_txt_red">non è in grado di eliminare</span> completamente lo sporco e i batteri presenti in un ambiente.
            `,
            img: "assets/gallery/locali/locali16.webp"
        },

        section2: {
            title: "PULIZIE STRAORDINARIE: QUANDO SONO NECESSARIE?",
            description: `Le attività di servizi di questo tipo <span class="highlight_txt_green">sono particolarmente importanti</span> in determinati ambienti, <span class="highlight_txt2">come gli ospedali, le scuole, gli uffici, i ristoranti e i locali pubblici</span> in generale, dove è necessario garantire la massima igiene e pulizia per <span class="highlight_txt">evitare il rischio di contagio e malattie</span>.<br>
                            Ci sono anche <span class="highlight_txt2">alcune situazioni</span> in cui le pulizie straordinarie sono <span class="highlight_txt_green">particolarmente importanti</span>.<br>
                            Ad esempio: `,
            underText: `<span class="highlight_txt_red">Durante un'epidemia o una pandemia</span>, quando la pulizia e la disinfezione degli ambienti diventano fondamentali per prevenire la diffusione di malattie.<br> 
                            <span class="highlight_txt">Dopo un'alluvione o un incendio</span>, la pulizia e la sanificazione degli ambienti sono essenziali per evitare danni ulteriori e ripristinare le condizioni igieniche degli spazi. <br>
                            Se si tratta di <span class="highlight_txt">eliminare polvere e detriti dopo una ristrutturazione</span>, utilizza aspirapolvere industriali e altri strumenti specifici per rimuovere le impurità.`,
            img: "assets/gallery/locali/locali14.webp"
        },

        section3: {
            title: "ALTRI SERVIZI DI SANIFICAZIONE ALL'INTERNO DELLA TUA ABITAZIONE",
            description: "",
            underText: '',
            img: "assets/gallery/abitazioni/casa8.webp"
        },


        section4: {
            title: "I nostri servizi di levigatura, lucidatura e trattamento dei pavimenti.",
            description: `La lucidatura dei <span class="highlight_txt2">pavimenti</span> in marmo rappresenta un intervento di <span class="highlight_txt_green">manutenzione fondamentale</span> per mantenere il pavimento sempre in perfette condizioni.<br>
                            Per questo motivo, utilizziamo <span class="highlight_txt2">macchine di ultima generazione</span> dotate di sistema “planetario” che ci consentono di lavorare con maggiore precisione.<br>
                            Grazie alla tecnologia all'avanguardia di cui ci siamo dotati, riusciamo a svolgere la <span class="highlight_txt_green">levigatura e lucidatura</span> dei pavimenti in marmo anche in ambienti appena ristrutturati, <span class="highlight_txt">senza sporcare le pareti o allagare eccessivamente le superfici</span>.<br>              
            `,
            underText: `<span class="highlight_txt2">TRATTAMENTO PAVIMENTI IN COTTO E PVC</span><br>
                            La manutenzione dei <span class="highlight_txt2">pavimenti in cotto</span> è generalmente effettuata con l'utilizzo di una macchina monospazzola per una <span class="highlight_txt_green">pulizia approfondita</span>, in grado di <span class="highlight_txt_green">rimuovere lo sporco e i residui accumulati</span> nel tempo.<br>
                            La successiva applicazione di un <span class="highlight_txt_green">trattamento protettivo</span> è un passaggio fondamentale per creare una <span class="highlight_txt2">barriera sulla superficie del pavimento</span> che lo protegga dalle <span class="highlight_txt">macchie e dalla penetrazione di liquidi</span>.<br>
                            La protezione del pavimento può essere <span class="highlight_txt_green">ulteriormente potenziata</span> utilizzando prodotti specifici come <span class="highlight_txt2">cere e resine protettive</span>.
                `,
            img: "assets/gallery/abitazioni/casa8.webp"  
        },


        section5: {
            title: "PULIZIA GRONDAIE",
            description: `<span class=\"highlight_txt\">Foglie, detriti e sporcizia</span> con il tempo possono <span class=\"highlight_txt2\">accumularsi nei canali di scolo</span>, provocando acqua stagnante e ostruzioni.<br>
                          <span class=\"highlight_txt_red\">Questo è un male</span>, perché finisce col vanificare la funzione delle grondaie che hanno proprio lo scopo di controllare il flusso dell'acqua piovana<br>
                          Se il flusso è bloccato, a causa dello sporco raccolto, possono insorgere problemi come danni alle facciate e infiltrazioni, oltre a favorire la proliferazione di parassiti. `,
            underText: `<span class=\"highlight_txt2\">la cura di questi elementi è fondamentale</span>, in genere, è consigliabile dedicarsi a questa attività almeno <span class=\"highlight_txt2\">2 volte all'anno</span> anche se, in presenza di alberi vicini, sarebbe meglio farlo più assiduamente.`,
            img: "assets/gallery/abitazioni/grondaie.webp"
        },

        section6: {
            title: "PULIZIA CAPPE DA CUCINA",
            description: `La Pulizia delle <span class="highlight_txt2">Cappe da Cucina</span> è importante per mantenere gli stanrdard sanitari, sia nelle <span class="highlight_txt2">Abitazioni</span>, che nei <span class="highlight_txt2">Ristoranti</span><br>
                          Offriamo un Servizio Professionale di <span class="highlight_txt2">pulizia e sanificazione</span> straordinaria, un lavaggio accurato per garantire la <span class="highlight_txt_green">massima sanificazione</span>`,
            underText: "",
            img: "assets/gallery/cappe/cappe4.webp",
        },

        preventivo: true,
        tabellaAuto: false,
        table: [
            "- Disinfezione ambientale",
            "- Disinfezione casa",
            "- Disinfestazione ambientale",
            "- Disinfestazione cimici da letto - acari",
            "- Pulizia e Smacchiatura Materassi"
        ],

        video1: "",
        video2: "",
		video3: "",
        finalDescription: ""
    },


    // Case Vacanze
    {
        name: "Case Vacanza",
        title: "Servizi di Pulizia Case Vacanze - b&b",
        background: "assets/gallery/abitazioni/casavacanze3.webp",

        section1: {
            title: "PERCHE' SCEGLIERE PROFESSIONISTI:",
            description: `Una buona operazione di pulizie nelle <span class="highlight_txt2">Case-Vacanza</span> è di fondamentale importanza in quanto va a riflettersi sul giudizio degli ospiti durante il loro soggiorno nella struttura.<br>
                          <span class="highlight_txt2">La Cura</span> e la pulizia di questi luoghi è di <span class="highlight_txt2">vitale importanza</span> per la clientela, per questo utilizziamo metodi all'avanguardia per una <span class="highlight_txt_green">Pulizia al dettaglio</span><br>
                          Utilizziamo l'Ozonizzazione delle stanze per eliminare qualsiasi tipo di <span class="highlight_txt_red">carica batterica e odori</span> da materassi, bagni, armadi e moquette`,
            underText: "",
            img: "assets/gallery/abitazioni/casavacanze6.webp"
        },

        section2: {
            title: "IMPRESA DI PULIZIE:",
            description: `Come <span class="highlight_txt2">Impresa di Pulizie</span>, La Vaporchic fornisce <span class="highlight_txt_green">Servizi Professionali</span> per la Pulizia, Sanificazione e Disinfezione<br>
                          Un Servizio di <span class="highlight_txt2">alto livello</span> è essenziale per ogni Struttura Vacanziera<br>
                          Pulizia ed Igiene sono aspetti essenziali per le Case Vacanze, in modo da <span class="highlight_txt_green">garantire la migliore esperienza possibile</span> per i vacanzieri`,
            underText: '',
            img: "assets/gallery/abitazioni/casavacanze2.webp"
        },

        section3: {
            title: "ALTRI SERVIZI DI SANIFICAZIONE PER CASE-VACANZE",
            description: "",
            underText: '',
            img: ""
        },

        section4: {
            title: "IL NOSTRO PROCEDIMENTO:",
            description: `<span class="highlight_txt2">Vaporchic</span> sfrutta la Pulizia ad Ozono, ossida e distrugge in <span class="highlight_txt_green">modo naturale</span>, economico ed ecologico.<br>
                          Riusciamo ad <span class="highlight_txt_red">eliminare oltre il 99% dei batteri</span>, muffe ed acari, senza lasciare nessun residuo alla fine del servizio<br>
                          Ci occupiamo di tutta la <span class="highlight_txt2">Tappezzeria</span>, la <span class="highlight_txt2">Mobilia</span>, i <span class="highlight_txt2">Pavimenti</span> ed i <span class="highlight_txt2">Servizi Igienici</span>e <span class="highlight_txt_green">molti altri Servizi</span>`,
            underText: '',
            img: "assets/gallery/abitazioni/casavacanze8.webp"
        },

        
        preventivo: true,
        tabellaAuto: false,

        table: [
            "- Pulizia vetri, finestre, tapparelle, serrande, inferriate con l'utilizzo di macchinari a vapore secco",
            "- Lavaggio e pulizia servizi igienici con disinfettanti e detergenti idonei, di tutti gli apparecchi igienico sanitari comuni",
            "- Lavaggio moquette - tappeti",
            "- Lavaggio pulizia e sanificazione materassi",
            "- Lavaggio pulizia e sanificazione Divani e Poltrone",
            "- Trattamenti per tutti i tipi di Tendaggi: Tende da sole - Gazebi Pvc - Ombrelloni.",
            "- Trattamenti per Zanzariere - serrande - infissi",
            "- Pulizia Hotel - Case Vacanze",
            "- Pulizia Tende Veneziane",
            "- Lavaggio pulizia e sanificazione Tappezzerie",
            "- Sanificazione e sterilizzazione ambientale con ozono"
        ],

        video1: "",
        video2: "",
		video3: "",
        finalDescription: ""
    },



    {
        name: "Pulizia Ordinaria",
        title: "PULIZIE ORDINARIE",
        background: "assets/gallery/abitazioni/albergo.webp",

        section1: {
            title: "NON TROVI TEMPO?",
            description: `Vaporchic offre servizi per clienti privati per pulizie interne ordinarie per Abitazioni e Locali Commerciali<br>
                          `,
            underText: "",
            img: "assets/gallery/abitazioni/casa26.webp"
        },

        section2: {
            title: "",
            description: ``,
            underText: '',
            img: "assets/"
        },

        section3: {
            title: "",
            description: "",
            underText: '',
            img: ""
        },


        preventivo: false,
        tabellaAuto: false,
        table: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
        ],

        video1: "",
        video2: "",
		video3: "",
        finalDescription: ""
    }
]