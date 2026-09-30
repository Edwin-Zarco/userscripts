// ==UserScript==
// @name         DaddyLiveHD Alphabetical Sorting
// @namespace    https://greasyfork.org/users/1033981
// @version      2.0
// @description  Alphabetically sorts the channels in the channel grid
// @license      AGPL-3.0
// @author       Edwin Zarco
// @match        https://*.dlive.sx/*
// ==/UserScript==

(function() {
	"use strict";

	/*
	 * sortChannels - reorder card elements alphabetically by data-title.
	 * Returns early if no cards found.
	 */
	function sortChannels() {
		const cards = Array.from(document.querySelectorAll('a.card'));

		if (cards.length === 0)
			return;

		const parent = cards[0].parentNode;

		/* Sort by data-title attribute (case-insensitive) */
		cards.sort((a, b) => {
			const aTitle = a.getAttribute('data-title').toLowerCase();
			const bTitle = b.getAttribute('data-title').toLowerCase();

			return aTitle.localeCompare(bTitle);
		});

		/* Reorder elements in DOM */
		cards.forEach(card => {
			parent.appendChild(card);
		});
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', sortChannels);
	} else {
		sortChannels();
	}
})();
