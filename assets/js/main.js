// Menú móvil
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Marca el enlace de la página actual
  var page = document.body.getAttribute('data-page');
  if (page) {
    var current = document.querySelector('.nav-links a[data-nav="' + page + '"]');
    if (current) current.classList.add('active');
  }
});
