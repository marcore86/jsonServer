/*!
 * © 2018 Walgreens Boots Alliance, Inc.
 */
import { Author } from '@models/author'
import { image, name } from 'faker'

interface Data {
  authors: Author[]
}

export default function (length = 10) {
  const data: Data = {
    authors: [],
  }
  for (let i = 1; i <= length; i++) {
    data.authors.push({
      avatar: image.avatar(),
      firstName: name.firstName(),
      id: i,
      lastName: name.lastName(),
    })
  }

  return data
}
