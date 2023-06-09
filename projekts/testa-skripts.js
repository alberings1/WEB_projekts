var timerInterval;
    var startTime;

    document.getElementById('start-button').addEventListener('click', function() {
      startTime = Date.now();
      document.getElementById('start-button').style.display = 'none';
      document.getElementById('testa-forma').style.display = 'block';

      timerInterval = setInterval(function() {
        var elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        var timerElement = document.getElementById('timer');
        timerElement.textContent = 'Laiks: ' + formatTime(elapsedTime);

        if (elapsedTime > 60) {
          timerElement.style.color = 'black';
        }
      }, 1000);
    });

    document.getElementById('testa-forma').addEventListener('submit', function(event) {
      event.preventDefault();

      clearInterval(timerInterval);

      var atbildes = {
        atbilde1: 'ābols',
        atbilde2: 'vīnogas',
        atbilde3: 'brūklenes',
        atbilde4: 'ērkšķogas',
        atbilde5: 'banāns',
        atbilde6: 'smiltsērķšķis',
        atbilde7: 'pitaija',
        atbilde8: 'hurma',
        atbilde9: 'jāņogas',
        atbilde10: 'upenes'
      };
      
      var atbilde1 = this.elements['atbilde-1'].value.toLowerCase();
      var atbilde2 = this.elements['atbilde-2'].value.toLowerCase();
      var atbilde3 = this.elements['atbilde-3'].value.toLowerCase();
      var atbilde4 = this.elements['atbilde-4'].value.toLowerCase();
      var atbilde5 = this.elements['atbilde-5'].value.toLowerCase();
      var atbilde6 = this.elements['atbilde-6'].value.toLowerCase();
      var atbilde7 = this.elements['atbilde-7'].value.toLowerCase();
      var atbilde8 = this.elements['atbilde-8'].value.toLowerCase();
      var atbilde9 = this.elements['atbilde-9'].value.toLowerCase();
      var atbilde10 = this.elements['atbilde-10'].value.toLowerCase();
      
      var rezultati = {
        atbilde1: atbilde1 === atbildes.atbilde1,
        atbilde2: atbilde2 === atbildes.atbilde2,
        atbilde3: atbilde3 === atbildes.atbilde3,
        atbilde4: atbilde4 === atbildes.atbilde4,
        atbilde5: atbilde5 === atbildes.atbilde5,
        atbilde6: atbilde6 === atbildes.atbilde6,
        atbilde7: atbilde7 === atbildes.atbilde7,
        atbilde8: atbilde8 === atbildes.atbilde8,
        atbilde9: atbilde9 === atbildes.atbilde9,
        atbilde10: atbilde10 === atbildes.atbilde10
      };
      
      var pareizas = 0;
      for (var atbilde in rezultati) {
        if (rezultati[atbilde]) {
          pareizas++;
        }
      }
      
      var procents = (pareizas / Object.keys(rezultati).length) * 100;
      
      var rezultatuTeksts = 'Jūsu rezultāti:\n\n';
      for (var atbilde in rezultati) {
        if (rezultati[atbilde]) {
          rezultatuTeksts += 'Jautājums ' + atbilde + ': Pareiza\n';
          document.getElementById('question-feedback-' + atbilde.charAt(atbilde.length - 1)).textContent = 'Pareiza';
          document.getElementById('question-feedback-' + atbilde.charAt(atbilde.length - 1)).classList.add('correct');
        } else {
          rezultatuTeksts += 'Jautājums ' + atbilde + ': Nepareiza\n';
          document.getElementById('question-feedback-' + atbilde.charAt(atbilde.length - 1)).textContent = 'Nepareiza';
          document.getElementById('question-feedback-' + atbilde.charAt(atbilde.length - 1)).classList.add('wrong');
        }
      }
      rezultatuTeksts += '\nKopējais rezultāts: ' + procents.toFixed(2) + '%\n';
      rezultatuTeksts += 'Pavadītais laiks: ' + formatTime(Math.floor((Date.now() - startTime) / 1000));
      
      document.getElementById("komentars").textContent = rezultatuTeksts;

      document.getElementById("download-button").style.display = "block";
    });

    document.getElementById("download-button").addEventListener("click", function() {
        var resultText = document.getElementById("komentars").textContent; // Use textContent instead of innerText
        var filename = "testa_rezultati.txt";
      
        var element = document.createElement("a");
        element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(resultText));
        element.setAttribute("download", filename);
      
        element.style.display = "none";
        document.body.appendChild(element);
      
        element.click();
      
        document.body.removeChild(element);
      
        document.getElementById('komentars').innerHTML = 'Apsveicam! Jūs esat pabeidzis testu.';
        document.getElementById('komentars').style.color = 'green';
      });
      

    function formatTime(seconds) {
      var minutes = Math.floor(seconds / 60);
      var remainingSeconds = seconds % 60;

      var formattedTime = '';
      if (minutes > 0) {
        formattedTime += minutes + ' min ';
      }
      formattedTime += remainingSeconds + ' s';

      return formattedTime;
    }
