import BooksRepository from '../repositories/BooksRepository'



export default class DeleteBookService {

  public async execute(id: string) {


    const booksRepository = new BooksRepository();

    await booksRepository.deleteBook(id);
    
    return
    

  }
}