var nombres = ["alfa1", "redroo", "aloha", "r88"];
            
                
            var imagenes = {"alfa1":"img/alfa/alfa1.jpg", "redroo":"img/redroo/redroo1.jpg", "aloha":"img/aloha/aloha1.jpg","r88":"img/r88/r881.jpg"};
            
            var enlaces = {"alfa1":"empresa_1.html","redroo":"empresa_2.html","aloha":"empresa_3.html","r88":"empresa_4.html"};
            
           function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Used like so

var imgRandom = shuffle(nombres);


            
            document.getElementById("imagen1").setAttribute("src", imagenes[imgRandom[0]]);  
            document.getElementById("imagen2").setAttribute("src", imagenes[imgRandom[1]]);
            document.getElementById("imagen3").setAttribute("src", imagenes[imgRandom[2]]);
            document.getElementById("imagen4").setAttribute("src", imagenes[imgRandom[3]]);

            document.getElementById("enlace1").setAttribute("href", enlaces[imgRandom[0]]);
            document.getElementById("enlace2").setAttribute("href", enlaces[imgRandom[1]]);
            document.getElementById("enlace3").setAttribute("href", enlaces[imgRandom[2]]);
            document.getElementById("enlace4").setAttribute("href", enlaces[imgRandom[3]]);