import { writable } from 'svelte/store';

export const things = writable([
  'value 1',
  'value 2'
]);
