import {Router} from 'express';

import AddBookService from '../services/AddBookService'
import ListAllBooks from '../services/ListAllBooks'
import DeleteBookService from '../services/DeleteBookService'

const routes = Router();


routes.post('/books', async (request, response) => {
  try {
    const {title, author, description, pages, tags} = request.body;

    const addBookService = new AddBookService;

    const book = await addBookService.execute({
      title,
      author,
      description,
      pages,
      tags
    })

    return response.status(201).json(book)

  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
})

routes.get('/books', async (request, response) => {
  try {

    const { tags } = request.query


    const listAllBooksService = new ListAllBooks()

    const booksList = await listAllBooksService.execute(String(tags));

    return response.json(booksList);

  } catch(err) {
    return response.status(400).json({ error: err.message });
  }
})

routes.delete('/books/:id', async (request,response) => {
  try {

    const { id } = request.params;

    const deleteBookService = new DeleteBookService();

    await deleteBookService.execute(id);

    return response.status(204).json();

  } catch(err) {
    return response.status(400).json({ error: err.message });
  }
})

export default routes;