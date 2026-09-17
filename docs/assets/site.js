/* Spa Suite — marketing site behaviour
   Three jobs: the mobile nav, the FAQ disclosures, and the contact form's
   handoff to WhatsApp. The hero receipt's print sequence is pure CSS, keyed
   off the --i / --stamp-at custom properties set in the markup. */

(function () {
  'use strict';

  /* --- mobile nav ------------------------------------------------------- */

  var head = document.querySelector('.head');
  var burger = document.querySelector('.burger');

  if (head && burger) {
    var setNav = function (open) {
      head.dataset.open = open ? 'true' : 'false';
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.querySelector('[data-burger-label]').textContent = open ? 'Close' : 'Menu';
    };

    burger.addEventListener('click', function () {
      setNav(head.dataset.open !== 'true');
    });

    head.querySelectorAll('nav a').forEach(function (a) {
      a.addEventListener('click', function () { setNav(false); });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && head.dataset.open === 'true') {
        setNav(false);
        burger.focus();
      }
    });
  }

  /* --- FAQ disclosures -------------------------------------------------- */

  document.querySelectorAll('.faq__q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq__item');
      var open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.querySelector('.sign').textContent = open ? '−' : '+';
    });
  });

  /* --- contact form ----------------------------------------------------- */
  /* Composes the message and hands off to WhatsApp. Sends the option's
     visible label, not its value, so the message reads as a sentence. */

  var form = document.querySelector('[data-wa-form]');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var val = function (name) {
        var el = form.elements[name];
        return el && el.value ? el.value.trim() : '';
      };

      var interestEl = form.elements.interest;
      var interest = interestEl && interestEl.value
        ? interestEl.options[interestEl.selectedIndex].text
        : '';

      var name = val('name');
      var business = val('business');
      var lines = [];

      lines.push('Hello Spa Suite — ' + name + (business ? ' from ' + business : '') + ' here.');
      if (interest) lines.push('', 'I am interested in: ' + interest);
      if (val('message')) lines.push('', val('message'));

      lines.push('', 'Phone: ' + val('phone'));
      if (val('email')) lines.push('Email: ' + val('email'));

      var url = form.dataset.waForm + '?text=' + encodeURIComponent(lines.join('\n'));
      window.open(url, '_blank', 'noopener');
    });
  }
})();
