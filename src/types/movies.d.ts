export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface ISearchResult {
  Search: Array<IMovie>;
  totalResults: number;
  Response: boolean;
}

export interface IFavoriteData {
  Movies: Array<IMovie>;
  imdbIDs: Array<string>;
}
