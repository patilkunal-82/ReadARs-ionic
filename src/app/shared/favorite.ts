
import { User } from './user';
import { Book } from './book'

export interface Favorite {
    _id: string;
    user: User;
    books: Book[];
    createdAt: string;
    updatedAt: string;
}
