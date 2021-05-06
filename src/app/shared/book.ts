/*export interface Book {
    id: string;
    video_url: string;
    name: string;
    description: string;
    duration: string;
    created_by: string;
    image: string;
    thumbnail: string;
    cropped: string;
    file_name_original: string;
    popularity: string;
    category_id: string;
    category: string;
    keywords: string;
  }*/

  import { User } from './user';
  import { Comment } from './comment';

  export interface Book {
      _id: string;
      bookname: string;
      booklanguage: string;
      bookdescription: string;
      bookowner: User;
      bookauthor: string;
      bookowneraddress: string;
      bookownertelnum: string;
      bookrating: string;
      bookavailable: boolean;
      bookreserved: boolean;
      bookborrowed: boolean;
      comments: Comment[];
  }

  export const BookLanguage = ['English', 'Hindi', 'Marathi', 'German', 'Tamil',
                               'Spanish', 'French', 'Telugu', 'Latin', 'Malyalam'];
