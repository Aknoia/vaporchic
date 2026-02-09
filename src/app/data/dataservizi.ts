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
    title: string;
    background: string;
    section1: ServiceSectionData;
    section2: ServiceSectionData;
    section3: ServiceSectionData;
    section4?: ServiceSectionData;

    tableTitle?: String;
    table: string[];

    preventivo: boolean;
    tabellaAuto: boolean;
    prices?: ServicePlans[];

    video1: string;
    video2: string;
    video3?: string;
    video4?: string;
    finalDescription: string;
}

export const listaServizi: Array<ServiceData> = [

    // Autovetture
    {
        title: "SANIFICAZIONE E PULIZIA VEICOLI INTERNO E LAVAGGIO ESTERNO A DOMICILIO SIRACUSA E PROVINCIA",
        background: "assets/backgrounds/auto.png",

        section1: {
            title: "Servizio di <span class=\"highlight_txt\">AUTOMOTIVE</span> - Direttamente a domicilio con prodotti Waterless",
            description: `Pulizia accurata e dettagliata al <span class=\"underline highlight_txt2 \">minimo particolare</span> della vostra autovettura direttamente dentro la vostra abitazione con servizio esclusivo di lavaggio interno a vapore ed esterno con prodotti di <span class=\"highlight_txt2\">altissima qualità Waterless</span>.
                          <br>Altra novità? il <span class=\"highlight_txt_green\">CAR DETAILING</span>`,
            underText: "<span class=\"highlight_txt2\">COSA COMPRENDE</span><br>Aspirazione totale della tappezzeria della tua vettura compresa la zona del portabagagli eseguita con <span class=\"highlight_txt_green\">Vapore secco.</span><br><br>Lavaggio e sanificazione della <span class=\"highlight_txt2\">tappezzeria</span> auto eseguito con vapore secco<br>Questo trattamento di pulizia e sanificazione renderà <span class=\"highlight_txt_green\">sterile</span> il tessuto trattato eliminando macchie e batteri.<br><br>Lavaggio a vapore dei <span class=\"highlight_txt2\">tappetini</span> e della <span class=\"highlight_txt2\">moquette</span> presente. Inoltre verranno puliti e sgrassati anche il volante, i pedali e i binari guida dei sedili.<br> Trattamento di sanificazione e sterilizzazione dei <span class=\"highlight_txt2\">condotti dell'aria condizionata.</span> Solo l'utilizzo del vapore e dell'ozono riesce ad eliminare la carica batterica e le impurità presenti al suo interno. Rivolgiti a <span class=\"highlight_txt2\">VaporChic</span> per un lavaggio e una pulizia professionale dei tuoi arredi",
            img: "assets/gallery/autovetture/auto32.jpeg"
        },

        section2: {
            title: "LAVAGGIO ESTERNO AUTO CON VAPORE E DETERGENTI WATERLESS",
            description: "<span class=\"highlight_txt2\">VaporChic</span> propone un servizio per quel che riguarda la cura della tua <span class=\"highlight_txt2\">auto</span>. Dopo l'ormai famoso trattamento di pulizia interno svolto con <span class=\"highlight_txt_green\">vapore e detergenti sanificanti</span>, offriamo il servizio di pulizia dell'esterno della tua <span class=\"highlight_txt2\">auto</span> svolto a mano con l'utilizzo di <span class=\"highlight_txt_green\">vapore secco</span>, detergenti professionali “waterless” per sgrassare e pulire in profondità la <span class=\"highlight_txt2\">carrozzeria</span> e prodotti ceranti che donano lucentezza e protezione fino a 3 mesi. Inoltre offriamo un servizio di rigenerazione delle <span class=\"highlight_txt2\">plastiche interne</span> della vettura Rivolgiti a VaporChic per un lavaggio e una pulizia professionale",
            underText: '',
            img: "assets/gallery/autovetture/auto9.png"
        },

        section3: {
            title: "ALTRI SERVIZI DI SANIFICAZIONE ALL'INTERNO DELLA TUA ABITAZIONE",
            description: "Oltre al lavaggio e la sanificazione degli interni ed esterni , ci sono altri servizi che ti proponiamo per la cura e la pulizia della tua casa e dei locali a Siracusa:",
            underText: '',
            img: ""
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

        video1: "assets/video/autovetture.mp4",
        video2: "assets/gallery/autovetture/auto2.mp4",
        video3: "assets/video/auto2.mp4",
        video4: "assets/video/auto3.mp4",
        finalDescription: "L'Ozono è in grado di eliminare qualsiasi tipo di Virus, insetti, batteri, acari, agenti allergizzanti, muffe e spore che proliferano e rappresentano una costante minaccia soprattutto per bambini e anziani o per chi vive giornalmente l'ambiente dell'auto. I nostri dispositivi permettono invece di sanificare tutte le superfici, rimuovendo ogni odore, eliminando la carica batterica e assicurando la perfetta vivibilità, L'impatto ambientale dei sistemi della VaporChic è pari a zero, perché  convertono totalmente in ossigeno l'ozono residuo. Il Ministero della Salute lo ha riconosciuto come presidio per sterilizzare l'aria e gli ambienti in cui viviamo."
    },




    // Imbarcazioni
    {
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

        video1: "assets/gallery/imbarcazioni/imbarcazioni7.mp4",
        video2: "assets/video/barche.mp4",
        video3: "",
        finalDescription: ""
    },



    // Divani e Poltrone
    {
        title: "PULIZIA E SANIFICAZIONE DIVANI A SIRACUSA E PROVINCIA A DOMICILIO ",
        background: "assets/backgrounds/divanibg.png",

        section1: {
            title: "LAVAGGIO, PULIZIA, SANIFICAZIONE ED IGIENIZZAZIONE DIVANI A SIRACUSA ",
            description: `Il lavaggio e la sanificazione a <span class=\"highlight_txt_green\">Vapore secco</span> a 180° del divano include diverse fasi che hanno come obiettivo la completa sterilizzazione e igienizzazione di ogni suo componente.<br>
                          Il metodo di pulizia professionale di <span class=\"highlight_txt2\">VaporChic</span>per i divani e poltrone si svolge seguendo precisi passaggi di sterilizzazione.`,
            underText: `Il lavaggio e la sanificazione a vapore dei <span class=\"highlight_txt2\">divani</span> e delle <span class=\"highlight_txt2\">poltrone</span> eseguito con trattamento a vapore, elimina al 99% la carica batterica presente nel tessuto.<br>
                        Questo <span class=\"highlight_txt2\">speciale trattamento</span>, ci permette di <span class=\"highlight_txt_green\">aspirare, lavare e igienizzare in profondità</span> eliminando qualsiasi tipo di sporco e macchie presente.`,
            img: "assets/gallery/divani/divano6.png"
        },

        section2: {
            title: "Il risultato è eccellente anche per i divani in pelle.",
            description: `Il <span class=\"highlight_txt2\">vapore ad alta temperatura</span> favorisce la <span class=\"highlight_txt_green\">completa eliminazione del grasso e dello sporco</span> che si concentrano anche sui materiali in pelle.
                          Trattiamo <span class=\"highlight_txt2\">ogni tipo di divano</span> e ogni tipo di materiale con il massimo della cura e dell'efficienza.<br>
                          Rivolgiti a <span class=\"highlight_txt2\">VaporChic</span> per un lavaggio e una pulizia professionale dei tuoi divani in pelle o in tessuto`,
            underText: '',
            img: "assets/gallery/divani/divani11.jpeg"
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
                prices: "80€",
            },
        ],

        table: [
            "- Pulizia vetri, finestre, tapparelle, serrande, inferriate con l’utilizzo di macchinari a vapore secco",
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

        video1: "assets/gallery/divani/divani12.mp4",
        video2: "assets/video/divani.mp4",
        video3: "assets/gallery/divani/divani.mp4",
        finalDescription: ""
    },


    // Materassi e Poltrone
    {
        title: "Servizi di Pulizia Materassi a Domicilio Siracusa",
        background: "assets/gallery/materassi/materassi15.jpeg",

        section1: {
            title: "PULIZIA E LAVAGGIO ANTI ACARO PER MATERASSI, CON STERILIZZAZIONE E TRATTAMENTO ANTI BATTERICO.",
            description: `Uno dei <span class=\"highlight_txt2\">trattamenti più performanti</span> e richiesti a VaporChic è il servizio di igienizzazione di <span class=\"highlight_txt2\">materassi</span><br>
                          L'efficacia del trattamento di lavaggio <span class=\"highlight_txt2\">materassi</span> sanificante con azione <span class=\"highlight_txt_green\">antiacaro e antibatterico</span> è dovuta alla temperatura del <span class=\"highlight_txt_green\">vapore secco</span> fino a 180° che consente di eliminare tutti gli <span class=\"highlight_txt\">elementi nocivi</span> che si annidano nelle fibre del materasso<br>
                          `,
            underText: "Il servizio di lavaggio e sanificazione <span class=\"highlight_txt2\">materassi</span> può essere svolto <span class=\"highlight_txt2\">a domicilio</span> su tutta Siracusa e provincia, una soluzione comoda per il cliente che può così usufruire di un servizio di igienizzazione efficiente senza alcuna difficoltà.",
            img: "assets/gallery/materassi/materassi11.png"
        },

        section2: {
            title: "STERILIZZAZIONE DELLA TUO MATERASSO CON TRATTAMENTO AD OZONO",
            description: `Un altro trattamento che la <span class=\"highlight_txt2\">Vaporchic</span> propone è la sterilizzazione ambientale con <span class=\"highlight_txt_green\">Ozono.</span><br>
                          <span class=\"highlight_txt_green\">L'ozono</span> è un gas caratterizzato da altissime capacità ossidanti e <span class=\"highlight_txt_green\">disinfettanti.</span><br>
                          <span class=\"highlight_txt_green\">L'Ozono</span> è in grado di eliminare qualsiasi tipo di <span class=\"highlight_txt\">Virus, insetti, batteri, acari, agenti allergizzanti, muffe e spore</span> che proliferano e rappresentano una costante minaccia soprattutto per bambini ed anziani<br>`,
            underText: 'I nostri dispositivi permettono invece di sanificare <span class=\"highlight_txt2\">tutte le superfici<span>, rimuovendo ogni odore, eliminando la carica batterica e assicurando la perfetta vivibilità',
            img: "assets/gallery/materassi/materassi3.png"
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

        video1: "assets/gallery/materassi/materassi1.mp4",
        video2: "",
        video3: "",
        finalDescription: ""
    },




    // Tappeti
    {
        title: "Servizi di Pulizia Tappeti a Siracusa e Provincia",
        background: "assets/gallery/tappeti/tappeti1.png",

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
            img: "assets/gallery/tappeti/tappeti7.png"
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

        video1: "assets/gallery/tappeti/tappeti.mp4",
        video2: "assets/gallery/tappeti/tappeti3.mp4",
        video3: "assets/gallery/tappeti/tappeti8.mp4",
        video4: "assets/gallery/tappeti/tappeti7.mp4",
        finalDescription: ""
    },




    // Locali Commerciali 
    {
        title: "PULIZIA LOCALI COMMERCIALI",
        background: "assets/backgrounds/localibg.png",

        section1: {
            title: "Pulizie: specializzati per ogni tipo di servizio!",
            description: `<span class=\"highlight_txt2\">Vaporchic</span> convoglia l'impegno di <span class=\"highlight_txt_green\">operatori specializzati</span> in ogni singolo settore insieme all'esperienza maturata nel corso degli anni<br>
                          Mettiamo a disposizione dei suoi clienti dei <span class=\"highlight_txt2\">Piani Pulizia digitali e personalizzati</span> adatti ad ogni tipo di ambiente e struttura, sempre seguendo i corretti protocolli di pulizia.`,
            underText: "",
            img: "assets/gallery/locali/locali9.png"
        },

        section2: {
            title: "Professionalità e Sicurezza",
            description: `<span class=\"highlight_txt2\">Vaporchic</span> si serve di <span class=\"highlight_txt_green\">attrezzature e macchinari specifici</span> oltre che di detergenti e sanificanti adatti a garantire alti livelli igienici ambientali.<br>
                          Da anni prestiamo attenzione ad aspetti fondamentali di pulizia.`,
            underText: '', 
            img: "assets/gallery/locali/locali8.png"
        },

        section3: {
            title: "Effettuiamo servizi di pulizie ordinarie per:",
            description: "",
            underText: '',
            img: ""
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
            "- Appartamenti e ville vuote o abitate."
        ],

        video1: "assets/gallery/locali/locali13.mp4",
        video2: "assets/video/locali2.mp4",
        finalDescription: ""
    },




    // Abitazioni 
    {
        title: "SERVIZI DI PULIZIA APPARTAMENTI, HOTEL E CASE VACANZE",
        background: "assets/backgrounds/casabg.gif",

        section1: {
            title: "DESIDERI FAR RINASCERE LA TUA CASA?",
            description: `Le pulizie straordinarie di un <span class=\"highlight_txt2\">appartamento</span> sono un'operazione di <span class=\"highlight_txt_green\">pulizia profonda</span> e più completa rispetto a quella ordinaria, che si svolge con minor frequenza.<br>
                          Includono attività come il lavaggio di <span class=\"highlight_txt2\">tende, persiane e tapparelle</span>, la pulizia degli interni di <span class=\"highlight_txt2\">cassetti e armadi</span>, la rimozione della<span class=\"highlight_txt\"> polvere e dello sporco</span> accumulati dietro mobili e dietro le superfici, la <span class=\"highlight_txt_green\">pulizia approfondita</span> dei <span class=\"highlight_txt2\">sanitari e dei pavimenti<span>, e trattamenti specifici su pavimenti, tappeti e superfici.`,
            underText: `Una pulizia superficiale può sembrare sufficiente, ma in realtà <span class=\"highlight_txt_red\">non è in grado di eliminare</span> completamente lo <span class=\"highlight_txt\">sporco e i batteri</span> presenti in un ambiente.<br>
                        Questi accumuli possono causare <span class=\"highlight_txt_red\">problemi di salute</span>`,
            img: "assets/gallery/abitazioni/casa19.jpeg"
        },

        section2: {
            title: "PULIZIA CON OZONO DI ALBERGHI ED HOTEL IN TUTTA LA ZONA DI SIRACUSA E PROVINCIA",
            description: `<span class=\"highlight_txt_green\">Ozonizzazione</span> di stanze per eliminare qualsiasi tipo di carica batterica e odori da <span class=\"highlight_txt2\">materassi, bagni, armadi e moquette</span>.<br>
                          <span class=\"highlight_txt_green\">Sterilizzazione a vapore</span> dei servizi sanitari<br>
                          Lavaggio a vapore di <span class=\"highlight_txt2\">Materassi/Divani/Poltrone</span><br>
                          Lavaggio a vapore e a freddo di <span class=\"highlight_txt2\">Moquette</span><br>
                          Sgrossi a vapore di cucine e ambienti di lavoro<br>`,
            underText: '',
            img: "assets/gallery/abitazioni/albergo.png"
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
            img: "assets/gallery/abitazioni/grondaie.png"
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

        video1: "assets/gallery/abitazioni/casa6.mp4",
        video2: "assets/gallery/abitazioni/casa7.mp4",
        video3: "assets/gallery/abitazioni/casa8.mp4",
        finalDescription: ""
    },



    
    // Animali
    {
        title: "PULIZIA E RIMOZIONE URINE - VOMITO - ODORI SGRADEVOLI DEI VOSTRI ANIMALI DOMESTICI SU DIVANI E TAPPETI",
        background: "assets/backgrounds/animalibg.png",

        section1: {
            title: "Come rimuoviamo gli odori dai divani con animali domestici?",
            description: `<span class=\"highlight_txt\">Urina, peli e secrezioni animali</span> possono impregnare il tessuto, rendendo difficile la rimozione con i classici detergenti domestici.<br>
                          <span class=\"highlight_txt2\">Vaporchic</span> offre un trattamento professionale di <span class=\"highlight_txt_green\">lavaggio profondo</span> con metodo iniezione-estrazione a vapore, capace di eliminare non solo lo sporco visibile, ma anche gli odori alla radice`,
            underText: "",
            img: "assets/gallery/vomito/canetappeto.png"
        },

        section2: {
            title: "Il nostro metodo di pulizia",
            description: `<span class=\"highlight_txt2\">1)</span> Iniezione di <span class=\"highlight_txt_green\">detergente biocida</span>: utilizziamo una soluzione specifica a base di agenti neutralizzanti degli odori, che penetra fino a 6-7 cm di profondità nei tessuti.<br>
                          <span class=\"highlight_txt2\">2)</span> Spazzolatura manuale: per <span class=\"highlight_txt\">rimuovere peli e residui organici</span>, favorendo la penetrazione del detergente tra le fibre.<br>
                          <span class=\"highlight_txt2\">3)</span> Estrazione potenziata: grazie a un macchinario professionale a vapore con potenza di aspirazione superiore, <span class=\"highlight_txt\">eliminiamo sporco, umidità e residui chimici.</span><br>
                          <span class=\"highlight_txt2\">4)</span> Pettinatura delle fibre: per ridare al tessuto un aspetto uniforme e una sensazione di freschezza.<br>
                          <span class=\"highlight_txt2\">5)</span> Asciugatura rapida: evitiamo la formazione di muffe e ristagni, garantendo un divano pronto all'uso in poche ore.`,
            underText: '',
            img: "assets/gallery/vomito/gatto.png"
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




    {
        title: "SANIFICAZIONE E DISINFESTAZIONE AMBIENTALE A SIRACUSA E PROVINCIA",
        background: "assets/backgrounds/sanificazionebg.png",

        section1: {
            title: "SERVIZI DI DISINFESTAZIONE A SIRACUSA E PROVINCIA: SCEGLI COSA UTILIZZARE",
            description: `<span class=\"highlight_txt2\">Il Termonebbiogeno</span> è un generatore di nebbia calda, insetticida, che consente la <span class=\"highlight_txt_green\">disinfestazione e disinfezione</span> degli ambienti dove vivi e lavori.<br>
                          Questo strumento satura totalmente l'ambiente trattato poiché, essendo una nebbia fitta, riesce a penetrare ovunque e in modo sicuro.<br>
                          Indicato per <span class=\"highlight_txt_red\">eliminare mosche e zanzare e insetti come blatte e scarafaggi</span>.`,
            underText: "",
            img: "assets/gallery/ambiente/ambientale1.png"
        },

        section2: {
            title: "DISINFEZIONE CIMICI DA LETTO",
            description: `Le infestazioni da <span class=\"highlight_txt_red\">cimici da letto</span> sono un problema ormai da qualche anno in continuo divenire.<br>
                          Si possono annidare in ogni più piccolo pertugio della tua <span class=\"highlight_txt2\">casa o locale</span> e solo dopo accurata analisi da parte dei nostri esperti si può attuare un piano di ”attacco” per debellare questi focolai.<br>
                          La VaporChic offre <span class=\"highlight_txt_green\">il più completo e variegato trattamento</span> per la rimozione delle cimici da letto`,
            underText: 'Andremo ad utilizzare <span class=\"highlight_txt2\">generatori di vapore secco</span> con una temperatura che supera i 180° per causare uno shock termico utile a debellare anche eventuali uova presenti,',
            img: "assets/gallery/ambiente/cimici.png"
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

        video1: "assets/gallery/ambiente/ambientale.mp4",
        video2: "assets/gallery/ambiente/ambientale2.mp4",
        video3: "assets/gallery/ambiente/ambientale4.mp4",
        video4: "assets/gallery/ambiente/ambientale5.mp4",
        finalDescription: ""
    },



    /* Camper e Roulotte */
    {
        title: "Servizio di Pulizia Camper - Roulotte",
        background: "assets/backgrounds/camperbg.png",

        section1: {
            title: "SANIFICAZIONE E IGIENIZZAZIONE CAMPER E ROULOTTE",
            description: `Gli interni, anche in pelle, dei <span class=\"highlight_txt2\">camper o delle roulotte</span> possono facilmente essere macchiati in viaggio o su posto fisso.<br>
                          Pulirli in maniera <span class=\"highlight_txt\">superficiale</span> è facile ma il più delle volte <span class=\"highlight_txt_red\">dannoso</span>.<br>
                          Allergeni, macchie, muffe e cattivi odori possono rimanere nonostante la pulizia.<br>
                          Con il nostro <span class=\"highlight_txt_green\">rivoluzionario sistema di igienizzazione all'ozono</span> e lavaggio a vapore della tappezzeria presente, garantendo la totale sanificazione degli interni del tuo <span class=\"highlight_txt2\">camper</span> senza pericolo di rovinare gli interni.`,
            underText: "",
            img: "assets/gallery/camper/bagnocamper.png"
        },

        section2: {
            title: "SANIFICAZIONE AMBIENTALE CON OZONO CAMPER E ROULOTTE.",
            description: `Uno dei trattamenti <span class=\"highlight_txt2\">più richiesti</span> è la sanificazione ambientale con <span class=\"highlight_txt_green\">Ozono</span> del tuo camper poiché non comporta nessun pericolo per cose o oggetti.<br>
                          <span class=\"highlight_txt_green\">L'ozono</span> ossida solamente materiale organico assicurandoti la totale sicurezza degli interni della tuo camper o della tua roulotte.`,
            underText: '',
            img: "assets/gallery/camper/murocamper.png"
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
                icon: "/assets/icons/furgonato.png"
            },

            {
                name: "Mansardato",
                prices: "400€",
                icon: "/assets/icons/mansardato.png"
            },

            {
                name: "Roulotte",
                prices: "400€",
                icon: "/assets/icons/roulotte.png"
            },

            {
                name: "Integrale",
                prices: "450€",
                icon: "/assets/icons/integrale.png"
            }
        ],

        table: [
            "- Pulizia Completa interna camper - roulotte",
            "- Lavaggio e pulizia servizi igienici con disinfettanti e detergenti idonei, di tutti gli apparecchi igienico sanitari comuni.",
            "- Lavaggio moquette - tappeti",
            "- Lavaggio pulizia e sanificazione materassi",
            "- Lavaggio pulizia e sanificazione Divani e Poltrone"
        ],

        video1: "assets/gallery/camper/camper6.mp4",
        video2: "assets/gallery/camper/camper7.mp4",
		video3: "assets/gallery/camper/camper8.mp4",
        video4: "assets/gallery/camper/camper9.mp4",
        finalDescription: ""
    },




    // Incendi
    {
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
            img: "assets/gallery/incendi/incendio.jpeg"
        },

        section2: {
            title: "DECONTAMINAZIONE MANUALE",
            description: `Con un accurato <span class=\"highlight_txt_green\">processo di decontaminazione manuale</span>, particolarmente indicato per le attrezzature elettroniche e le superfici più delicate, si procede al ripristino di locali e materiali danneggiati.<br>
                          Oltre a circoscrivere i danni, questa pratica consente di <span class=\"highlight_txt2\">decontaminare e riposizionare mobili e arredi recuperabili</span>.`,
            underText: `<span class=\"highlight_txt2\">PULIZIA CRIOGENICA</span>.<br>
                        Si tratta di un processo di <span class=\"highlight_txt_green\">pulizia a secco</span> che, attraverso uno shock termico e tramite l'utilizzo di <span class=\"highlight_txt2\">palline di ghiaccio secco</span>, permette il distacco di grasso, incrostazioni, vernici e simili senza lasciare residui.<br>
                        Il ghiaccio secco è la forma solida del carbon disossido (CO2): <span class=\"highlight_txt2\">è incolore, inodore e insapore</span>, è un elemento <span class=\"highlight_txt_green\">naturale</span> della nostra atmosfera ed ha una temperatura di -79°.<br>
                        Utilizzando la Co2 trasformata in ghiaccio secco come una <span class=\"highlight_txt_green\">valida alternativa</span> alla classica sabbiatrice, si ottiene un <span class=\"highlight_txt2\">risultato eccellente</span> a fronte di un processo totalmente ecologico e molto meno oneroso.`,
            img: "assets/gallery/incendi/incendio4.jpeg"
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

        video1: "assets/gallery/incendi/incendio.mp4",
        video2: "assets/gallery/incendi/incendio2.mp4",
		video3: "assets/gallery/incendi/incendio4.mp4",
        video4: "assets/gallery/incendi/incendio5.mp4", 
        finalDescription: ""
    }
]