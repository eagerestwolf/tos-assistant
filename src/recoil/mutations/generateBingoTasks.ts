import { bingoTasks } from "../../data/bingoTasks";
import type { BingoTask } from "../../models/bingoTask";

export function generateBingoTasks(): BingoTask[] {
  const tasks: BingoTask[] = [];
  const localTasks = [...bingoTasks];

  for (let i = 0; i < 25; i++) {
    const rand = Math.floor(Math.random() * localTasks.length);

    tasks.push(localTasks[rand]);

    const taskTemplate = tasks[i];
    const task: BingoTask = {
      ...taskTemplate,
      isComplete: i === 12
    };

    tasks[i] = task;

    localTasks.splice(rand, 1);
  }

  return tasks;
}
