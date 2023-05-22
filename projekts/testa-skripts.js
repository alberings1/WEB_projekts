document.getElementById('testa-forma').addEventListener('submit', function(event) {
    event.preventDefault();

    var atbildes = {
      atbilde1: 'dzērveņe',
      atbilde2: 'ābols',
      atbilde3: 'smiltsērkšķis'
    };

    var rezultati = {};

    // Nolasīt studentu atbildes
    var atbilde1 = this.elements["atbilde-1"].value.toLowerCase();
    var atbilde2 = this.elements["atbilde-2"].value.toLowerCase();
    var atbilde3 = this.elements["atbilde-3"].value.toLowerCase();

    // Pārbaudīt, vai studentu atbildes ir pareizas
    if (atbilde1 == atbildes.atbilde1) {
      rezultati.atbilde1 = true;
    } else {
      rezultati.atbilde1 = false;
    }

    if (atbilde2 == atbildes.atbilde2) {
      rezultati.atbilde2 = true;
    } else {
      rezultati.atbilde2 = false;
    }

    if (atbilde3 == atbildes.atbilde3) {
      rezultati.atbilde3 = true;
    } else {
      rezultati.atbilde3 = false;
    }

    // Aprēķināt procentuālo rezultātu
    var pareizas = 0;
    for (var atbilde in rezultati) {
      if (rezultati[atbilde]) {
        pareizas++;
      }
    }
    var procents = (pareizas / Object.keys(rezultati).length) * 100;

    // Izveidot rezultātu teksta virkni
    var rezultatuTeksts = 'Jūsu rezultāti:\n\n';
    for (var atbilde in rezultati) {
      if (rezultati[atbilde]) {
        rezultatuTeksts += 'Jautājums ' + atbilde + ': Pareiza\n';
      } else {
        rezultatuTeksts += 'Jautājums ' + atbilde + ': Nepareiza\n';
      }
    }
    rezultatuTeksts += '\nKopējais rezultāts: ' + procents.toFixed(2) + '%';

    // Izveidot teksta failu ar rezultātiem un lejupielādēt to
    var file = new Blob([rezultatuTeksts], {type: 'text/plain'});
    var a = document.createElement('a');
    a.href = URL.createObjectURL(file);
    a.download = 'rezultati.txt';
    a.click();

    // Attēlot rezultātus un procentuālo rezultātu
    var komentars = document.getElementById("komentars");
    komentars.innerHTML = rezultatuTeksts;
    komentars.style.color = "black";
  });
