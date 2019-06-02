let rivers = [
    {"id": "Aare", "level": "leicht", "name": "Aare", "artikel": "die", "lg":4},
    {"id": "Emme", "level": "leicht", "name": "Emme", "artikel": "die", "lg":5},
    {"id": "Thunersee", "level": "leicht", "name": "Thunersee", "artikel": "den", "lg":1},
    {"id": "Brienzersee", "level": "leicht", "name": "Brienzersee", "artikel": "den", "lg":1},
    {"id": "Wohlensee", "level": "leicht", "name": "Wohlensee", "artikel": "den", "lg":1},
    {"id": "Bielersee", "level": "leicht", "name": "Bielersee", "artikel": "den", "lg":1},
    {"id": "Simme", "level": "leicht", "name": "Simme", "artikel": "die", "lg":3},
    {"id": "Kander", "level": "leicht", "name": "Kander", "artikel": "die", "lg":3},
    {"id": "Lombach", "level": "leicht", "name": "Lombach", "artikel": "den", "lg":2},
    {"id": "Schüss", "level": "leicht", "name": "Schüss", "artikel": "die", "lg":6},
    {"id": "Schwarzwasser", "level": "mittel", "name": "Schwarzwasser", "artikel": "das", "lg":4},
    {"id": "Saane", "level": "mittel", "name": "Saane", "artikel": "die", "lg":3},
    {"id": "Sense", "level": "mittel", "name": "Sense", "artikel": "die", "lg":4},
    {"id": "Gürbe", "level": "mittel", "name": "Gürbe", "artikel": "die", "lg":4},
    {"id": "Ilfis", "level": "mittel", "name": "Ilfis", "artikel": "die", "lg":5},
    {"id": "Zulg", "level": "mittel", "name": "Zulg", "artikel": "die", "lg":4},
    {"id": "Grimselsee", "level": "mittel", "name": "Grimselsee", "artikel": "den", "lg":1},
    {"id": "Oeschinensee", "level": "mittel", "name": "Oeschinensee", "artikel": "den", "lg":1},
    {"id": "Worble", "level": "mittel", "name": "Worble", "artikel": "die", "lg":4},
    {"id": "Twannbach", "level": "mittel", "name": "Twannbach", "artikel": "den", "lg":6},
    {"id": "Rotache", "level": "mittel", "name": "Rotache", "artikel": "die", "lg":4},
    {"id": "Önz", "level": "mittel", "name": "Önz", "artikel": "die", "lg":5},
    {"id": "KleineSimme", "level": "mittel", "name": "Kleine Simme", "artikel": "die", "lg":3},
    {"id": "Engstlige", "level": "schwierig", "name": "Entschlige", "artikel": "die", "lg":3},
    {"id": "Grüene", "level": "schwierig", "name": "Grüene", "artikel": "die", "lg":5},
    {"id": "Birs", "level": "schwierig", "name": "Birs", "artikel": "die", "lg":6},
    {"id": "SchwarzeLütschine", "level": "schwierig", "name": "Schwarze Lütschine", "artikel": "die", "lg":2},
    {"id": "Trub", "level": "schwierig", "name": "Trub", "artikel": "die", "lg":5},
    {"id": "Gadmerwasser", "level": "mittel", "name": "Gadmerwasser", "artikel": "das", "lg":2},
    {"id": "Urbach", "level": "schwierig", "name": "Urbach", "artikel": "den", "lg":2},
    {"id": "Narenbach", "level": "schwierig", "name": "Narebach", "artikel": "den", "lg":3},
    {"id": "Langete", "level": "mittel", "name": "Langete", "artikel": "die", "lg":5},
    {"id": "WeisseLütschine", "level": "schwierig", "name": "Weisse Lütschine", "artikel": "die", "lg":2},
    {"id": "Gäntelwasser", "level": "schwierig", "name": "Gentelwasser", "artikel": "das", "lg":2},
    {"id": "Fildrich", "level": "mittel", "name": "Fildrich", "artikel": "den", "lg":3},
    {"id": "Färmelbach", "level": "schwierig", "name": "Färmelbach", "artikel": "den", "lg":3},
    {"id": "Louibach", "level": "schwierig", "name": "Louibach", "artikel": "den", "lg":3},
    {"id": "Kiese", "level": "mittel", "name": "Kiese", "artikel": "die", "lg":4},
    {"id": "Hagneck-Kanal", "level": "nichts", "name": "Hagneck-Kanal", "artikel": "den", "lg":0},
    {"id": "Nidau-Büren-Kanal", "level": "nichts", "name": "Nidau-Büren-Kanal", "artikel": "den", "lg":0},
    {"id": "Scheulte", "level": "mittel", "name": "Scheltenbach", "artikel": "den", "lg":6},
    {"id": "Zihlkanal", "level": "nichts", "name": "Zihlkanal", "artikel": "den", "lg":0},
    {"id": "Oberaarsee", "level": "schwierig", "name": "Oberaarsee", "artikel": "den","lg":1 },
    {"id": "Räterichsbodensee", "level": "nichts", "name": "Räterichsbodensee", "artikel": "den", "lg":0},
    {"id": "Gelmersee", "level": "schwierig", "name": "Gelmersee", "artikel": "den", "lg":1},
    {"id": "Engstlensee", "level": "schwierig", "name": "Engstlensee", "artikel": "den", "lg":1},
    {"id": "Lütschine", "level": "mittel", "name": "Lütschine", "artikel": "die", "lg":2},
    {"id": "Schiffenensee", "level": "nichts", "name": "Schiffenensee", "artikel": "den", "lg":0},
    {"id": "Greyerzersee", "level": "nichts", "name": "Lac de la Gruyère", "artikel": "der", "lg":0},
    {"id": "Chiene", "level": "schwierig", "name": "Chiene", "artikel": "die", "lg":3}, 
    {"id": "Chirel", "level": "schwierig", "name": "Chirel", "artikel": "die", "lg":3}, 
    {"id": "Churzeneibach", "level": "schwierig", "name": "Churzeneibach", "artikel": "den", "lg":5}, 
    {"id": "Jäunli", "level": "schwierig", "name": "Jaunbach", "artikel": "den", "lg":3}, 
    {"id": "Ösch", "level": "schwierig", "name": "Ösch", "artikel": "die", "lg":5}, 
    {"id": "Sorne", "level": "schwierig", "name": "Sorne", "artikel": "die", "lg":6}, 
    {"id": "Suld", "level": "schwierig", "name": "Suld", "artikel": "die", "lg":3}, 
    {"id": "Trame", "level": "schwierig", "name": "Trame", "artikel": "die", "lg":6}, 
    {"id": "Turpachbach", "level": "schwierig", "name": "Turpachbach", "artikel": "den", "lg":3},
];
export default rivers

/*
LG
0: leer (6)
1: See (8)
2: Oberland Ost (7)
3: Oberland West (14)
4: Berner Mittelland (8)
5: Emmental/Oberaargau (8)
6: Jura (6)


*/
