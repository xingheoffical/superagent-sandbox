/**
 * Turn a human title into a URL slug.
 *
 * Rules:
 *  - lowercase everything
 *  - runs of characters that are not a-z or 0-9 become a single dash
 *  - no leading or trailing dash
 */
export function slugify(input) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Keep a slug within maxLength, cutting at a word boundary.
 *
 * Rules:
 *  - maxLength < 1 returns an empty string
 *  - a slug that already fits is returned unchanged
 *  - otherwise cut at the last dash that keeps the result within maxLength,
 *    so no partial word or trailing dash is left behind
 *  - when no complete word fits, return an empty string
 */
export function truncateSlug(slug, maxLength) {
  if (maxLength < 1) return ''
  if (slug.length <= maxLength) return slug

  const boundary = slug.lastIndexOf('-', maxLength)
  if (boundary < 1) return ''

  return slug.slice(0, boundary).replace(/-+$/, '')
}
