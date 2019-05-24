/*global $*/
function geoquiz() {
    "use strict";
    
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
    
}
geoquiz();