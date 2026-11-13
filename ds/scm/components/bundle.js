/* @ds-bundle: {"format":4,"namespace":"SCM","components":[{"name":"Button"},{"name":"LangSwitch"},{"name":"PixelIcon"},{"name":"Window"},{"name":"OfferCard"},{"name":"ExhibitCard"},{"name":"SectionHeading"},{"name":"Cursor"},{"name":"PlaceholderTag"},{"name":"Header"},{"name":"Hero"},{"name":"Field"},{"name":"BookingForm"},{"name":"ContactsBlock"},{"name":"Footer"}]} */
(function () {
  "use strict";
  var React = window.React;
  var h = React.createElement;
  var useState = React.useState, useEffect = React.useEffect, useRef = React.useRef, useId = React.useId;

  var ICONS = {"clock": "M3 0h6v1h-6zM2 1h1v1h-1zM9 1h1v1h-1zM1 2h1v1h-1zM5 2h2v1h-2zM10 2h1v1h-1zM0 3h1v1h-1zM5 3h2v1h-2zM11 3h1v1h-1zM0 4h1v1h-1zM5 4h2v1h-2zM11 4h1v1h-1zM0 5h1v1h-1zM5 5h2v1h-2zM11 5h1v1h-1zM0 6h1v1h-1zM5 6h5v1h-5zM11 6h1v1h-1zM0 7h1v1h-1zM11 7h1v1h-1zM0 8h1v1h-1zM11 8h1v1h-1zM1 9h1v1h-1zM10 9h1v1h-1zM2 10h1v1h-1zM9 10h1v1h-1zM3 11h6v1h-6z", "people": "M2 0h2v1h-2zM9 0h2v1h-2zM1 1h4v1h-4zM8 1h4v1h-4zM1 2h4v1h-4zM8 2h4v1h-4zM2 3h2v1h-2zM9 3h2v1h-2zM1 5h4v1h-4zM8 5h4v1h-4zM0 6h12v1h-12zM0 7h12v1h-12zM0 8h12v1h-12zM0 9h12v1h-12z", "calendar": "M2 0h1v1h-1zM9 0h1v1h-1zM0 1h12v1h-12zM0 2h1v1h-1zM11 2h1v1h-1zM0 3h12v1h-12zM0 4h1v1h-1zM11 4h1v1h-1zM0 5h1v1h-1zM2 5h2v1h-2zM5 5h2v1h-2zM8 5h2v1h-2zM11 5h1v1h-1zM0 6h1v1h-1zM2 6h2v1h-2zM5 6h2v1h-2zM8 6h2v1h-2zM11 6h1v1h-1zM0 7h1v1h-1zM11 7h1v1h-1zM0 8h1v1h-1zM2 8h2v1h-2zM5 8h2v1h-2zM8 8h2v1h-2zM11 8h1v1h-1zM0 9h1v1h-1zM2 9h2v1h-2zM5 9h2v1h-2zM8 9h2v1h-2zM11 9h1v1h-1zM0 10h1v1h-1zM11 10h1v1h-1zM0 11h12v1h-12z", "tag": "M6 0h6v1h-6zM5 1h1v1h-1zM11 1h1v1h-1zM4 2h1v1h-1zM7 2h2v1h-2zM11 2h1v1h-1zM3 3h1v1h-1zM7 3h2v1h-2zM11 3h1v1h-1zM2 4h1v1h-1zM11 4h1v1h-1zM1 5h1v1h-1zM11 5h1v1h-1zM0 6h1v1h-1zM10 6h1v1h-1zM1 7h1v1h-1zM9 7h1v1h-1zM2 8h1v1h-1zM8 8h1v1h-1zM3 9h1v1h-1zM7 9h1v1h-1zM4 10h1v1h-1zM6 10h1v1h-1zM5 11h1v1h-1z", "phone": "M2 0h8v1h-8zM2 1h1v1h-1zM9 1h1v1h-1zM2 2h1v1h-1zM4 2h4v1h-4zM9 2h1v1h-1zM2 3h1v1h-1zM4 3h1v1h-1zM7 3h1v1h-1zM9 3h1v1h-1zM2 4h1v1h-1zM4 4h1v1h-1zM7 4h1v1h-1zM9 4h1v1h-1zM2 5h1v1h-1zM4 5h1v1h-1zM7 5h1v1h-1zM9 5h1v1h-1zM2 6h1v1h-1zM4 6h1v1h-1zM7 6h1v1h-1zM9 6h1v1h-1zM2 7h1v1h-1zM4 7h4v1h-4zM9 7h1v1h-1zM2 8h1v1h-1zM9 8h1v1h-1zM2 9h1v1h-1zM5 9h2v1h-2zM9 9h1v1h-1zM2 10h1v1h-1zM9 10h1v1h-1zM2 11h8v1h-8z", "pin": "M4 0h4v1h-4zM2 1h2v1h-2zM8 1h2v1h-2zM1 2h1v1h-1zM10 2h1v1h-1zM1 3h1v1h-1zM5 3h2v1h-2zM10 3h1v1h-1zM0 4h1v1h-1zM4 4h4v1h-4zM11 4h1v1h-1zM0 5h1v1h-1zM4 5h4v1h-4zM11 5h1v1h-1zM1 6h1v1h-1zM5 6h2v1h-2zM10 6h1v1h-1zM1 7h1v1h-1zM10 7h1v1h-1zM2 8h1v1h-1zM9 8h1v1h-1zM3 9h1v1h-1zM8 9h1v1h-1zM4 10h1v1h-1zM7 10h1v1h-1zM5 11h2v1h-2z", "floppy": "M0 0h11v1h-11zM0 1h1v1h-1zM2 1h1v1h-1zM8 1h1v1h-1zM10 1h2v1h-2zM0 2h1v1h-1zM2 2h1v1h-1zM5 2h2v1h-2zM8 2h1v1h-1zM11 2h1v1h-1zM0 3h1v1h-1zM2 3h1v1h-1zM5 3h2v1h-2zM8 3h1v1h-1zM11 3h1v1h-1zM0 4h1v1h-1zM2 4h7v1h-7zM11 4h1v1h-1zM0 5h1v1h-1zM11 5h1v1h-1zM0 6h1v1h-1zM2 6h8v1h-8zM11 6h1v1h-1zM0 7h1v1h-1zM2 7h1v1h-1zM9 7h1v1h-1zM11 7h1v1h-1zM0 8h1v1h-1zM2 8h1v1h-1zM9 8h1v1h-1zM11 8h1v1h-1zM0 9h1v1h-1zM2 9h1v1h-1zM9 9h1v1h-1zM11 9h1v1h-1zM0 10h1v1h-1zM2 10h1v1h-1zM9 10h1v1h-1zM11 10h1v1h-1zM0 11h12v1h-12z", "monitor": "M0 0h12v1h-12zM0 1h1v1h-1zM11 1h1v1h-1zM0 2h1v1h-1zM2 2h8v1h-8zM11 2h1v1h-1zM0 3h1v1h-1zM2 3h1v1h-1zM9 3h1v1h-1zM11 3h1v1h-1zM0 4h1v1h-1zM2 4h1v1h-1zM9 4h1v1h-1zM11 4h1v1h-1zM0 5h1v1h-1zM2 5h1v1h-1zM9 5h1v1h-1zM11 5h1v1h-1zM0 6h1v1h-1zM2 6h8v1h-8zM11 6h1v1h-1zM0 7h1v1h-1zM11 7h1v1h-1zM0 8h12v1h-12zM4 9h4v1h-4zM2 10h8v1h-8z", "image": "M0 1h12v1h-12zM0 2h1v1h-1zM11 2h1v1h-1zM0 3h1v1h-1zM11 3h1v1h-1zM0 4h1v1h-1zM2 4h2v1h-2zM11 4h1v1h-1zM0 5h1v1h-1zM2 5h2v1h-2zM11 5h1v1h-1zM0 6h1v1h-1zM8 6h1v1h-1zM11 6h1v1h-1zM0 7h1v1h-1zM7 7h3v1h-3zM11 7h1v1h-1zM0 8h1v1h-1zM3 8h1v1h-1zM6 8h6v1h-6zM0 9h1v1h-1zM2 9h3v1h-3zM6 9h6v1h-6zM0 10h12v1h-12z", "arrow-right": "M5 1h1v1h-1zM5 2h2v1h-2zM5 3h3v1h-3zM0 4h10v1h-10zM0 5h11v1h-11zM0 6h10v1h-10zM5 7h3v1h-3zM5 8h2v1h-2zM5 9h1v1h-1z", "arrow-down": "M4 0h3v1h-3zM4 1h3v1h-3zM4 2h3v1h-3zM4 3h3v1h-3zM4 4h3v1h-3zM0 5h1v1h-1zM4 5h3v1h-3zM10 5h1v1h-1zM0 6h2v1h-2zM4 6h3v1h-3zM9 6h2v1h-2zM1 7h2v1h-2zM4 7h3v1h-3zM8 7h2v1h-2zM2 8h7v1h-7zM3 9h5v1h-5zM4 10h3v1h-3zM5 11h1v1h-1z", "check": "M11 1h1v1h-1zM10 2h2v1h-2zM9 3h2v1h-2zM0 4h1v1h-1zM8 4h2v1h-2zM0 5h2v1h-2zM7 5h2v1h-2zM1 6h2v1h-2zM6 6h2v1h-2zM2 7h2v1h-2zM5 7h2v1h-2zM3 8h3v1h-3zM4 9h1v1h-1z", "alert": "M0 0h12v1h-12zM0 1h1v1h-1zM5 1h2v1h-2zM11 1h1v1h-1zM0 2h1v1h-1zM5 2h2v1h-2zM11 2h1v1h-1zM0 3h1v1h-1zM5 3h2v1h-2zM11 3h1v1h-1zM0 4h1v1h-1zM5 4h2v1h-2zM11 4h1v1h-1zM0 5h1v1h-1zM5 5h2v1h-2zM11 5h1v1h-1zM0 6h1v1h-1zM5 6h2v1h-2zM11 6h1v1h-1zM0 7h1v1h-1zM11 7h1v1h-1zM0 8h1v1h-1zM5 8h2v1h-2zM11 8h1v1h-1zM0 9h1v1h-1zM5 9h2v1h-2zM11 9h1v1h-1zM0 10h1v1h-1zM11 10h1v1h-1zM0 11h12v1h-12z", "menu": "M0 1h12v1h-12zM0 2h12v1h-12zM0 5h12v1h-12zM0 6h12v1h-12zM0 9h12v1h-12zM0 10h12v1h-12z", "close": "M0 0h2v1h-2zM10 0h2v1h-2zM0 1h3v1h-3zM9 1h3v1h-3zM1 2h3v1h-3zM8 2h3v1h-3zM2 3h3v1h-3zM7 3h3v1h-3zM3 4h6v1h-6zM4 5h4v1h-4zM4 6h4v1h-4zM3 7h6v1h-6zM2 8h3v1h-3zM7 8h3v1h-3zM1 9h3v1h-3zM8 9h3v1h-3zM0 10h3v1h-3zM9 10h3v1h-3zM0 11h2v1h-2zM10 11h2v1h-2z"};

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(" ");
  }
  function omit(obj, keys) {
    var o = {};
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) < 0) o[k] = obj[k];
    return o;
  }

  var T = {
    ua: {
      book: "Записатися", excursions: "Екскурсії", exhibits: "Експонати", courses: "Курси", contacts: "Контакти",
      menu: "Меню", closeMenu: "Закрити меню", lang: "Мова сайту", placeholder: "тимчасово",
      duration: "Тривалість", sessions: "Заняття", audience: "Для кого", price: "Ціна",
      photo: "Фото — заглушка",
      direction: "Напрям", directionHint: "Екскурсія або курс", choose: "Оберіть зі списку",
      name: "Ваше ім'я", phone: "Телефон", phoneHint: "Формат: +380 XX XXX XX XX", required: "обов'язково",
      send: "Надіслати", sending: "Надсилаємо…", sendingStatus: "Надсилаємо заявку…", retry: "Надіслати ще раз", again: "Надіслати ще одну заявку",
      prefilled: "Підставлено з картки — можна обрати інший напрям.",
      errDirection: "Оберіть, будь ласка, екскурсію або курс.", errName: "Вкажіть, будь ласка, Ваше ім'я.",
      errPhone: "Вкажіть номер у форматі +380 XX XXX XX XX.", errConsent: "Без Вашої згоди ми не зможемо зателефонувати.",
      errSend: "Не вдалося надіслати заявку. Спробуйте ще раз або зателефонуйте нам.",
      success: "Дякуємо! Ми зателефонуємо Вам найближчим часом.",
      address: "Адреса", hours: "Години роботи", route: "Прокласти маршрут", map: "Карта"
    },
    en: {
      book: "Book now", excursions: "Tours", exhibits: "Exhibits", courses: "Courses", contacts: "Contacts",
      menu: "Menu", closeMenu: "Close menu", lang: "Site language", placeholder: "placeholder",
      duration: "Duration", sessions: "Sessions", audience: "Who it's for", price: "Price",
      photo: "Photo — placeholder",
      direction: "What would you like to book?", directionHint: "A tour or a course", choose: "Choose from the list",
      name: "Your name", phone: "Phone", phoneHint: "Format: +380 XX XXX XX XX", required: "required",
      send: "Send", sending: "Sending…", sendingStatus: "Sending your request…", retry: "Try again", again: "Send another request",
      prefilled: "Filled in from the card — you can choose another.",
      errDirection: "Please choose a tour or a course.", errName: "Please tell us your name.",
      errPhone: "Please enter a number like +380 XX XXX XX XX.", errConsent: "We can only call you with your consent.",
      errSend: "We couldn't send your request. Please try again or call us.",
      success: "Thank you! We will call you soon.",
      address: "Address", hours: "Opening hours", route: "Get directions", map: "Map"
    }
  };
  function t(lang) { return T[lang] || T.ua; }

  function scrollToId(id) {
    var el = typeof document !== "undefined" && document.getElementById(id);
    if (!el) return;
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }

  /* ---------- PixelIcon ---------- */
  function PixelIcon(props) {
    var name = props.name, size = props.size, label = props.label;
    var d = ICONS[name];
    if (!d) return null;
    return h("svg", {
      className: cx("scm-icon", size === "lg" && "scm-icon--lg", props.className),
      viewBox: "0 0 12 12", "aria-hidden": label ? undefined : "true", role: label ? "img" : undefined,
      "aria-label": label || undefined, focusable: "false", shapeRendering: "crispEdges"
    }, h("path", { d: d }));
  }
  PixelIcon.names = Object.keys(ICONS);

  /* ---------- Button ---------- */
  function Button(props) {
    var variant = props.variant || "primary";
    var noteId = useId();
    var rest = omit(props, ["variant", "size", "block", "icon", "iconEnd", "className", "children", "href", "disabledNote"]);
    var cls = cx("scm-btn", variant === "secondary" && "scm-btn--secondary", props.size === "lg" && "scm-btn--lg", props.block && "scm-btn--block", props.className);
    var kids = [
      props.icon ? h(PixelIcon, { key: "i", name: props.icon }) : null,
      h("span", { key: "l" }, props.children),
      props.iconEnd ? h(PixelIcon, { key: "e", name: props.iconEnd }) : null
    ];
    if (props.href) return h("a", Object.assign({ className: cls, href: props.href }, rest), kids);
    /* A disabled button never relies on its paler look alone: disabledNote is shown as text under it and linked for screen readers. */
    var withNote = props.disabled && props.disabledNote;
    var btn = h("button", Object.assign({ type: "button", className: cls }, rest, withNote ? { "aria-describedby": noteId } : null), kids);
    if (!withNote) return btn;
    return h("span", { className: cx("scm-btn-wrap", props.block && "scm-btn-wrap--block") }, btn,
      h("span", { id: noteId, className: "scm-btn__note" }, props.disabledNote));
  }

  /* ---------- PlaceholderTag ---------- */
  function PlaceholderTag(props) {
    return h("span", { className: cx("scm-tag", props.className), title: props.title }, props.children || t(props.lang).placeholder);
  }

  /* ---------- Cursor ---------- */
  function Cursor(props) {
    return h("span", { className: cx("scm-cursor", props.blink === false && "scm-cursor--static"), "aria-hidden": "true" });
  }

  /* ---------- Window ---------- */
  function Window(props) {
    var Tag = props.as || "article";
    var rest = omit(props, ["as", "title", "controls", "className", "bodyClassName", "children", "media", "titleIcon"]);
    return h(Tag, Object.assign({ className: cx("scm-window", props.className) }, rest),
      props.title != null ? h("div", { className: "scm-window__bar" },
        props.titleIcon ? h(PixelIcon, { name: props.titleIcon }) : null,
        h("span", { className: "scm-window__title" }, props.title),
        props.controls === false ? null : h("span", { className: "scm-window__ctrls", "aria-hidden": "true" },
          h("span", { className: "scm-window__ctrl scm-window__ctrl--min" }),
          h("span", { className: "scm-window__ctrl scm-window__ctrl--max" }),
          h("span", { className: "scm-window__ctrl scm-window__ctrl--x" }))
      ) : null,
      props.media || null,
      h("div", { className: cx("scm-window__body", props.bodyClassName) }, props.children));
  }

  /* ---------- OfferCard (excursion / course) ---------- */
  function Fact(p) {
    return h("div", { className: "scm-fact" },
      h(PixelIcon, { name: p.icon }), h("dt", null, p.label), h("dd", null, p.value));
  }
  function OfferCard(props) {
    var L = t(props.lang);
    var kind = props.kind || "excursion";
    var HeadingTag = props.headingLevel ? "h" + props.headingLevel : "h3";
    var facts = [
      kind === "course"
        ? h(Fact, { key: "s", icon: "calendar", label: L.sessions, value: props.sessions })
        : h(Fact, { key: "d", icon: "clock", label: L.duration, value: props.duration }),
      h(Fact, { key: "a", icon: "people", label: L.audience, value: props.audience })
    ];
    return h(Window, {
      className: cx("scm-offer", props.className),
      title: props.windowTitle || (kind === "course" ? "course.exe" : "excursion.exe"),
      titleIcon: kind === "course" ? "floppy" : "monitor"
    },
      h(HeadingTag, { className: "scm-h3" }, props.title),
      props.description ? h("p", { className: "scm-small scm-muted" }, props.description) : null,
      h("dl", { className: "scm-facts" }, facts),
      h("div", { className: "scm-offer__foot" },
        h("hr", { className: "scm-divider" }),
        h("div", { className: "scm-offer__price" },
          h("span", null, h("span", { className: "scm-small scm-muted" }, L.price + ": "), h("span", { className: "scm-price" }, props.price)),
          props.placeholder ? h(PlaceholderTag, { lang: props.lang }) : null),
        h(Button, {
          block: true, iconEnd: "arrow-down", disabled: props.closedNote ? true : undefined, disabledNote: props.closedNote,
          "aria-label": (props.ctaLabel || L.book) + ": " + props.title,
          onClick: function () { if (props.onBook) props.onBook(props.value || props.title); }
        }, props.ctaLabel || L.book)));
  }

  /* ---------- ExhibitCard ---------- */
  function ExhibitCard(props) {
    var L = t(props.lang);
    var HeadingTag = props.headingLevel ? "h" + props.headingLevel : "h3";
    var media = h("div", { className: "scm-photo" },
      props.image
        ? h("img", { src: props.image, alt: props.imageAlt || props.title, loading: "lazy" })
        : [h("span", { key: "d", className: "scm-photo__dither", "aria-hidden": "true" }),
           h(PixelIcon, { key: "i", name: props.icon || "image", size: "lg" }),
           h("span", { key: "l", className: "scm-photo__label" }, L.photo)]);
    return h(Window, {
      className: cx("scm-exhibit", props.className),
      title: props.windowTitle || ("exhibit_" + (props.index != null ? String(props.index).padStart(2, "0") : "01") + ".img"),
      media: media
    },
      h("div", { className: "scm-exhibit__head" },
        h(HeadingTag, { className: "scm-h3" }, props.title),
        h("span", { className: "scm-year" }, props.year)),
      h("p", { className: "scm-small" }, props.caption),
      props.placeholder ? h(PlaceholderTag, { lang: props.lang }) : null);
  }

  /* ---------- SectionHeading ---------- */
  function SectionHeading(props) {
    var HeadingTag = props.level ? "h" + props.level : "h2";
    return h("header", { className: cx("scm-sechead", props.className) },
      props.command ? h("p", { className: "scm-terminal scm-decor", "aria-hidden": "true" }, props.command) : null,
      h(HeadingTag, { className: "scm-h2", id: props.id }, props.title),
      props.intro ? h("p", { className: "scm-lead scm-muted" }, props.intro) : null);
  }

  /* ---------- LangSwitch ---------- */
  function LangSwitch(props) {
    var value = props.value || "ua";
    var opts = props.options || [{ id: "ua", label: "UA", lang: "uk" }, { id: "en", label: "EN", lang: "en" }];
    return h("div", { className: cx("scm-lang", props.className), role: "group", "aria-label": t(value).lang },
      opts.map(function (o) {
        return h("button", {
          key: o.id, type: "button", className: "scm-lang__opt", lang: o.lang, "aria-pressed": value === o.id ? "true" : "false", disabled: o.disabled || undefined, title: o.disabled && o.disabledNote ? o.disabledNote : undefined,
          onClick: function () { if (props.onChange) props.onChange(o.id); }
        }, o.label);
      }));
  }

  /* ---------- Header ---------- */
  function defaultNav(L) {
    return [{ href: "#excursions", label: L.excursions }, { href: "#exhibits", label: L.exhibits }, { href: "#courses", label: L.courses }, { href: "#contacts", label: L.contacts }];
  }
  function Logo(props) {
    return h("a", { className: "scm-logo", href: props.href || "#top" },
      props.logo
        ? (typeof props.logo === "string" ? h("img", { src: props.logo, alt: props.name }) : props.logo)
        : h("span", { className: "scm-logo__text" }, props.name));
  }
  function Header(props) {
    var lang = props.lang || "ua", L = t(lang);
    var nav = props.nav || defaultNav(L);
    var s = useState(!!props.defaultOpen), open = s[0], setOpen = s[1];
    var panelId = useId();
    function go() { setOpen(false); }
    function navEl(extra) {
      return h("nav", { className: "scm-nav", "aria-label": props.navLabel || "Розділи сторінки" },
        nav.map(function (n) { return h("a", { key: n.href, href: n.href, onClick: extra, "aria-current": props.current === n.href ? "location" : undefined }, n.label); }));
    }
    var cta = h(Button, { className: "scm-header__cta", href: props.ctaHref || "#booking", onClick: props.onCta }, props.ctaLabel || L.book);
    return h("header", { className: cx("scm-header", props.compact && "scm-header--compact", props.className), "data-theme": props.theme },
      h("div", { className: "scm-container" },
        h("div", { className: "scm-header__in" },
          h(Logo, { logo: props.logo, name: props.name || "Software and Computer Museum" }),
          navEl(),
          h("div", { className: "scm-header__tools" },
            h(LangSwitch, { value: lang, onChange: props.onLangChange }),
            cta),
          h("button", {
            type: "button", className: "scm-iconbtn scm-header__menu", "aria-expanded": open ? "true" : "false", "aria-controls": panelId,
            "aria-label": open ? L.closeMenu : L.menu, onClick: function () { setOpen(!open); }
          }, h(PixelIcon, { name: open ? "close" : "menu" }))),
        h("div", { className: "scm-header__panel", id: panelId, "data-open": open ? "true" : "false" },
          navEl(go),
          h("div", { className: "scm-header__panel-row" },
            h(LangSwitch, { value: lang, onChange: props.onLangChange }),
            h(Button, { href: props.ctaHref || "#booking", onClick: function (e) { go(); if (props.onCta) props.onCta(e); } }, props.ctaLabel || L.book)))));
  }

  /* ---------- Hero ---------- */
  function Hero(props) {
    var L = t(props.lang);
    var actions = props.actions || [
      { href: "#excursions", label: L.excursions, icon: "monitor" },
      { href: "#exhibits", label: L.exhibits, icon: "floppy" },
      { href: "#courses", label: L.courses, icon: "calendar" }
    ];
    return h("section", { className: cx("scm-hero", props.className), "data-theme": props.theme || "blue", id: props.id, "aria-labelledby": "scm-hero-title" },
      props.decor === false ? null : h("div", { className: "scm-hero__pixels", "aria-hidden": "true" }),
      h("div", { className: "scm-container scm-hero__in" },
        props.command !== null ? h("p", { className: "scm-terminal scm-decor", "aria-hidden": "true" }, props.command || "C:\\MUSEUM> start", h(Cursor, { blink: props.blink })) : null,
        h("h1", { className: "scm-h1 scm-hero__title", id: "scm-hero-title" }, props.title || "Software and Computer Museum"),
        props.slogan ? h("p", { className: "scm-lead scm-hero__lead" }, props.slogan) : null,
        h("div", { className: "scm-hero__actions" }, actions.map(function (a) {
          return h(Button, { key: a.href, href: a.href, icon: a.icon, iconEnd: "arrow-down", size: "lg", onClick: a.onClick }, a.label);
        }))));
  }

  /* ---------- Field ---------- */
  function Field(props) {
    var autoId = useId();
    var id = props.id || autoId;
    var hintId = id + "-hint", errId = id + "-err";
    var describedBy = cx(props.hint && hintId, props.error && errId) || undefined;
    var control = React.Children.only(props.children);
    control = React.cloneElement(control, {
      id: id, "aria-describedby": describedBy, "aria-invalid": props.error ? "true" : undefined, "aria-required": props.required ? "true" : undefined
    });
    return h("div", { className: cx("scm-field", props.className), "data-invalid": props.error ? "true" : undefined },
      h("label", { className: "scm-field__label", htmlFor: id }, props.label,
        props.required && props.requiredText ? h("span", { className: "scm-field__req" }, " · " + props.requiredText) : null),
      props.hint ? h("span", { className: "scm-field__hint", id: hintId }, props.hint) : null,
      control,
      props.error ? h("div", { className: "scm-alert", id: errId, role: "alert" }, h(PixelIcon, { name: "alert" }), h("span", null, props.error)) : null);
  }
  var Input = React.forwardRef(function Input(props, ref) {
    return h("input", Object.assign({ ref: ref, className: cx("scm-input", props.className) }, omit(props, ["className"])));
  });

  /* ---------- BookingForm ---------- */
  function normalizePhone(v) {
    var d = String(v || "").replace(/\D/g, "");
    if (d.length === 10 && d.charAt(0) === "0") d = "38" + d;
    return d;
  }
  function BookingForm(props) {
    var lang = props.lang || "ua", L = t(lang);
    var groups = props.options || [];
    var sDir = useState(props.value || ""), dir = sDir[0], setDir = sDir[1];
    var iv = props.initialValues || {};
    var sPre = useState(!!props.value), prefilled = sPre[0], setPre = sPre[1];
    var sName = useState(iv.name || ""), name = sName[0], setName = sName[1];
    var sPhone = useState(iv.phone || ""), phone = sPhone[0], setPhone = sPhone[1];
    var sConsent = useState(false), consent = sConsent[0], setConsent = sConsent[1];
    var sErr = useState({}), err = sErr[0], setErr = sErr[1];
    var sState = useState(props.initialState || "idle"), state = sState[0], setState = sState[1];
    var dirRef = useRef(null), nameRef = useRef(null), phoneRef = useRef(null), consentRef = useRef(null);
    var first = useRef(true);

    useEffect(function () {
      if (first.current) { first.current = false; return; }
      if (props.value) {
        setDir(props.value); setPre(true); setErr(function (e) { return Object.assign({}, e, { dir: null }); }); setState("idle");
        if (props.focusOnValue !== false && nameRef.current) nameRef.current.focus({ preventScroll: true });
      }
    }, [props.value, props.valueStamp]);

    useEffect(function () { if (props.initialErrors) setErr(validate()); }, []);

    function validate() {
      var e = {};
      if (!dir) e.dir = L.errDirection;
      if (!name.trim()) e.name = L.errName;
      if (!/^380\d{9}$/.test(normalizePhone(phone))) e.phone = L.errPhone;
      if (props.consentLabel && !consent) e.consent = L.errConsent;
      return e;
    }
    function submit(ev) {
      ev.preventDefault();
      if (state === "sending") return;
      var e = validate();
      setErr(e);
      var order = [["dir", dirRef], ["name", nameRef], ["phone", phoneRef], ["consent", consentRef]];
      for (var i = 0; i < order.length; i++) if (e[order[i][0]]) { if (order[i][1].current) order[i][1].current.focus(); return; }
      var data = { direction: dir, name: name.trim(), phone: "+" + normalizePhone(phone), lang: lang };
      setState("sending");
      Promise.resolve(props.onSubmit ? props.onSubmit(data) : null)
        .then(function () { setState("sent"); })
        .catch(function () { setState("error"); });
    }
    function reset() { setDir(""); setPre(false); setName(""); setPhone(""); setConsent(false); setErr({}); setState("idle"); }

    if (state === "sent") {
      return h(Window, { as: "div", className: cx("scm-success", props.className), bodyClassName: "scm-success__body", title: "message.txt", id: props.id, role: "status" },
        h("span", { className: "scm-success__icon", "aria-hidden": "true" }, h(PixelIcon, { name: "check", size: "lg" })),
        h("p", { className: "scm-h3" }, props.successText || L.success),
        h(Button, { variant: "secondary", onClick: reset }, L.again));
    }

    var sending = state === "sending";
    return h(Window, { as: "div", className: props.className, title: props.windowTitle || "booking.exe", id: props.id },
      h("form", { className: "scm-form", noValidate: true, onSubmit: submit, "aria-busy": sending ? "true" : undefined },
        h(Field, { label: L.direction, error: err.dir, required: true,
          hint: prefilled && dir ? h("span", { className: "scm-field__prefill" }, h(PixelIcon, { name: "check" }), h("span", null, L.prefilled)) : L.directionHint },
          h("select", {
            ref: dirRef, className: "scm-select", value: dir, required: true, disabled: sending || undefined, "data-prefilled": prefilled && dir ? "true" : undefined,
            onChange: function (e) { setDir(e.target.value); setPre(false); if (err.dir) setErr(Object.assign({}, err, { dir: null })); }
          },
            h("option", { value: "", disabled: true }, L.choose),
            groups.map(function (g) {
              return h("optgroup", { key: g.label, label: g.label },
                g.items.map(function (it) { var v = typeof it === "string" ? it : it.value; var lab = typeof it === "string" ? it : it.label; return h("option", { key: v, value: v }, lab); }));
            }))),
        h(Field, { label: L.name, error: err.name, required: true },
          h(Input, {
            ref: nameRef, type: "text", autoComplete: "name", value: name, required: true, disabled: sending || undefined,
            onChange: function (e) { setName(e.target.value); if (err.name) setErr(Object.assign({}, err, { name: null })); }
          })),
        h(Field, { label: L.phone, hint: L.phoneHint, error: err.phone, required: true },
          h(Input, {
            ref: phoneRef, type: "tel", inputMode: "tel", autoComplete: "tel", placeholder: "+380 __ ___ __ __", value: phone, required: true, disabled: sending || undefined,
            onFocus: function () { if (!phone) setPhone("+380 "); },
            onBlur: function () { if (phone.trim() === "+380") setPhone(""); },
            onChange: function (e) { setPhone(e.target.value); if (err.phone) setErr(Object.assign({}, err, { phone: null })); }
          })),
        props.consentLabel ? h("div", { className: "scm-field", "data-invalid": err.consent ? "true" : undefined },
          h("label", { className: "scm-check" },
            h("input", { ref: consentRef, type: "checkbox", checked: consent, "aria-invalid": err.consent ? "true" : undefined,
              onChange: function (e) { setConsent(e.target.checked); if (err.consent) setErr(Object.assign({}, err, { consent: null })); } }),
            h("span", null, props.consentLabel)),
          err.consent ? h("div", { className: "scm-alert", role: "alert" }, h(PixelIcon, { name: "alert" }), h("span", null, err.consent)) : null) : null,
        state === "error" ? h("div", { className: "scm-alert", role: "alert" }, h(PixelIcon, { name: "alert" }), h("span", null, L.errSend)) : null,
        h("p", { className: "scm-sr", role: "status" }, sending ? L.sendingStatus : ""),
        h(Button, { type: "submit", block: true, size: "lg", className: sending ? "scm-btn--busy" : undefined, icon: sending ? "clock" : null, iconEnd: sending ? null : "arrow-right", "aria-disabled": sending ? "true" : undefined },
          sending ? L.sending : state === "error" ? L.retry : (props.submitLabel || L.send))));
  }

  /* ---------- ContactsBlock ---------- */
  function ContactsBlock(props) {
    var L = t(props.lang);
    var tel = props.phone ? "tel:" + String(props.phone).replace(/[^\d+]/g, "") : null;
    var map = h("div", { className: "scm-map" },
      props.mapImage ? h("img", { src: props.mapImage, alt: L.map + ": " + props.address }) :
        [h("span", { key: "g", className: "scm-map__grid", "aria-hidden": "true" }),
         h("span", { key: "r", className: "scm-map__road", "aria-hidden": "true" }),
         h("span", { key: "p", className: "scm-map__pin", "aria-hidden": "true" }, h(PixelIcon, { name: "pin", size: "lg" }))],
      h("div", { className: "scm-map__bar" },
        props.placeholder ? h(PlaceholderTag, { lang: props.lang }, L.map + " — " + L.placeholder) : h("span", { className: "scm-small" }, props.address),
        h(Button, { variant: "secondary", href: props.routeHref || "#", icon: "pin", target: props.routeHref ? "_blank" : undefined, rel: props.routeHref ? "noopener" : undefined }, L.route)));
    return h("div", { className: cx("scm-contacts", props.className) },
      h(Window, { title: props.windowTitle || "contacts.txt", as: "div" },
        h("ul", { className: "scm-contacts__list" },
          h("li", { className: "scm-contacts__item" }, h(PixelIcon, { name: "pin" }),
            h("div", null, h("div", { className: "scm-field__label" }, L.address), h("div", null, props.address))),
          h("li", { className: "scm-contacts__item" }, h(PixelIcon, { name: "clock" }),
            h("div", null, h("div", { className: "scm-field__label" }, L.hours),
              h("dl", { className: "scm-hours" }, (props.hours || []).map(function (r, i) {
                return h(React.Fragment, { key: i }, h("dt", null, r.days), h("dd", null, r.time));
              })))),
          h("li", { className: "scm-contacts__item" }, h(PixelIcon, { name: "phone" }),
            h("div", null, h("div", { className: "scm-field__label" }, L.phone), tel ? h("a", { href: tel }, props.phone) : null))),
        props.placeholder ? h(PlaceholderTag, { lang: props.lang }) : null),
      map);
  }

  /* ---------- Footer ---------- */
  function Footer(props) {
    var lang = props.lang || "ua", L = t(lang);
    var name = props.name || "Software and Computer Museum";
    var tel = props.phone ? "tel:" + String(props.phone).replace(/[^\d+]/g, "") : null;
    return h("footer", { className: cx("scm-footer", props.className), "data-theme": props.theme || "blue" },
      h("div", { className: "scm-container scm-footer__in" },
        h("div", { className: "scm-stack", style: { gap: "var(--space-3)" } },
          h(Logo, { logo: props.logo, name: name }),
          props.tagline ? h("p", { className: "scm-small scm-muted" }, props.tagline) : null),
        h("div", { className: "scm-stack", style: { gap: "var(--space-2)" } },
          props.address ? h("p", { className: "scm-small" }, props.address) : null,
          tel ? h("a", { className: "scm-small", href: tel, style: { fontWeight: 600 } }, props.phone) : null,
          props.hoursShort ? h("p", { className: "scm-small scm-muted" }, props.hoursShort) : null),
        h(LangSwitch, { value: lang, onChange: props.onLangChange }),
        h("p", { className: "scm-footer__copy" }, props.copyright || ("© " + (props.year || new Date().getFullYear()) + " " + name))));
  }

  var api = {
    Button: Button, LangSwitch: LangSwitch, PixelIcon: PixelIcon, Window: Window, OfferCard: OfferCard, ExhibitCard: ExhibitCard,
    SectionHeading: SectionHeading, Cursor: Cursor, PlaceholderTag: PlaceholderTag, Header: Header, Hero: Hero,
    Field: Field, BookingForm: BookingForm, ContactsBlock: ContactsBlock, Footer: Footer,
    scrollToId: scrollToId, strings: T
  };
  window.SCM = Object.assign(window.SCM || {}, api);
})();
