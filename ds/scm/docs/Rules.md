# Правила

Короткі правила, які тримають сторінки сайту музею однаковими. Значення — лише через токени; назви токенів у дужках.

## Шкала відступів

Сітка кратна 4 px, назва токена = кратність чотирьом. Інших відступів немає: якщо потрібного кроку бракує, візьміть сусідній, а не проміжне число.

| Токен | Значення | Де використовувати |
|---|---|---|
| `space-1` | 4 px | Піктограма й текст у дрібних мітках (`PlaceholderTag`), квадрати в рядку заголовка вікна |
| `space-2` | 8 px | Піктограма й текст у кнопках; підпис поля → поле; плашка помилки |
| `space-3` | 12 px | Рядки фактів у картці; падінг рядка заголовка вікна |
| `space-4` | 16 px | Падінг вікна й бічні поля сторінки на смартфоні; кнопки першого екрана на смартфоні |
| `space-6` | 24 px | Падінг вікна на комп'ютері; між полями форми; між картками по горизонталі |
| `space-8` | 32 px | Між картками по вертикалі; від заголовка секції до карток; бічні поля на комп'ютері |
| `space-12` | 48 px | Вертикальний падінг секції на смартфоні |
| `space-16` | 64 px | Вертикальний падінг першого екрана на смартфоні |
| `space-24` | 96 px | Вертикальний падінг секції на комп'ютері |

- Усередині компонента — `space-1`…`space-6`, між компонентами — `space-6`…`space-8`, між секціями — `space-12`…`space-24`.
- Відступи на смартфоні менші на один-два кроки шкали, а не «пропорційно у відсотках».

## Сітка

- **Контейнер** — `container` (1200 px) по центру, бічні поля `space-8` на комп'ютері й `space-4` вужче 768 px.
- **Картки екскурсій і курсів** — `.scm-grid-3`: 3 колонки від 1024 px, 1 колонка нижче (не ширше `grid-w-m`, 640 px). Проміжок `space-8` по вертикалі, `space-6` по горизонталі; картки в ряду однакової висоти, кнопка «Записатися» притиснута донизу.
- **Експонати** — `.scm-grid-3.scm-grid--exhibits`:

