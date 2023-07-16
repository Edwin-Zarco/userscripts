// ==UserScript==
// @name         DaddyLiveHD Alphabetical Sorting
// @namespace    https://greasyfork.org/users/1033981
// @version      1.1
// @description  Alphabetically sorts the channels in the channel grid
// @license      AGPL-3.0
// @author       Edwin Zarco
// @match        https://*.daddylivehd.sx/*
// ==/UserScript==

(function() {
  'use strict';

  const sortChannelsAlphabetically = () => {
    const gridContainer = document.querySelector('.grid-container');
    if (!gridContainer) {
      return;
    }

    const gridItems = Array.from(gridContainer.querySelectorAll('.grid-item'));
    gridItems.sort((a, b) => a.textContent.localeCompare(b.textContent));

    for (const item of gridItems) {
      gridContainer.appendChild(item);
    }
  };

  sortChannelsAlphabetically();
})();
