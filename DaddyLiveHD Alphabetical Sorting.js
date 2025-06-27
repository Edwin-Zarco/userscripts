// ==UserScript==
// @name         DaddyLiveHD Alphabetical Sorting
// @namespace    https://greasyfork.org/users/1033981
// @version      1.3
// @description  Alphabetically sorts the channels in the channel grid
// @license      AGPL-3.0
// @author       Edwin Zarco
// @match        https://*.thedaddy.click/*
// ==/UserScript==

(function () {
    'use strict';

    function sort_channels_alphabetically()
    {
        const grid_container = document.querySelector('.grid-container');

        if (!grid_container)
            return;

        const grid_items = Array.from(
            grid_container.querySelectorAll('.grid-item')
        );

        grid_items.sort(function (a, b) {
            return a.textContent.localeCompare(b.textContent);
        });

        for (let i = 0; i < grid_items.length; i++)
            grid_container.appendChild(grid_items[i]);
    }

    sort_channels_alphabetically();
})();
