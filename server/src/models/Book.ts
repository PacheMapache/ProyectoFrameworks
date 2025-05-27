import mongoose from 'mongoose';

interface IBook extends mongoose.Document {
  title: string;
  author: string;
  isbn: string;
  category: string;
  stock: number;
  available: number;
}

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true,
    default: 1
  },
  available: {
    type: Number,
    required: true,
    default: 1
  }
}, {
  timestamps: true
});

export default mongoose.model<IBook>('Book', BookSchema);
