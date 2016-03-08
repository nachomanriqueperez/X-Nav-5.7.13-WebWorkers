// Al recibir un mensaje se ejecuta
//self.addEventListener('message', function(e) {
//    var a = e.data[0],
//        b = e.data[1],
//        r = a + b;  // Sumamos ambos datos
//    self.postMessage( r );  // Contestamos con la suma
//}, false);

self.addEventListener('message',function buscarPrimos() {
  self.postMessage("HAsta aqui");
  var n = 1;
  primelist = "";
  search: while (n<e.data) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
        continue search;
    // found a prime!
    primelist += " " + n;
  }
  self.postMessage( primelist );
}, false);
