import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerMatch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Match, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly locations?: (LocationMatch | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMatch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Match, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly locations: AsyncCollection<LocationMatch>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Match = LazyLoading extends LazyLoadingDisabled ? EagerMatch : LazyMatch

export declare const Match: (new (init: ModelInit<Match>) => Match) & {
  copyOf(source: Match, mutator: (draft: MutableModel<Match>) => MutableModel<Match> | void): Match;
}

type EagerLocation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Location, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly bio: string;
  readonly image?: string | null;
  readonly location: string;
  readonly Matches?: (LocationMatch | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLocation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Location, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly bio: string;
  readonly image?: string | null;
  readonly location: string;
  readonly Matches: AsyncCollection<LocationMatch>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Location = LazyLoading extends LazyLoadingDisabled ? EagerLocation : LazyLocation

export declare const Location: (new (init: ModelInit<Location>) => Location) & {
  copyOf(source: Location, mutator: (draft: MutableModel<Location>) => MutableModel<Location> | void): Location;
}

type EagerLocationMatch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LocationMatch, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly matchId?: string | null;
  readonly locationId?: string | null;
  readonly match: Match;
  readonly location: Location;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLocationMatch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LocationMatch, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly matchId?: string | null;
  readonly locationId?: string | null;
  readonly match: AsyncItem<Match>;
  readonly location: AsyncItem<Location>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LocationMatch = LazyLoading extends LazyLoadingDisabled ? EagerLocationMatch : LazyLocationMatch

export declare const LocationMatch: (new (init: ModelInit<LocationMatch>) => LocationMatch) & {
  copyOf(source: LocationMatch, mutator: (draft: MutableModel<LocationMatch>) => MutableModel<LocationMatch> | void): LocationMatch;
}