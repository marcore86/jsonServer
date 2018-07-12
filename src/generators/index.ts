/*!
* © 2018 Walgreens Boots Alliance, Inc.
*/
import author from './author'
import book from './book'
import productParameters from './product-parameters'
import settings from './settings.json'

export function generate() {
  // tslint:disable-next-line:no-magic-numbers
  const { authors } = author()

  return {
    authors,
    ...book(authors.map(({ id }) => id)),
    ...productParameters(),
    settings,
  }
}
