import History from "../../../models/History";
import { fetcher, connectToDb } from "../../../utils/api";

const getMovieUrl = id => `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`;

export default async function handler(req, res) {
  connectToDb();
  const { method } = req;
  const { id } = req.query;
  let movie, history;
  switch (method) {
    case "GET":
      history = await History.findOne({ id });
      if (history) res.status(200).json({ found: true });
      else res.status(404).json({ found: false });
      break;
    case "PUT":
      movie = await fetcher(getMovieUrl(id));
      history = new History({ id, title: movie.title });
      await history.save();
      res.status(200).json(movie);
      break;
    case "DELETE":
      await History.deleteOne({ id });
      res.status(200).end("Movie was successfully deleted!");
      break;
    default:
      throw new Error("Invalid request: " + method);
  }
  res.status(400).end("Something went wrong!");
}
