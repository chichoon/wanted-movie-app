export interface IMovie {
  Title: String;
  Year: String;
  imdbID: String;
  Type: String;
  Poster: String;
}

export interface ISearchResult {
  search: Array<IMovie>;
  totalResults: number;
  response: boolean;
}
