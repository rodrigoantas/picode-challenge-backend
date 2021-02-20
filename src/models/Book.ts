import { ObjectID, Entity, ObjectIdColumn, Column } from 'typeorm';


@Entity('books')
class Book {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  description: string;

  @Column()
  pages: number;

  @Column()
  tags: Array<string>;


}

export default Book;