import BooksRepository from '../repositories/BooksRepository'

interface IBook {
  title: string
  author: string;
  description: string;
  pages: number;
  tags: Array<string>
}

export default class AddBookService {

  public async execute({title, author, description, pages, tags}: IBook) {
    const booksRepository = new BooksRepository();
    
    const book = await booksRepository.createBook({
      title,
      author,
      description,
      pages,
      tags
    });

    return book;

  }
}