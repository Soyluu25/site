window.onload = () => {

  const intro = document.getElementById("intro");

  // 1) intro oynar
  // 2) sonra MAIN blur'dan açılır

  setTimeout(() => {
    document.body.classList.add("loaded"); 
  }, 120);

  // intro kapanış
  setTimeout(() => {
    intro.classList.add("hide");
  }, 3500);

};

/* NAV */

function goInfo(){

  document.body.style.transition = "0.6s ease";
  document.body.style.opacity = "0";
  document.body.style.filter = "blur(20px)";

  setTimeout(() => {
    window.location.href = "info.html";
  }, 500);
}

function goServices(){
  alert("Hizmetler yakında.");
}