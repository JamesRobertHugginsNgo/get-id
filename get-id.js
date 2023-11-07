const counters = {};

/**
 * Returns a unique ID for a given prefix.
 * @param {string} [prefix='']
 * @returns {string}
 */
export default function getId(prefix = '') {
	if (!counters[prefix]) {
		counters[prefix] = 0;
	}

	return `${prefix}${counters[prefix]++}`;
}
