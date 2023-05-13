import type { BingoTask } from "../../models/bingoTask";

import { annoyingLobbies } from "./annoyingLobbies";
import { mistakes } from "./mistakes";
import { obviousPlays } from "./obviousPlays";
import { wins } from "./wins";

export const bingoTasks: BingoTask[] = [...annoyingLobbies, ...mistakes, ...obviousPlays, ...wins];
