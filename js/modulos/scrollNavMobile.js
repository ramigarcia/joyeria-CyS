// Este codigo hace que cuando el usuario haga scroll hasta determinado punto se muestre o se oculte el menu de navegacion de la parte inferior. MOBILE DESKTOP
// SCROLL NAV MOBILE
export default function scrollNavMobile() {
  let ultima_posicion_scroll = 0;
  let ticking = false;

  const navBottom = document.querySelector(".nav-bottom");
  function hacerAlgo(posicion_scroll) {
    if (posicion_scroll >= 55) {
      navBottom.classList.add("nav-bottom-active");
    } else {
      navBottom.classList.remove("nav-bottom-active");
    }
  }

  window.addEventListener("scroll", function (e) {
    ultima_posicion_scroll = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(function () {
        hacerAlgo(ultima_posicion_scroll);
        ticking = false;
      });
    }
    ticking = true;
  });
}
