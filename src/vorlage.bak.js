/*global $*/
function geoquiz() {
    "use strict";
    var water = [
        {"id": "Aare", "level": "leicht", "name": "Aare", "artikel": "die"},
        {"id": "Emme", "level": "leicht", "name": "Emme", "artikel": "die"},
        {"id": "Thunersee", "level": "leicht", "name": "Thunersee", "artikel": "den"},
        {"id": "Brienzersee", "level": "leicht", "name": "Brienzersee", "artikel": "den"},
        {"id": "Wohlensee", "level": "leicht", "name": "Wohlensee", "artikel": "den"},
        {"id": "Bielersee", "level": "leicht", "name": "Bielersee", "artikel": "den"},
        {"id": "Simme", "level": "leicht", "name": "Simme", "artikel": "die"},
        {"id": "Kander", "level": "leicht", "name": "Kander", "artikel": "die"},
        {"id": "Schwarzwasser", "level": "mittel", "name": "Schwarzwasser", "artikel": "das"},
        {"id": "Saane", "level": "mittel", "name": "Saane", "artikel": "die"},
        {"id": "Sense", "level": "mittel", "name": "Sense", "artikel": "die"},
        {"id": "Gürbe", "level": "mittel", "name": "Gürbe", "artikel": "die"},
        {"id": "Ilfis", "level": "mittel", "name": "Ilfis", "artikel": "die"},
        {"id": "Zulg", "level": "mittel", "name": "Zulg", "artikel": "die"},
        {"id": "Grimselsee", "level": "mittel", "name": "Grimselsee", "artikel": "den"},
        {"id": "Oeschinensee", "level": "mittel", "name": "Oeschinensee", "artikel": "den"},
        {"id": "Engstlige", "level": "schwierig", "name": "Engstlige", "artikel": "die"},
        {"id": "Grüene", "level": "schwierig", "name": "Grüene", "artikel": "die"},
        {"id": "Birs", "level": "schwierig", "name": "Birs", "artikel": "die"},
        {"id": "SchwarzeLütschine", "level": "schwierig", "name": "Schwarze Lütschine", "artikel": "die"},
        {"id": "Trub", "level": "schwierig", "name": "Trub", "artikel": "die"},
        {"id": "Gadmerwasser", "level": "mittel", "name": "Gadmerwasser", "artikel": "das"},
        {"id": "Urbach", "level": "schwierig", "name": "Urbach", "artikel": "den"},
        {"id": "Narenbach", "level": "schwierig", "name": "Narenbach", "artikel": "den"},
        {"id": "Langete", "level": "mittel", "name": "Langete", "artikel": "die"},
        {"id": "WeisseLütschine", "level": "nichts", "name": "Weisse Lütschine", "artikel": "die"},
        {"id": "Gäntelwasser", "level": "schwierig", "name": "Gäntelwasser", "artikel": "das"},
        {"id": "Fildrich", "level": "mittel", "name": "Fildrich", "artikel": "den"},
        {"id": "Färmelbach", "level": "nichts", "name": "Färmelbach", "artikel": "den"},
        {"id": "Louibach", "level": "schwierig", "name": "Louibach", "artikel": "den"},
        {"id": "Kiese", "level": "mittel", "name": "Kiese", "artikel": "die"},
        {"id": "Hagneck-Kanal", "level": "nichts", "name": "Hagneck-Kanal", "artikel": "den"},
        {"id": "Nidau-Büren-Kanal", "level": "nichts", "name": "Nidau-Büren-Kanal", "artikel": "den"},
        {"id": "Schüss", "level": "nichts", "name": "Schüss", "artikel": "die"},
        {"id": "Scheulte", "level": "nichts", "name": "Scheltenbach", "artikel": "den"},
        {"id": "Zihlkanal", "level": "schwierig", "name": "Zihlkanal", "artikel": "den"},
        {"id": "Oberaarsee", "level": "nichts", "name": "Oberaarsee", "artikel": "den"},
        {"id": "Räterichsbodensee", "level": "nichts", "name": "Räterichsbodensee", "artikel": "den"},
        {"id": "Gelmersee", "level": "nichts", "name": "Gelmersee", "artikel": "den"},
        {"id": "Engstlensee", "level": "nichts", "name": "Engstlensee", "artikel": "den"},
        {"id": "Lütschine", "level": "nichts", "name": "Lütschine", "artikel": "die"},
        {"id": "Schiffenensee", "level": "nichts", "name": "Schiffenensee", "artikel": "der"},
        {"id": "Greyerzersee", "level": "nichts", "name": "Lac de la Gruyère", "artikel": "der"}
    ];
    var text = {};
    text.titel = "<p>Gang doch e chli der Aare naa</p>";
    text.welcome = "<p>Aber wo ist eigentlich die Aare? Testen Sie Ihr Wissen um die Flüsse und Seen im Kanton Bern mit unserem Geo-Quiz</p><p class=\"center\">Zum Spiel:</p>";
    text.startbuttons = "<p class=\"center\"><span id=\"btnLeicht\">leicht</span><span id=\"btnMittel\">mittel</span><span id=\"btnSchwierig\">schwierig</span></p>";
    text.impressum = "<p class=\"center\"><span class=\"impressum\">Ein Projekt der BZ Berner Zeitung<br>Projektleitung: <a href=\"daniel.barben@bernerzeitung.ch\">Daniel Barben</a></span></p>;"
    text.richtig = "<p class=\"center\">Richtig</p>";
    text.falsch = "<p class=\"center\">Leider falsch</p>";
    text.karte = "<p><span id=\"tooltip\">Fahren Sie mit der Maus über die Karte!</span></p><p class=\"center\"><span id=\"btnSpiel\">zum Spiel</span></p>";
    text.twittr = "<p class=\"center\"><span id=\"btntwittr\">Twittern</span><span id=\"btnKarte\">Auflösung</span></p>";
    var colors = ["#5EAABF", "#00647F", "#5cbd2b", "#ed1c24"]; //0:normalblau, 1.highlightblau, richtig, falsch
    var questions = [];
    var questionId;
    var questionCount;
    var richtig = [];
    var falsch = [];

    function end() {
        var ausgabe = [];
        switch (richtig.length) {
        case 0:
            ausgabe[0] = "";
            ausgabe[1] = "Hoppla, alles falsch: ";
            break;
        case 1:
            ausgabe[0] = "1 richtig: ";
            ausgabe[1] = "4 falsch: ";
            break;
        case 2:
            ausgabe[0] = "2 richtig: ";
            ausgabe[1] = "3 falsch: ";
            break;
        case 3:
            ausgabe[0] = "3 richtige: ";
            ausgabe[1] = "2 falsch: ";
            break;
        case 4:
            ausgabe[0] = "4 richtige: ";
            ausgabe[1] = "1 falsch: ";
            break;
        case 5:
            ausgabe[0] = "Wow, alles richtig: ";
            ausgabe[1] = "";
            break;
        }
        log();
        ausgabe[3] = water[questions[0]].level;
        document.getElementById("startinfobox").innerHTML = "<p>Ihr Resultat (Level: " + ausgabe[3] + ")<br>" + ausgabe[0] + richtig.join(", ") + "<br>" + ausgabe[1] + falsch.join(", ") + "</p><p class=\"center\">Noch einmal spielen:</p>" + text.twittr + text.startbuttons;
        document.getElementById("btnLeicht").addEventListener("click", function () {start("leicht");}, false);
        document.getElementById("btnMittel").addEventListener("click", function () {start("mittel");}, false);
        document.getElementById("btnSchwierig").addEventListener("click", function () {start("schwierig");}, false);
        document.getElementById("btnKarte").addEventListener("click", function () {
            showMap();
        }, false);
        
        var textToTweet = "Ich habe im Geo-Quiz der BZ " + richtig.length + " von 5 Flüssen und Seen richtig erkannt (Level: " + ausgabe[3] + "). Probier's auch www.bzgrafik.ch/geoquiz";
            document.getElementById("btntwittr").addEventListener("click", function () {
                var twtLink = 'https://twitter.com/intent/tweet?url=[www.bzgrafik.ch]&text=' + textToTweet + '';
                window.open(twtLink, '_blank');
            });
        document.getElementById("mapsvg").style.visibility = "hidden";
        $("#start").animate({
            height: $("#start").get(0).scrollHeight
        }, "slow");
    }

    function over() {
        this.style.stroke = colors[1];
    }

    function out() {
        this.style.stroke = colors[0];
    }

    function aufpassen() {
        var svgDoc = document.getElementById("mapsvg").contentDocument;
        water.forEach(function (ignore, i) {
            var tmp = svgDoc.getElementById(water[i].id);
            tmp.addEventListener("mouseover", over);
            tmp.addEventListener("mouseout", out);
            tmp.addEventListener("click", verify);
        });
    }

    function showTooltip() {
        var svgDoc = document.getElementById("mapsvg").contentDocument;
        water.forEach(function (ignore, i) {
            var tmp = svgDoc.getElementById(water[i].id);
            tmp.addEventListener("mouseover", function () {
                this.style.stroke = colors[1];
                document.getElementById("tooltip").innerHTML = water[i].name;
            });
            tmp.addEventListener("mouseout", function () {
                this.style.stroke = colors[0];
                document.getElementById("tooltip").innerHTML = "Fahren Sie mit der Maus über die Karte";
            });
        });
    }

    function removeTooltip() {
        var svgDoc = document.getElementById("mapsvg");
        var new_element = svgDoc.cloneNode(true);
        svgDoc.parentNode.replaceChild(new_element, svgDoc);
    }

    function ask(waterid) {
        var questionCountTmp = questionCount + 1;
        document.getElementById("infobox").innerHTML = "<p>Aufgabe " + questionCountTmp + "/5: Klicken Sie auf " + water[questions[waterid]].artikel + " " + water[questions[waterid]].name + "</p>";
        questionId = water[questions[waterid]].id;
        aufpassen();
    }

    function colorizeMap(IdTmp, colorTmp) {
        var svgDoc = document.getElementById("mapsvg").contentDocument;
        svgDoc.getElementById(IdTmp).style.stroke = colorTmp;
    }

    function nxtquestion() {
        document.getElementById("infobox").style.background = "transparent";
        document.getElementById("infobox").style.color = "#000000";
        colorizeMap(questionId, colors[0]);
        if (questionCount < 4) {
            questionCount = questionCount + 1;
            ask(questionCount);
        } else {
            end();
        }
    }

    function feedback(value1, value2) {
        document.getElementById("infobox").innerHTML = value1;
        document.getElementById("infobox").style.background = value2;
        document.getElementById("infobox").style.color = "#FFFFFF";
        window.setTimeout(nxtquestion, 1000);
    }

    function verify() {
        var svgDoc = document.getElementById("mapsvg").contentDocument;
        water.forEach(function (ignore, i) {
            var tmp = svgDoc.getElementById(water[i].id);
            tmp.removeEventListener("mouseover", over);
            tmp.removeEventListener("mouseout", out);
            tmp.removeEventListener("click", verify);
        });
        if (this.id === questionId) {
            colorizeMap(questionId, colors[2]);
            richtig.push(questionId);
            feedback(text.richtig, colors[2]);
        } else {
            colorizeMap(questionId, colors[3]);
            colorizeMap(this.id, colors[0]);
            falsch.push(questionId);
            feedback(text.falsch, colors[3]);
        }
    }

    function shuffle(array) {
        var counter = array.length;
        var index;
        var temp;
        while (counter > 0) {
            index = Math.floor(Math.random() * counter);
            counter = counter - 1;
            temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }

    function start(level) {
        questions = [];
        richtig = [];
        falsch = [];
        questionCount = 0;
        water.forEach(function (ignore, i) {
            if (water[i].level === level) {
                questions.push(i);
            }
        });
        document.getElementById("titel").innerHTML = text.titel;
        document.getElementById("infobox").innerHTML = "<p></p>";
        document.getElementById("mapsvg").style.visibility = "visible";
        shuffle(questions);
        $("#start").animate({
            height: "0px"
        }, "slow", function () {
            /*ga('send', 'event', 'button', level, 'geoquiz');*/
            ask(questionCount);
        });
    }

    function showMap() {
        document.getElementById("titel").innerHTML = text.titel;
        document.getElementById("infobox").innerHTML = text.karte;
        document.getElementById("mapsvg").style.visibility = "visible";
        document.getElementById("btnSpiel").addEventListener("click", function () {
            document.getElementById("startinfobox").innerHTML = text.welcome + text.startbuttons;
            $("#start").animate({
                height: $("#start").get(0).scrollHeight
            }, "slow", function () {
                removeTooltip();
                prepare();
            });
        }, false);
        $("#start").animate({
            height: "0px"
        }, "slow", function () {
            showTooltip();
        });
    }

    function prepare() {
        questionId = "";
        document.getElementById("mapsvg").style.visibility = "hidden";
        document.getElementById("starttitel").innerHTML = text.titel;
        document.getElementById("startinfobox").innerHTML = text.welcome + text.startbuttons + text.impressum;
        $("#start").animate({
            height: $("#start").get(0).scrollHeight
        }, "slow");
        document.getElementById("btnLeicht").addEventListener("click", function () {
            start("leicht");
        }, false);
        document.getElementById("btnMittel").addEventListener("click", function () {
            start("mittel");
        }, false);
        document.getElementById("btnSchwierig").addEventListener("click", function () {
            start("schwierig");
        }, false);
    }

    function log() {
        var logdef = [];
        richtig.forEach(function (ignore, i) {
            logdef.push("+" + richtig[i]);
        });
        falsch.forEach(function (ignore, i) {
            logdef.push("-" + falsch[i]);
        });
        var data = new FormData();
        data.append("data" , logdef);
        var xhr = new XMLHttpRequest();
        xhr.open( 'post', 'log.php', true );
        xhr.send(data);
    }
    prepare();
}
geoquiz();