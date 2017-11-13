
Ext.define('PENKNIFE.view.privacy.PrivacyPolicy',{
    extend: 'Ext.Container',

    requires: [
        'PENKNIFE.view.privacy.PrivacyPolicyController'
    ],

    controller: 'privacy-PrivacyPolicy',

    floated: true,
    modal: true,
    hideOnMaskTap: true,
    showAnimation: {
        type: 'slide',
        direction: 'right',
        duration: 250,
        easing: 'ease-in'
    },
    hideAnimation: {
        type: 'slideOut',
        duration: 250,
        easing: 'ease-out'
    },
    left: 0,
    top: 0,
    width: stdPKF.isPhone() ? '100%' : 500,
    height: '100%',
        
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            localized: 'title',
            localizedKey: `PRIVACY_POLICY`,
            items: [
                {
                    xtype: 'button',
                    itemId: 'CloseIcon', reference: 'CloseIcon',
                    iconCls: 'close-icon',
                    listeners: {
                        tap: 'tapCloseIcon'
                    }
                }
            ]
        },
        {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'middle',
                pack: 'center'
            },
            flex: 1,
            scrollable: true,
            items: [
                {
                    xtype: 'container',
                    itemId: 'PrivacyIta', reference: 'PrivacyIta',
                    flex: 1,
                    hidden: false,
                    padding: 10,
                    html: `<h2 class="viewSottotitolo">INFORMATIVA SULLA PRIVACY</h2>
                    <h3 class="viewTitolo3">Legal disclaimer</h3>
                    <ol class="viewOL BLOBListSymbolDecimal">
                    <li class="viewLI BLOBAlignLeft">Tutte le pagine web che compongono il sito internet www.penknifeinvestment.com (di seguito "Sito") sono state predisposte al solo fine di fornire informazioni agli Utenti.</li>
                    <li class="viewLI BLOBAlignLeft">Le informazioni e i materiali pubblicati sul Sito (di seguito "Contenuti") sono curati al meglio al fine di renderli il più possibile esenti da errori, ma non si assicura che non vi siano imprecisioni o inesattezze. Inoltre, non si assicura che i Contenuti siano completi, corretti e aggiornati.</li>
                    <li class="viewLI BLOBAlignLeft">Penknife Investment S.r.l. (di seguito: "Penknife Investment") si adopera costantemente per garantire l'esattezza delle informazioni accessibili mediante il suo sito Web. Tuttavia, non garantisce in alcun modo che le informazioni siano esatte, complete e aggiornate. Penknife Investment non può essere ritenuta responsabile, in nessun caso, di qualsivoglia danno, diretto o indiretto, di qualunque natura, derivante dalla consultazione del suo sito Web.</li>
                    <li class="viewLI BLOBAlignLeft">L'accesso al Sito è libero e facoltativo e l'Utente, navigando nelle pagine web non soggette a registrazione, dichiara di accettare l'applicazione di tutte le normative vigenti in Italia in quanto applicabili. Il Titolare del Sito si riserva il diritto di modificare, aggiungere, rimuovere uno o tutti i Contenuti così come di sospendere, interrompere o limitare l'accesso al Sito o ai Contenuti in qualsiasi momento e senza preavviso alcuno a proprio insindacabile giudizio.</li>
                    <li class="viewLI BLOBAlignLeft">Tutti i Contenuti presenti nel sito sono protetti dalle attuali normative vigenti in tema di diritto d'autore (legge n. 633 del 1941). L'Utente non ha il diritto di appropriarsi, né di riprodurre, di modificare, di tradurre, di distribuire, di ripubblicare, in alcuna forma anche parziale o comunque di utilizzare i Contenuti del Sito per finalità diverse dall’adempimento delle obbligazioni contrattuali intercorrenti con il Titolare.</li>
                    <li class="viewLI BLOBAlignLeft">I marchi e/o ogni altro segno distintivo presente sul Sito sono di titolarità di Penknife Investment S.r.l., e/o di altri soggetti e non possono in alcun caso e per nessun motivo essere utilizzati senza autorizzazione scritta dei rispettivi titolari.</li>
                    <li class="viewLI BLOBAlignLeft">Fatti salvi i limiti inderogabili di legge, l'Utente riconosce che l'utilizzo del Sito avviene a sua sola ed esclusiva responsabilità. I Contenuti sono forniti "come sono" e "come disponibili". È espressamente esclusa qualsivoglia garanzia a carico del Titolare del Sito, sia essa esplicita e/o implicita. Il Titolare del Sito non garantisce che il Sito sarà accessibile senza interruzioni.</li>
                    <li class="viewLI BLOBAlignLeft">È vietato invece espressamente rendere visibile il Sito in modalità framing, deep link, mirroring.</li>
                    <li class="viewLI BLOBAlignLeft">La documentazione, le immagini, i caratteri, la grafica, il software e altri contenuti del sito e tutti i codici e format scripts per implementare il Sito, sono di proprietà di Penknife Investment S.p.A., oppure di terzi e sono tutelati dalla normativa rispettivamente applicabile.</li>
                    <li class="viewLI BLOBAlignLeft">L'utilizzo del Sito da parte dell'Utente comporta l'accettazione di quanto indicato nella presente sezione e nella sezione Informativa sulla Privacy.</li>
                    <li class="viewLI BLOBAlignLeft">Il Sito www.penknifeinvestment.com è di proprietà di Penknife Investment S.r.l. con sede in Riva Del Garda, 38066, Viale Damiano Chiesa 8 - IT</li>
                    </ol>
                    <br>
                    <h2 class="viewSottotitolo">PRIVACY POLICY - INFORMATIVA EX ART. 13 D.LGS 196/03</h2>
                    <div class="viewPar BLOBAlignLeft"><p>In questa pagina si descrivono le modalità di gestione del sito <a class="target_blank" href="http://www.penknifeinvestment.com" title=" (Questo collegamento aprirà una nuova finestra)">www.penknifeinvestment.com</a> (di seguito: "Sito") in riferimento al trattamento dei dati personali degli utenti che lo consultano. <br>Si tratta di un'informativa resa a coloro che interagiscono con i servizi Web accessibili per via telematica a partire dall'indirizzo: <a class="target_blank" href="http://www.penknifeinvestment.com" title=" (Questo collegamento aprirà una nuova finestra)">www.penknifeinvestment.com</a> anche ai sensi dell'art. 13 del d.lgs. n. 196/2003 (Codice in materia di protezione dei dati personali) e della Raccomandazione n.2/2001 del Gruppo di Lavoro art 29 della direttiva 95/46/CE. <br>La presente informativa riguarda tutti i dati personali raccolti e trattati da Penknife Investment S.r.l. (di seguito: "Penknife Investment") tramite il Sito con eccezione di:<br><br>Cookies: con riferimento ai cookies, si rinvia alla specifica <a class="target_blank" href="http://www.penknifeinvestment.com/cookie-policy" title=" (Questo collegamento aprirà una nuova finestra)">informativa estesa</a> ex art. 13 d.lgs 196/03L'informativa è resa solo per il sito <a class="target_blank" href="http://www.penknifeinvestment.com" title=" (Questo collegamento aprirà una nuova finestra)">www.penknifeinvestment.com</a> non anche per altri siti Web eventualmente consultati dall'utente tramite link.<br>Visitando il sito Web <a class="target_blank" href="http://www.penknifeinvestment.com" title=" (Questo collegamento aprirà una nuova finestra)">www.penknifeinvestment.com</a>, si accettano implicitamente le prassi descritte nella presente Informativa sulla Privacy.<br><strong class="userFormat1"><br>Titolare del trattamento</strong><br>Il Titolare del loro trattamento è Penknife Investment S.r.l. con sede in Riva Del Garda, 38066, Viale Damiano Chiesa 8 - IT<br><strong class="userFormat1"><br>Responsabile del trattamento</strong><br>Il Responsabile del loro trattamento è Alessandro Rognoni. Un elenco completo dei responsabili nominati può essere richiesto inviando una mail a alessandro.rognoni@penknifeinvestment.com.<br></p></div>
                    <br>
                    <h2 class="viewSottotitolo">Raccolta e trattamento di dati personali</h2>
                    <h3 class="viewTitolo3">Dati di navigazione</h3>
                    <div class="viewPar BLOBAlignLeft"><p>I sistemi informatici e le procedure software preposte al funzionamento di questo Sito acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet. Si tratta di informazioni che non sono raccolte per essere associate a interessati identificati, ma che, per loro stessa natura, potrebbero, attraverso elaborazioni ed associazioni con dati detenuti da terzi, permettere di identificare gli utenti.<br>In questa categoria di dati rientrano gli indirizzi IP o i nomi a dominio dei computer utilizzati dagli utenti che si connettono al sito, gli indirizzi in notazione URI (Uniform Resource Identifier) delle risorse richieste, l'orario della richiesta, il metodo utilizzato nel sottoporre la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta data dal server (buon fine, errore, ecc.) ed altri parametri relativi al sistema operativo e all'ambiente informatico dell'utente.<br>Questi dati vengono utilizzati al solo fine di ricavare informazioni statistiche anonime sull'uso del sito e per controllarne il corretto funzionamento, e vengono cancellati immediatamente dopo l'elaborazione.<br>I dati potrebbero essere utilizzati per l'accertamento di responsabilità in caso di ipotetici reati informatici ai danni del sito.<br></p></div>
                    <h3 class="viewTitolo3">Dati forniti volontariamente</h3>
                    <div class="viewPar BLOBAlignLeft"><p>L'invio facoltativo, esplicito e volontario di posta elettronica agli indirizzi indicati su questo sito comporta la successiva acquisizione dell'indirizzo del mittente, necessario per rispondere alle richieste, nonché degli eventuali altri dati personali inseriti nella missiva.<br>Specifiche informative di sintesi verranno progressivamente riportate o visualizzate nelle pagine del sito predisposte per particolari servizi a richiesta.<br></p></div>
                    <br>
                    <h2 class="viewSottotitolo">Finalità del trattamento dei dati</h2>
                    <div class="viewPar BLOBAlignLeft"><p>I dati personali forniti e/o riferiti agli utenti saranno raccolti e trattati per l'amministrazione tecnica del Sito nonché, in relazione agli utenti che inoltrano richieste di invio di materiale informativo o che si iscrivono alle newsletter, I dati saranno raccolti e trattati al solo fine di eseguire il servizio o la prestazione richiesta.  Tali dati possono essere utilizzati da Penknife Investment per lo svolgimento della propria attività ordinaria e in particolare per le seguenti finalità:</p></div>
                    <ol class="viewOL BLOBListSymbolDecimal">
                    <li class="viewLI BLOBAlignLeft">gestione del rapporto con l'utente/cliente;</li>
                    <li class="viewLI BLOBAlignLeft">svolgimento della propria attività economica;</li>
                    <li class="viewLI BLOBAlignLeft">altri scopi legati all'attività svolta dalla società ed a questa connessi quali, a titolo esemplificativo: migliorare i prodotti ed i servizi offerti, anche se non strettamente legati ai servizi richiesti dall'interessato; ricerche di mercato sulla soddisfazione del cliente presentate, direttamente o tramite agenzie di mercato all'uopo incaricate, per telefono, con questionari o tramite appuntamenti personali.</li>
                    </ol>
                    <div class="viewPar BLOBAlignLeft"><p>I dati saranno raccolti e trattati dai dipendenti e collaboratori di Penknife Investment in qualità di incaricati e responsabili del trattamento. <br>I dati potranno essere raccolti e/o trattati da società di fiducia di Penknife Investment che svolgono per conto di Penknife Investment stessa compiti di natura tecnica ed organizzativa. Queste società sono dirette collaboratrici di Penknife Investment e svolgono la funzione di responsabile del trattamento. Il loro elenco è costantemente aggiornato ed è disponibile su richiesta inviando una comunicazione all'indirizzo indicato nella sezione "Responsabile del trattamento".<br><br>I dati non saranno comunicati a terzi, non saranno trasferiti all'estero e non saranno diffusi.<br></p></div>
                    <br>
                    <h2 class="viewSottotitolo">Modalità del trattamento</h2>
                    <div class="viewPar BLOBAlignLeft"><p>I dati sono trattati con strumenti automatizzati per il tempo strettamente necessario a conseguire gli scopi per cui sono stati raccolti.<br>Specifiche misure di sicurezza sono osservate per prevenire la perdita dei dati, usi illeciti o non corretti ed accessi non autorizzati.</p></div>
                    <br>
                    <h2 class="viewSottotitolo">Conferimento dei dati</h2>
                    <div class="viewPar BLOBAlignLeft"><p>A parte quanto specificato per i dati di navigazione, il conferimento dei dati per ulteriori finalità del trattamento è facoltativo. Il loro mancato conferimento può comportare l'impossibilità di perseguire tali ulteriori finalità.</p></div>
                    <br>
                    <h2 class="viewSottotitolo">Diritti degli interessati</h2>
                    <div class="viewPar BLOBAlignLeft"><p>In ogni momento potrai ottenere la cancellazione, la trasformazione in forma anonima, la copia, l'aggiornamento, la rettifica o integrazione, il blocco dei dati trattati in violazione di legge secondo quanto previsto dall'art. 7 del D.lgs. 196/2003 riportato per esteso in calce alla presente informativa.<br>Per l'esercizio dei diritti l'utente può inviare una comunicazione all'indirizzo e-mail indicato nel punto "Responsabile del trattamento".</p></div>
                    <br><br><br>
                    <div class="viewPar BLOBAlignLeft"><p>La presente informativa sulla privacy può essere modificata periodicamente e l'uso delle informazioni raccolte è soggetto all'informativa sulla privacy in effetto al momento dell'uso.  <br>Il presente documento, pubblicato all’indirizzo <a href="http://www.penknifeinvestment.com/privacy-policy">www.penknifeinvestment.com/privacy-policy</a>, costituisce l'Informativa sulla Privacy di questo sito e sarà soggetto ad aggiornamenti (restano le varie versioni consultabili al medesimo indirizzo).</p></div>
                    <br>
                    <h2 class="viewSottotitolo">Art. 7 D.lgs. 196/2003. Diritti attribuiti all'interessato</h2>
                    <ol class="viewOL BLOBListSymbolDecimal">
                    <li class="viewLI BLOBAlignLeft">L'interessato ha diritto di ottenere la conferma dell'esistenza o meno di dati personali che lo riguardano, anche se non ancora registrati, e la loro comunicazione in forma intelligibile.</li>
                    <li class="viewLI BLOBAlignLeft">L'interessato ha diritto di ottenere l'indicazione: a. dell'origine dei dati personali; b. delle finalità e modalità del trattamento; c. della logica applicata in caso di trattamento effettuato con l'ausilio di strumenti elettronici; d. degli estremi identificativi del titolare, dei responsabili e del rappresentante designato ai sensi dell'articolo 5, comma 2; e. dei soggetti o delle categorie di soggetti ai quali i dati personali possono essere comunicati o che possono venirne a conoscenza in qualità di rappresentante designato nel territorio dello Stato, di responsabili o incaricati.</li>
                    <li class="viewLI BLOBAlignLeft">L'interessato ha diritto di ottenere: a. l'aggiornamento, la rettificazione ovvero, quando vi ha interesse, l'integrazione dei dati; b. la cancellazione, la trasformazione in forma anonima o il blocco dei dati trattati in violazione di legge, compresi quelli di cui non è necessaria la conservazione in relazione agli scopi per i quali i dati sono stati raccolti o successivamente trattati; c. l'attestazione che le operazioni di cui alle lettere a) e b) sono state portate a conoscenza, anche per quanto riguarda il loro contenuto, di coloro ai quali i dati sono stati comunicati o diffusi, eccettuato il caso in cui tale adempimento si rivela impossibile o comporta un impiego di mezzi manifestamente sproporzionato rispetto al diritto tutelato.</li>
                    <li class="viewLI BLOBAlignLeft">L'interessato ha diritto di opporsi, in tutto o in parte: a. per motivi legittimi al trattamento dei dati personali che lo riguardano, ancorché pertinenti allo scopo della raccolta; b. al trattamento di dati personali che lo riguardano a fini di invio di materiale pubblicitario o di vendita diretta o per il compimento di ricerche di mercato o di comunicazione commerciale.</li>
                    </ol>`
                },
                {
                    xtype: 'container',
                    itemId: 'PrivacyChi', reference: 'PrivacyChi',
                    flex: 1,
                    hidden: true,
                    html: ``
                }
            ]
        }
    ]
});
