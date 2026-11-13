/* Спільні шапка й підвал для всіх сторінок сайту (компоненти Header і Footer з ds/scm).
   Сторінка задає на <body>:
     data-base    — шлях до кореня сайту ("" для кореня, "../" для сторінок у articles/);
     data-current — який пункт меню активний: "exhibits" або "articles". */
(function () {
  var SCM = window.SCM;
  if (!SCM || !window.React || !window.ReactDOM) return;
  var h = React.createElement;
  var body = document.body;
  var base = body.getAttribute('data-base') || '';
  var current = body.getAttribute('data-current') || '';
  var isHome = body.getAttribute('data-page') === 'home';
  var NAME = 'Software and Computer Museum';

  // Пункти меню. На головній «Експонати» — якір на тій самій сторінці.
  var items = {
    exhibits: { href: isHome ? '#exhibits' : base + 'index.html#exhibits', label: 'Експонати' },
    articles: { href: base + 'articles.html', label: 'Статті' }
  };
  var nav = [items.exhibits, items.articles];
  var currentHref = items[current] ? items[current].href : undefined;

  // Англійської версії ще немає: мова лишається українською.
  function keepUa() {}

  function render(id, el) {
    var mount = document.getElementById(id);
    if (!mount) return;
    ReactDOM.flushSync(function () { ReactDOM.createRoot(mount).render(el); });
  }

  render('site-header', h(SCM.Header, {
    name: NAME,
    nav: nav,
    navLabel: 'Меню сайту',
    current: currentHref,
    lang: 'ua',
    onLangChange: keepUa,
    // Форми запису ще немає — «Записатися» веде на головну
    ctaHref: base + 'index.html'
  }));

  render('site-footer', h(SCM.Footer, {
    name: NAME,
    tagline: 'Екскурсії, експонати й курси',
    lang: 'ua',
    onLangChange: keepUa
  }));

  // Назва музею в шапці й підвалі веде на головну (компонент типово ставить #top)
  Array.prototype.forEach.call(document.querySelectorAll('#site-header .scm-logo, #site-footer .scm-logo'), function (a) {
    a.setAttribute('href', base + 'index.html');
  });
})();
