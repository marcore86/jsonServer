/*!
 * © 2018 Walgreens Boots Alliance, Inc.
 */
import { seed } from 'faker'
import fs from 'fs'
import path from 'path'

import { generate } from './generators'

if (typeof process.env.FAKER_SEED !== 'undefined') {
  seed(parseInt(process.env.FAKER_SEED, 10))
}

const JSON_SPACES = 2
fs.writeFile(path.join('server', 'db.json'), JSON.stringify(generate(), undefined, JSON_SPACES), err => {
  if (err) throw err
  // tslint:disable-next-line:no-console
  console.error('The file has been saved!')
})

// tslint:disable-next-line:no-console
// console.log(generate())
