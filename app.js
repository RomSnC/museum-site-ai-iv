/* Збирає блоки сторінки з компонентів дизайн-системи (window.SCM). Без JSX і збирача. */
(function () {
  var h = React.createElement;
  var SCM = window.SCM;
  var data = window.SCM_CONTENT.exhibits;

  function ExhibitsSection() {
    var state = React.useState(false);
    var expanded = state[0];
    var setExpanded = state[1];
    var hasMore = data.more.length > 0;
    var items = expanded ? data.items.concat(data.more) : data.items;

    return h('div', { className: 'scm-container' },
      h(SCM.SectionHeading, { id: 'exhibits-title', title: data.title, intro: data.intro, command: data.command, level: 2 }),
      h('div', { id: 'exhibits-grid', className: 'scm-grid-3 scm-grid--exhibits' },
        items.map(function (item, i) {
          return h(SCM.ExhibitCard, Object.assign({ key: item.title, index: i + 1, headingLevel: 3, lang: 'ua' }, item));
        })
      ),
      hasMore && h('div', { className: 'exhibits__more' },
        h(SCM.Button, {
          // Основна кнопка ДС: action-bg/action-ink — синя з білим текстом на світлому фоні, біла із синім на синьому
          variant: 'primary',
          iconEnd: 'arrow-down',
          'aria-expanded': expanded,
          'aria-controls': 'exhibits-grid',
          onClick: function () { setExpanded(!expanded); }
        }, expanded ? data.lessLabel : data.moreLabel)
      )
    );
  }

  var mount = document.getElementById('exhibits');
  if (mount && SCM) ReactDOM.createRoot(mount).render(h(ExhibitsSection));
})();
