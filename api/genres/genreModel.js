import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
id: { type: Number,  unique: true, required: true},
name: {type: String, required: true }
});

GenreSchema.statics.findByGenreDBId = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model('Genre', GenreSchema);
