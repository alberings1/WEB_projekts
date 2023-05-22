// Funkcija, kas pārbauda studentu atbildes un izvada komentāru
function parbaudit(forma) {
    // Nolasīt studentu atbildes
    var atbilde1 = forma.elements["atbilde-1"].value.toLowerCase();
    var atbilde2 = forma.elements["atbilde-2"].value.toLowerCase();
    var atbilde3 = forma.elements["atbilde-3"].value.toLowerCase();
  
    // Uzstādīt pareizās atbildes
    var pareiza1 = "dzērveņe";
    var pareiza2 = "ābols";
    var pareiza3 = "smiltsērkšķis";
  
    // Uzstādīt komentāra elementu
    var komentars = document.getElementById("komentars");
  
    // Pārbaudīt, vai studentu atbildes ir pareizas
    if (atbilde1 == pareiza1 && atbilde2 == pareiza2 && atbilde3 == pareiza3) {
      // Ja visas atbildes ir pareizas, izvadīt apsveikuma komentāru
      komentars.innerHTML = "Apsveicam! Jūs esat pareizi atbildējis uz visiem jautājumiem!";
      komentars.style.color = "green";
    } else {
      // Ja kaut viena no atbildēm ir nepareiza, izvadīt kļūdas komentāru
      komentars.innerHTML = "Diemžēl jūs esat kļūdījies. Lūdzu, pārbaudiet savas atbildes un mēģiniet vēlreiz.";
      komentars.style.color = "red";
    }
  
    // Novērst lsapas pārlādi pēc formas nosūtīšanas
    return false;
  }
  
  // Pievienot funkciju formas nosūtīšanas notikumam
  document.getElementById("testa-forma").onsubmit = function() {
    return parbaudit(this);
  };
   