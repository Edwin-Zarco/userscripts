// ==UserScript==
// @name ROMhacking Screenshot Magnifier
// @namespace Edwin Zarco
// @description Expands screenshots to fit the height of your screen when clicked on
// @match https://www.romhacking.net/*
// @grant none
// @version 1
// ==/UserScript==

(function() {
  const links = document.querySelectorAll('.center a');

  // create overlay div and append to body
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  overlay.style.display = 'none';
  document.body.prepend(overlay);

  // create image element and append to body
  const box = document.createElement('img');
  box.classList.add('box');
  box.style.display = 'none';
  document.body.prepend(box);

  // handle click on overlay to hide image and overlay
  overlay.addEventListener('click', function (e) {
    overlay.style.display = 'none';
    box.style.display = 'none';
  }, false);

  // handle click on link to show image and overlay
  links.forEach((link) => {
    link.removeAttribute('href'); // remove link behavior
    link.addEventListener('click', function (e) {
      e.preventDefault();
      overlay.style.cssText = 'background-color: black !important; position: fixed; top: 0; right: 0; bottom: 0; left: 0; opacity: 0.5; display: flex;';
      box.style.cssText = `position: fixed; height: 100%; opacity: 1.0; z-index: 10; top: 50%; left: 50%; transform: translate(-50%,-50%); display: flex;`;
      box.src = link.childNodes[0].getAttribute('src');
    }, false);
  });
})();
