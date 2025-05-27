import mongoose from 'mongoose';

interface ILoan extends mongoose.Document {
  user: mongoose.Schema.Types.ObjectId;
  book: mongoose.Schema.Types.ObjectId;
  loanDate: Date;
  dueDate: Date;
  returnDate?: Date;
  status: string;
}

const LoanSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  loanDate: {
    type: Date,
    default: Date.now
  },
  dueDate: {
    type: Date,
    required: true
  },
  returnDate: {
    type: Date
  },
  status: {
    type: String,
    enum: ['activo', 'retrasado', 'devuelto'],
    default: 'activo'
  }
}, {
  timestamps: true
});

export default mongoose.model<ILoan>('Loan', LoanSchema);
