import { Document, Schema, model, models, Model } from "mongoose";

export interface IBookDocument extends Document {
  title: string; //The title of book
  year: number; // The publication year of book
  description?: string; // The description of book
}
/* BookSchema will correspond to a collection in your MongoDB database. */
const BookSchema = new Schema<IBookDocument>({
  title: {
    type: String,
    required: [true, "Please provide a title for this book."],
    maxlength: [100, "Title cannot be more than 100 characters"],
  },
  year: {
    type: Number,
    required: [true, "Please provide a publication year of this book"],
    min: [1, "Publication Year can not be before 1"],
    max: [9999, "Publication Year can not be after 9999"],
  },
  description: {
    type: String,
  },
});

const Book: Model<IBookDocument> =
  models.Book || model<IBookDocument>("Book", BookSchema);

export default Book;
