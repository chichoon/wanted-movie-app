export declare interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export declare interface ISearchResult {
  Response: 'True' | 'False' | null;
  totalResults?: number;
  Error?: string;
}

export declare interface IFavoriteData {
  Movies: IMovie[];
  imdbIDs: string[];
}
