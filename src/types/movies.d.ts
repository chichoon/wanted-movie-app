export declare interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export declare interface ISearchResult {
  Search: Array<IMovie>;
  totalResults: number;
  Response: boolean;
}

export declare interface IFavoriteData {
  Movies: Array<IMovie>;
  imdbIDs: Array<string>;
}
