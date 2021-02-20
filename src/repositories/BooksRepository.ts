import { getMongoRepository, MongoRepository, ObjectID } from 'typeorm';

import Book from '../models/Book';

interface IBook {
  title: string
  author: string;
  description: string;
  pages: number;
  tags: Array<string>
}

class BookRepository {
  private ormRepository: MongoRepository<Book>;

  constructor() {
    this.ormRepository = getMongoRepository(Book);
  }


  public async createBook({title, author, description, pages, tags}: IBook) {
    const book = this.ormRepository.create({
      title,
      author,
      description,
      pages,
      tags
    })

    await this.ormRepository.save(book)

    return book;
  }

  public async findAllBooksBySearch(searchQuery: string) {
    const books = await this.ormRepository.find({ where: {
      tags: {$in: [searchQuery]}
    }});

    return books
  }

  public async findAllBooks() {
    const books = await this.ormRepository.find();

    return books
  }

  public async deleteBook(id: any) {

    const findBook = await this.ormRepository.findOne(id);

    if (findBook) {
      await this.ormRepository.delete(findBook)
    }
  
    return
  }

}

export default BookRepository;