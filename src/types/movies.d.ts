export declare interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export declare interface ISearchResult {
  Response: 'True' | 'False';
  Search?: Array<IMovie>;
  totalResults?: number;
  Error?: string;
}

export declare interface IFavoriteData {
  Movies: Array<IMovie>;
  imdbIDs: Array<string>;
}
