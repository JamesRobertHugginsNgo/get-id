import { testGroup, test } from 'test-group';

import getId from './get-id.js';

testGroup('Generate ID With No Prefix', () => {
	const id = getId();

	test('New ID should be type string', () => {
		return typeof id === 'string';
	});

	test('New ID should be "0" (type string)', () => {
		return id === '0';
	});
});

testGroup('Generate Another ID With No Prefix', () => {
	const id = getId();

	test('New ID should be "1" (type string)', () => {
		return id === '1';
	});
});

testGroup('Generate ID With "prefix-1-" prefix', () => {
	const id = getId('prefix-1-');

	test('New ID should be "prefix-1-0" (type string)', () => {
		return id === 'prefix-1-0';
	});
});

testGroup('Generate ID With "prefix-2-" prefix', () => {
	const id = getId('prefix-2-');

	test('New ID should be "prefix-2-0" (type string)', () => {
		return id === 'prefix-2-0';
	});
});

testGroup('Generate Another ID With "prefix-1-" prefix', () => {
	const id = getId('prefix-1-');

	test('New ID should be "prefix-1-1" (type string)', () => {
		return id === 'prefix-1-1';
	});
});
