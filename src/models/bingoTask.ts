export enum BingoCategory {
  annoyingLobbies,
  mistakes,
  obviousPlays,
  wins
}

export interface BingoTask {
  category: BingoCategory;
  isComplete: boolean;
  slot: number;
}
