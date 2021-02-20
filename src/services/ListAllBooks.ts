import BooksRepository from '../repositories/BooksRepository'


export default class ListAllBooksService {

  public async execute(searchQuery: string) {
    const booksRepository = new BooksRepository();


    if (searchQuery && searchQuery !== "undefined") {

      const books = await booksRepository.findAllBooksBySearch(searchQuery)

      return books;
      
    } else {

      const books = await booksRepository.findAllBooks();

      return books;

    }
    
    

  }
}