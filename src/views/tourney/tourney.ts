export enum TourneyFormat {
  Seed = "SEED",
  RoundRobin = "ROUND_ROBIN",
  SingleElim = "SINGLE_ELIM",
  DoubleElim = "DOUBLE_ELIM",
}

export interface TourneyCompetitor {
  id: string;
  display_name: string;
}

export type ResultReason = "RETIREMENT" | "DISQUALIFIED" | "SCORE" | "DRAW";

export interface BracketResult {
  score: {
    [competitor_id: string]: string;
  };
  winner: string | null;
  reason: ResultReason;
}

export interface TourneyBracket {
  id: string;
  competitors: TourneyCompetitor[];
  format: BracketFormat;
  result?: BracketResult;
}

export interface Tourney {
  id: string;
  display_name: string;
  format: TourneyFormat;
  backets: TourneyBracket[];
  competitors: TourneyCompetitor[];
}
