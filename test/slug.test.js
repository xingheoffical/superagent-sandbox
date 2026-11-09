import test from 'node:test'
import assert from 'node:assert/strict'
import { slugify, truncateSlug } from '../src/slug.js'

test('lowercases and joins words with a dash', () => {
  assert.equal(slugify('Hello, World!'), 'hello-world')
})

test('trims leading and trailing separators', () => {
  assert.equal(slugify('  Hello, World!  '), 'hello-world')
})

test('keeps digits', () => {
  assert.equal(slugify('Node 24 Rocks'), 'node-24-rocks')
})

test('handles an already clean slug', () => {
  assert.equal(slugify('already-clean'), 'already-clean')
})

test('truncates at the last complete word within maxLength', () => {
  assert.equal(truncateSlug('hello-world-foo', 12), 'hello-world')
})

test('returns a slug that already fits unchanged', () => {
  assert.equal(truncateSlug('hello-world', 20), 'hello-world')
})

test('returns an empty string when maxLength is below 1', () => {
  assert.equal(truncateSlug('hello-world', 0), '')
})

test('returns an empty string when no complete word fits', () => {
  assert.equal(truncateSlug('hello-world', 4), '')
})
