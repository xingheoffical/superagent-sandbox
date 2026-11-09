/**
 * Turn a human title into a URL slug.
 *
 * Rules:
 *  - lowercase everything
 *  - runs of characters that are not a-z or 0-9 become a single dash
 *  - no leading or trailing dash
 */
export function slugify(input) {
  return input.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}
