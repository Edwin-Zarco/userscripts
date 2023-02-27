// ==UserScript==
// @name        DaddyLiveHD Alphabetical Sorting
// @match       https://*.daddylivehd.sx/*
// @version     1.0
// @author      Edwin Zarco
// @description Alphabetically sorts the channels in the channel grid
// @license     AGPL-3.0
// @namespace https://greasyfork.org/users/1033981
// ==/UserScript==

(function() {
    'use strict';

    const gridContainer = document.querySelector('.grid-container');
    const gridItems = [...gridContainer.querySelectorAll('.grid-item')];
    gridItems.sort((a, b) => a.textContent.localeCompare(b.textContent));
    gridItems.forEach(item => gridContainer.appendChild(item));
})();
