import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const TvSchema = new Schema({
  adult: { type: Boolean },
  backdrop_path: { type: String },
  first_air_date: { type: String },
  genre_ids: [{ type: Number }],
  homepage: { type: String },
  id: { type: Number, required: true, unique: true },
  in_production: { type: Boolean },
  languages: [{ type: String }],
  last_air_date: { type: String },

  name: { type: String },

  number_of_episodes: [{ type: Number }],
  number_of_seasons: [{ type: Number }],
  origin_country: { type: String },
  original_language: { type: String },
  original_name: { type: String },
  overview: { type: String },
  popularity: { type: Number },
  poster_path: { type: String },

  status: { type: String },
  tagline: { type: String },
  type: { type: String },
  vote_average: { type: Number },
  vote_count: { type: Number },
});

TvSchema.statics.findByTvDBId = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model('Tvs', TvSchema);
