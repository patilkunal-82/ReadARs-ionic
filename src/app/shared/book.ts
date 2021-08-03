
  import { User } from './user';
  import { Comment } from './comment';


  export interface Book {
      _id: string;
      bookname: string;
      bookgenre: string;
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
      bookarenabled: boolean;
      comments: Comment[];
      bookcoverimage: any;
      bookcurrentuser: string;
      bookrecommend: boolean;
      bookcurrentstatus: string;
  }

  export const BookActions = ['Lend Or Make Available', 'Remove'];

  export const BookLanguage = ['Bengali', 'Chinese','Dutch', 'English', 'French','German', 'Greek', 'Gujrati', 'Hindi', 'Italian', 
                               'Japanese', 'Kannada', 'Korean', 'Latin', 'Malyalam','Marathi', 'Odia', 'Persian', 'Russian', 'Spanish',
                               'Tamil', 'Telugu', 'Thai', 'Tulu', 'Vietnamese', 'Other'];

  export const BookGenre = [ 'Action & Adventure', 'Autobiography','Biography',  'Classics', 'Cookbook','Comic', 'Crime', 'Computers',
                             'Essays','Fantasy','Food', 'Health', 'Historical Fiction', 'History', 'Horror', 
                              'Literary Fiction', 'Management','Medical Science','Memoir', 'Mystery', 'Poetry', 'Romance', 'Sci-Fi', 'Self-Help',
                              'Short Stories', 'Technology','Thriller', 'Travel', 'Women\'s Fiction', 'Other'];  

  export const BookCurrentStatus = ['Available', 'Reserved', 'Borrowed'];
                              
  export const CollectionCategory = ['Genre', 'Language'];

  
                              
                                                      
