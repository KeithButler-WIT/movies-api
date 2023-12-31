import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const PersonSchema = new Schema({
  adult: { type: Boolean },
  gender: { type: Number },
  id: { type: Number, required: true, unique: true },
  poster_path: { type: String },
  overview: { type: String },
  release_date: { type: String },
  original_title: { type: String },
  original_language: { type: String },
  title: { type: String },
  known_for: [{
    adult: { type: Boolean },
    backdrop_path: { type: String },
    genre_ids: [{ type: Number }],
    id: { type: Number, required: true, unique: true },
    media_type: { type: String },
    original_language: { type: String },
    original_title: { type: String },
    overview: { type: String },
    poster_path: { type: String },
    release_date: { type: String },
    title: { type: String },
    video: { type: Boolean },
    vote_average: { type: Number },
    vote_count: { type: Number },
  }],
  known_for_department: { type: String },
  name: { type: String },
  popularity: { type: Number },
  profile_path: { type: String },
});

PersonSchema.statics.findByPersonDBId = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model('Persons', PersonSchema);