| Ширина | Колонок | Як виглядає |
|---|---|---|
| від 1024 px (комп'ютер) | 3 | 6 експонатів — рівно 3×2 |
| 560–1023 px (широкий смартфон, планшет) | 2 | 3 ряди по 2 |
| вужче 560 px (смартфон) | 1 | стовпчик із 6 карток |

- Кількість експонатів на першій сторінці — 6 (кратна і 3, і 2), щоб у жодній сітці не лишалося «дірки». Більше — кнопкою «Показати ще експонати» під сіткою.
- **Форма й контакти** — дві колонки від 1024 px, одна нижче; форма перша.
- **Перший екран** — три кнопки-переходи в ряд від 1024 px, стовпчиком нижче.

## Точки переходу

| Токен | Ширина | Що змінюється |
|---|---|---|
| `bp-mobile` | 360 px | Найвужчий смартфон, на якому перевіряємо макет. Нічого не обрізається, горизонтальної прокрутки немає |
| `bp-phone-wide` | 560 px | Експонати: з 1 колонки в 2 |
| `bp-tablet` | 768 px | Поля сторінки `space-8`; заголовки H1/H2 комп'ютерного розміру; повна тінь вікон; з'являються рядок команди й квадрати в рядку заголовка |
| `bp-desktop` | 1024 px | Повна навігація в шапці (без кнопки меню); картки в 3 колонки; форма й контакти поруч |
| `bp-wide` | 1280 px | Шапка в один рядок. На 1024–1279 px якорі йдуть другим рядком, але лишаються видимими |

Планшет — проміжний стан, окремого макета для нього не малюємо: макети на 360–375 px і на 1280 px, перевірка на 560, 768 і 1024 px. У медіазапитах межа — «токен мінус 1 px» (`max-width: 767px`).

## Кути й рамки «вікон»

- **Кути** — тільки `radius-none` (0). Жодних округлень ні у вікон, ні в кнопок, полів, плашок, зображень.
- **Рамка вікна** — `border-frame` (3 px) кольору `line`: синя на світлому фоні, біла на синьому.
- **Рядок заголовка** — висота `titlebar-h` (36 px), інверсія тіла вікна (`titlebar-bg` / `titlebar-ink`), «назва файлу» шрифтом `mono`; три квадрати `titlebar-ctrl` (16 px) з рамкою `border-control`.
- **Рамки полів і кнопок** — `border-control` (2 px); помилка — `border-error` (3 px) пунктиром; неактивне поле — 2 px крапками.
- **Роздільники** всередині вікна — `border-divider` (2 px) пунктиром `line-soft`.
- **Тіні** — лише жорсткі, без розмиття: вікна `shadow-window` (6 px), на смартфоні `shadow-window-m` (3 px); кнопки `shadow-button` (4 px).

## Фокус із клавіатури

Фокус видно завжди, коли людина переходить клавішею Tab, і ніколи не прибирається (`outline: none` заборонено).

- Суцільна рамка `border-focus` (3 px) з відступом `focus-offset` (3 px), колір `focus`: на світлому фоні — `brand-secondary` (#1c4587, 9,3:1 до білого), на синьому — білий (10,6:1 до #233a7e, 9,3:1 до вікна #1c4587).
- Відступ лишає між елементом і рамкою смужку фону, тому фокус видно і на синій кнопці на білому, і на білій кнопці на синьому.
- Пункт меню-якір — рамка без відступу (щільний ряд). Поле — рамка поверх наведення.
- Фокус відрізняється від наведення формою (рамка замість підкреслення), а не лише кольором.

![Фокус на світлому й синьому фоні: кнопки, поле, перемикач мови, пункт меню](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAADcCAMAAABXhqjPAAAAYFBMVEX////5+vzu8Pbn6/np6/Pi5e/X3vTZ3urT2evIz+S8xNuxu9insc+bpsmQodWVocWPnMCGlL19jLd2hbNrfKxcbqNTZp5OYZtLX5tLX5g9Uo4vRYccRYcpQIIjOn4VIUfopSRlAAASsElEQVR42u3ciZqiOruGYWErxbiQKVK6pc//LP8vAQcUEC2tQnzea61uFI2BSm6TQNdiQcgLUhHygtCzCGARwCKARQhgEcAigEUIYBHAIoBFCGARwCKARQhgEcAigEUIYBHAIoBFCGARwCKARQhgEcAigEUIYBHAIoBFCGARwCKARQhgEcAigEUIYBHAIoBFCGARwCKARQhgEcAigEUIYBHAIoBFCGARwCKAdYxt/iOA9ZNszX+EvBqsYGOvSp/+Clg/Sebstk5O7yQvB8su8jy36K+A9ZPsPN/39/RO8vop4SoIlhdPuS79F7DumxJm2eWUUG3orWQIrKBQuSd/J1mWRRqhNNNxF2FWx1rYzTNeJi8Ms6/TxnlUYf6yoqJIZfAV6N1JOtjcPSk2Dc1iWKQ/SH/S12KVZYvFOtOP1gtToXXrXbpisdtsJIEe6MlbAv3ZupZ2JnNVU3BrCGjHhUr95kAzfQDHQz9U2c0yW+q00sVJweZtvi5yUZ+CeLWw0sw+VowMgJV5blCISUFaVUWQVbsg1hsyAwwDHSUPZH8atIVyvXrwtfa8UAZfSt4pr/kenFma8gpduk5UHbZ2spXUfx2TyvNhZoZ1oXnpLpDSt0FQVVGwr2t52EUmCJZf5rEqxZZChXFRSG8Mw7yMw5XmQJUGrGVZZEXpy2v9ha1K77RxZk9elqZr52WSluJUrHcXm8Hm7puCc8NdqdfE7LJcL6Jyo4uxFmGp0ViVZdla4F+XcZSXrt7IpYqRpqc0pcjbE6ltuFhslC74XCypVJTpz8jLBqzjoR+q7JXygb6U7Eq96oIXSVnG8teyVFleKlvqFOljC7BqGKzc8WPX2VRbR7q+7yTVzgn0s8JXmvjOOtnKg7zauU5x9q7Cdxwt2D5wotAJ5Ql5ZxU5aqhxJ45fg7VJYsdPsvrTA9fRUrlOe5UsMnvWsvXtOPoVO8eJq7Xj6Fruq9TJTrvIBMHKC0tIkD5ZyAApqhfS03J56ORmY2kUqcGKygYss3HyqlwXebpZya5IS/I1EqxQc7FaLL7KtXyIiKOUrVQDVqG0OKHs8ttgrfTn1R9jb/TALlWJRk3AUlYNVn48mjpWqV9Xi3px6McqC1hZA1Yso7WNHLyl0iI3pyDVBQbyxMauP5MMgeV7O8FqbcAqnBZYMoBxtkaVXLA5B6twIs/XO/Paqe+RYB2L2DhRw2VeBdocecKJ22BtpCp6GJfKrlyD5bo7123A8tz9aReZHlimIy40SzVY3g2wbJXXYNUbp/FLscgzS8XS8b0aotFgpXqQE5ZfugK24JRu1jVYXj3GydRSxk1XYDXILLRu1ib19aDHLpPSP4K1On+bgNUM0w5gHQ/9WGVP3r48gCWjNinRLUP9cfWLA11yWIYRF0hvgbXVwyNz24IQEvh9YO1c/xys0Kv8YO+uhZWifvFPwUqcb8+7BKtyXdkKXDP62zmxEwpQBqzCjL0Ou8j0wHKPnVqmhJFKFl1g6WFIA1aoghqseuM0UMv0f0Va8+PJG2KZr2WbNljL0LsAa+16So+jMmUcssswK5MarKxQmhjBSOp2MSUM89zWG4EbyKBIPi+w9YHI2/PsCJatdy1WEsvM7VSWeovDlHB1OvRjlb3S24RHsMzAKyq/DIVLme96hmirKFTBBdIbYKlDh986sXJyA5YbiFxtsBI3OwfLD/R/Xigv2OjxViz/e0HgtcHapsUFWI6UvT0HS5dqwArcKna+W2BlKtN27oRUz9V/J4ETxgaswHN1MYddZNJgbbJ8k9ldYLnSdRuwVBTWYNUbxxQ1WNkwWOuytNpgSVQ9NDJjHLuMxMEDWMXKTDYDKeurVUqeqcKsYUl0lSOxLlcGrKD8aoOlyrIeEPnZxsxih8By06INVl5IMakGq6mpHmIxwLoHrHUYfPeB5SbpOVheDVYg2AyAFTnOvg1WlMSuuT/iAFbagKXpaUZ1pzc7jmdKz8QyPT9MhLeoAcvbVqddZHpgnaZNekbWTMIuwdJjjBqsRNk1WM3GMVmuwZIRWqJXw/umhGF7HdyMsL6sg1zii4BlFYtmSmjEkHJ0wospoa1FkhFWvbyVm9e4Gix7E7enhPF6vW5uuLAD/cxhSng89GOVBSy/jM+nhLYpeKOvO2Res3JlsYI1dkpoNmR6p3qmhKG7S87BCnwNlhvVk8C+KWHq+PurKWH9mgNYsXyABivXPOkPbo2wvuuX6Oh6JTuvaqaEZu3suItMcNFdLynbRVCDtTLLOldgJTIEqcESQmqwmo0zivw8kz/qlZ9IOv3oNazDLC8sSkvAWnwdwLLMortMVcPIjJXOwTKzxHX5Zda/l2Uehom8VcBapOoAVtC6lucdjDouuh8O/VhlActS6gBWUupLCKm+aOqZNazDtUEFWLcX3T1f3xiaCViOX/WB5ayrFlipk/uB/CFTukxDpMavYYXnYO31hE6DFTnrJPHOr/hFh5GT5ybJWuokYFWbA1h7z9ufdpEJghWWiZ/qYUqhXDfRfd11s9J3T3NDK9Ljohqsjd2A1WycEsl8S4VagCLwVb64DyyzSLUuPdsMqhqw5DOTZW1ocX5jg4yq3FATVl+MbMQRtQxYvhmObYowai01eWXq+Xk9JQwlq9OhH6ssYOlppgYrD2P9wZpqKTE2YAmOFmCNBCt1ojwUerb6MmAbLKUCJ1d6+OPu2mDp2wscN9XUeVnu+mNva4iSxBVptipzQrWpvs2VQQ2WWYmKzj/iAFY9BBTLdmYo1YCly9oed+HGFG8cjVS5iY0JIk5k1Rvl2eXCpUqXiwaseNGA1Wyc35jZ+LDK63Wle8CqZ2cyQWyDZRelWw+TWjc2mKWrxD7e1mDpsZBBTYNl1SMsOZhs1ZJZjkud5o/+2aEfquwZq+o/yiKxGptsoXBZ31oWANbYG0cTVw+gBAa/ugDLMzOuQh7E1QVY1U7Do++E0jdk7caCpad9Si+16/hV7q13BqxvQ09+fmPDASwzhpPJX94Ga+c56rgLN6YI1sJyl09pu+FhArac6O9xWLp236Ev+dUTzwar2qtHfhNDmh1WwRjgABYhvwYWIYBFAIsAFiGARQCLABYhgEUAiwAWIYBFAIsAFiGARQCLABYhgEUAiwAWIYBFAIsAFiGARQCLABYhgEUAiwAWIYBFAIsAFiGARQCLABYhgEUAiwAWIYBFAIsAFgEsQgCLABYBrFb+f+b5pGN95bm7F6xPIpovrFd9vQEWASzAAizAAizAIr8D1nzPzDVYtJYHz90DYM16aeVjjvXF5w6wAAuwAAuwAAuwAAuwJgLWTM9MJ1i0mUfO3WNgzXQFphMsvuMeOXeABViABViANSewaDi3mhVgPQIWX3S3eiRgARZgARZgzSH//fcfYD3YJa/PHWAd8u/fP8B6EKzrcwdYgAVYgAVYgAVYgAVYgAVYgAVYgAVYgAVYgAVYgAVYgAVYgAVYgAVYgAVYgAVYgAVYgAVYgAVYgAVYgAVYgAVYgAVYgAVYgAVYgAVYgAVYgAVYgAVYBLAAa65gDTXLeYF182T9AR3X9Xl93X4HrGmd6VeCdetc/QUd1/V5fd0AC7AAC7AA6/Itv3VAUwDrt1AYy8Bcp4RTO9evBmtKfeivagFYgAVYgAVYw4c51KG6fjiXzbr/8b3vH673M8DqO/ru/fc8PjTwoU5bnXWD4XN4WV77/f31ncKie/+5Hj5XPz3Xw69/LVh9R39/nxnXh7rqcz0h7G4f16Ucnu2vL2ABFmABFmCNA6t/Ufr65Fx27P6T173gd+v944fXPwer7/F1CbcA6l40vz7yLgb63395xm+BNXYa9ltg9S9KD53755zrWz/rV4LV32f6aflJH+ruz/3v72rtQ2CN7ZOABViABViANXZK2H/yuw5m3CXVx97/e2DdnkaM2d83ZRuzMN213V2/LrDGTHv+ekrYD0oXvuNuAXns/b8H1u1ljzH7+6ZsYy4CdG1316+rj47pk4AFWIAFWID1yHD2einvnildV0ef7pTw0cddn9L9RTAOrGua7u3k07mtYdyXxfPO9RSnhI8+vtWH7gVrXB8cGlQAFmABFmAB1iP/NGfMlPDe2xK6TuHYS8DTuK1h/KXyrq7R10nuu1Q/fHPg1G5ruP/Y7r8tYehc3/rZTuO2huf0oZ/36aFbmSZ2WwNgARZgAdbbgPWu4dfLPBp+vcxzwSKABViABViABVgEsAALsAALsAALsAALsAALsAALsAALsAALsAALsAALsAALsAALsAALsAALsAALsAALsAALsAALsAALsAALsAALsAALsAALsAALsAALsAALsAALsAALsAALsAALsAALsAALsAALsAALsAALsAALsF4NFrn/3AHWbbDI/ecOsAALsABr7mDp/De/dII102N98bl7DCydf/NLJ1gzPdYXnzvAAizAAizAAizAAizAmgJYs84nHesrz90DYM38SurnHOsrzx1gARZgARZgARZgARZg/TlYhPxmEyQEsAhgEcAiBLAIYBHAIgSwCGARwCIEsAhgEcAiBLAIYBHAIgSwCGARwCIEsAhgEcAiBLDI74PFP+QlrwALqglgARZgARZgARYBLMB6F7Dm36oA6y/A+oj+BCqANWGwGO0B1isOktEeYAEWYAHWXMGaeasCLMACLMD6SLBeUcTbX7cArD8vqKuIt79uMQDW/800/WA90iqkoJ+2qw8Da77tqs+ZP+r1gAVYgAVYgAVYMwDr8Z9NH1jvfd0CsJ6jxOPzwT6w3ntWPQzWTO8QAqw/Bmu+d54BFmABFmABFmABFmABFmABFmABFmABFmABFmABFmABFmABFmABFmABFmABFmABFmABFmABFmABFmABFmABFmABFmABFmABFmABFmABFmABFmA9ANbzGj9gAdbpued8DmBNBqzTM+2t9uu6wLpqOq13AtZng9XVGvp/tkPldLVQwAKsCYDFlBCwXgHW3KeEVpQV+Xr1qWBdNpMhsK7LBaxesGbSrh4F6/JrbQis63IBqxes5XdVfe+rvQ9YfwjWUFMdOorrOnTvv+wUfePD54E1l3b13mANtdSho7iuQ/f+y1bcNz58HljWd5XaCyvY791PBKv7BI8Hq7tRAtZ82tVjYA0tGIwB6/pLFLDqBFV+9vfaJNJP+EmRBXojDPWfX+sv3QzDPAsswHoKWF3gdK+E3P+4u959rL0ArNm0q/cDqwuc7pXb+x9317uPtVeAlVdf9cZ2Lw2m2iqldlt5mFa7za7KZOt7Y9pZJWN7b7uXUb6yPhWsa2J6l04/HazZtKvfAOuamN5LPR8P1nZ/3sKqVLaUNKywiszXo99qWPlORvnrKgSsZ4B1u/TxHWJoytgP1vX48GlgzaZdvR9Yt0sf3x+Gpoz9YF2PD58HlvnaW5ivPu+sYan6aZW3GpaJXSXzAuv6tWOnhN0zecCaU7t6HKz+DnnrZ9W98ghY5ptwd/ZNaJk2oxvV9tusOnx/S8Pa6q3cNCwvkk3T+gDr6WD9ZAo47hu+6x6hV42w5tKu3h+sn0wBx81ILvvBKxfdi8quN1RlyZfc+tCwdspEfxOazW8zdDdrEXMD6/FF9/6rLR8P1mza1V8suj/vxtH5gbWugmZALl96X2YZQTesTXF8xWno7lWxvqIDWM8Ba/g2g/tuWxi+g2eozi8Cazbt6v3AuugVN29reHT/0KL768Ba7rfmqzDTbSrU6w2mYa0rffuMtW4tjvqmEfrvDNbtH8jf/FvC2YE1m3Y19h8/3/p5jFl0f/6/JZwfWNKYtkkQb/TtMvF+ZzUNy97uIs8v2ldz7P029uLdDrB+DNZU87w73efSrt4LrKnmiWAtgmJfVZu1NKnNzgzjzZWclZKCvv3Fxf0yVbULVPbOYI0Jvw/r52DNpV1V/D6syf22BsutF0jd1p17rre8fumXZ0+yowHW5MCaSbsCrOmBNYMA1gTBmkW7AizAAizAAizAAizAAizAAizAAizAAizAAizAAizAAizAAizAAqz3B+tWOXvAAqwHwLrVYS3AAizAAizAAizAAizAAizAYg0LsFjDAizAAizAAizAAizAAizAAizAAizAAizAAizAAizA+liwfvAD6gHrDQJYLwfrB/XpAetdTiVgARZgAdZ8wZpvnjnlekJBHwZWNfOmNZmCAAuwFi+SZabjDcD6SUGv7fnve4LfcL13EgMjwAIswAIswAIswAIswPq8gwSs9wWL3APWRwRUfh2sDz1yAliABViABViARQALsN4KLELotgSwCGARAlgEsAhgEQJYBLAIYBECWASwCGARAlgEsAhgEQJYBLAIYBECWASwCGARAlgEsAhgEQJYBLAIYBECWASwCGARAlgEsAhgEQJYBLDI2+Z/pljO8XFr0XAAAAAASUVORK5CYII=)

## Ретро-ефекти

**Що вважаємо ретро-ефектом:** мерехтливий курсор, рядок команди `C:\MUSEUM>`, піксельна сітка чи дизеринг на тлі, ілюстрація-«комп'ютер» на першому екрані. Вікна з рядком заголовка й піксельні іконки — це вже стиль системи, а не окремий ефект.

- **Не більше 1–2 ефектів на сторінці**, і щонайбільше один із них анімований. На сторінці «Екскурсії, експонати й курси» це курсор на першому екрані (анімований) і рядок команди (статичний).
- Рядок команди — не частіше ніж у половині секцій; курсор — лише на першому екрані.
- Ефект ніколи не несе змісту: усі ефекти з `aria-hidden`, текст під ними має контраст не нижче 4,5:1.
- **На смартфоні (вужче 768 px) декор спрощується сам:** ховаються рядки команди, квадрати в рядку заголовка вікна й піксельна сітка першого екрана; тінь вікон — 3 px замість 6.
- **Зменшення руху.** Якщо в пристрої ввімкнено «Зменшити рух» (`prefers-reduced-motion: reduce`), курсор не мерехтить, кнопки натискаються без переходу, а прокрутка до розділу (`scrollToId`) відбувається миттєво. Нову анімацію додавайте тільки з таким самим вимкненням.
- Мерехтіння — не частіше одного разу на секунду (`scm-blink`, 1,06 с); жодних спалахів, «друку» тексту по літерах чи паралаксу.

## Компоненти: можна й не можна

| Компонент | Можна | Не можна |
|---|---|---|
| `Button` | Основна (`primary`) — одна головна дія на рівні; другорядна (`secondary`) — для решти. `size="lg"` для першого екрана й «Надіслати»; `block` у картках і формі. Іконки з набору: «Записатися» — `arrow-down`, «Надіслати» — `arrow-right` | Додавати кольорові варіанти чи міняти колір при наведенні (наведення — лише підкреслення). Зменшувати висоту нижче `control-h`. Ставити неактивну кнопку без `disabledNote` |
| `LangSwitch` | Один і той самий стан мови в шапці, меню й підвалі; `options[].disabled`, поки англійської версії немає, з причиною текстом поруч | Робити перемикач випадним списком чи прапорцями; прибирати атрибут `lang` у кнопок; показувати лише кольором, яку мову обрано |
| `PixelIcon` | Іконки з набору, у значеннях з розділу «Іконографія»; розміри 24 і 48 px; `label` для іконки без тексту | Масштабувати на некратні розміри; фарбувати в інший колір, ніж текст поруч; брати іконки з інших наборів чи емодзі |
| `Window` | Обгортати картки, форму, контакти й повідомлення; давати «назву файлу» за змістом (`booking.exe`) | Робити квадрати в рядку заголовка кнопками; округлювати кути; прибирати рамку чи тінь окремо від решти вікон |
| `OfferCard` | Екскурсія (`kind="excursion"`) і курс (`kind="course"`) у сітці по 3; `closedNote`, коли запис тимчасово закрито | Виділяти одну картку кольором, розміром чи позначкою «хіт»; ставити більше двох фактів; прибирати ціну чи аудиторію |
| `ExhibitCard` | Фото 4:3 з `imageAlt`; підпис у 1–2 речення; 6 карток у сітці експонатів | Додавати кнопки дії в картку; ставити фото без альтернативного тексту; писати довгі описи (їм місце на сторінці експоната) |
| `SectionHeading` | H2 і вступ у 1–2 речення; рядок команди в половині секцій | Рядок команди в кожній секції; два H2 поспіль; вступ довший за ширину `measure-text` у 3+ рядки |
| `Cursor` | Один на сторінці, на першому екрані, після рядка команди | Ставити поруч зі змістом, у кнопках чи полях; лишати мерехтіння при «Зменшити рух» |
| `PlaceholderTag` | Позначати кожну заглушку (текст, фото, ціну, адресу, карту) | Залишати хоч одну позначку на сторінці після запуску; використовувати як бейдж чи категорію |
| `Header` | Логотип, 4 якорі, мова й «Записатися»; `current` для поточного розділу | Ховати навігацію в меню на комп'ютері (від 1024 px); ставити понад 4–5 якорів; прибирати «Записатися» з шапки |
| `Hero` | Рівно три рівноцінні кнопки-переходи; слоган в одне речення; синя тема | Робити одну кнопку головнішою; додавати четверту; ставити слайдер, відео чи автоматичну анімацію |
| `Field` | Видимий підпис над полем; підказку формату (`hint`) лишати і при помилці; `disabled` з причиною в `hint` | Заміняти підпис плейсхолдером; показувати помилку лише червоним чи лише рамкою без тексту; зменшувати поле нижче `control-h` |
| `BookingForm` | Підставляти напрям з картки (`value`) з підказкою «Підставлено з картки»; 3 поля — напрям, ім'я, телефон; згода (`consentLabel`), якщо музей її вимагає | Додавати поля без потреби (e-mail, дата); перевіряти поля під час введення; очищати дані після помилки відправлення |
| `ContactsBlock` | Адреса, години, телефон-посилання, місце для карти з «Прокласти маршрут» | Вставляти карту без підпису для читачів екрана; робити телефон звичайним текстом без `tel:` |
| `Footer` | Синя тема, короткі контакти, дубль перемикача мови, копірайт | Дублювати повне меню й форму; дрібний текст нижче 16 px |

Сторінкові показові картки (`LandingPage`, `ComponentSheet`, `ComponentStates`) — це приклади, а не компоненти: не використовуйте їх як шаблон коду, лише як зразок.
