/*!
 * © 2018 Walgreens Boots Alliance, Inc.
 */
import { Book } from '@models/book'
import { lorem, random } from 'faker'

interface Data {
  books: Book[]
}

export default function (authors: number[], length = 10) {
  const data: Data = {
    books: [],
  }
  for (let i = 1; i <= length; i++) {
    data.books.push({
      authorId: random.arrayElement(authors),
      id: i,
      isbn: random.uuid(),
      title: lorem.sentence(),
    })
  }

  return data
}
