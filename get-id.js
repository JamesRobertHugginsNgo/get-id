const counters = {};

export default function getId(prefix = '') {
	if (!counters[prefix]) {
		counters[prefix] = 0;
	}
	return `${prefix}${counters[prefix]++}`;
}
