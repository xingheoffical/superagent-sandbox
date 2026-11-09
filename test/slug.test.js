import test from 'node:test'
import assert from 'node:assert/strict'
import { slugify } from '../src/slug.js'

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
