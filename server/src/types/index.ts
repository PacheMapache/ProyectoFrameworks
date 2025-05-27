export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export interface Book {
  _id: string;
  title: string;
  author: string;
  isbn: string;
  category: string;
  stock: number;
  available: number;
}

export interface Loan {
  _id: string;
  user: string | User;
  book: string | Book;
  loanDate: Date;
  dueDate: Date;
  returnDate?: Date;
  status: 'activo' | 'retrasado' | 'devuelto';
}

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  user: User | null;
  error: string | null;
}
