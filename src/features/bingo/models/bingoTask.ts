import rawTranslations from "../../../i18n/en/us.json";

type bingoCategories = keyof typeof rawTranslations.translation.features.bingo.tasks;

export interface BingoTask {
  category: bingoCategories;
  index: number;
}

export function getTasks(categories?: bingoCategories[]): BingoTask[] {
  const tasks: BingoTask[] = [];
  const rawTasks = rawTranslations.translation.features.bingo.tasks;
  const rawCategories = Object.keys(rawTasks);

  if (categories && categories.length > 0) {
    for (const category of categories) {
      for (const task of rawTasks[category]) {
        tasks.push({
          category,
          index: rawTasks[category].indexOf(task)
        });
      }
    }

    return tasks;
  }

  for (const category of rawCategories) {
    for (const task of rawTasks[category as bingoCategories]) {
      tasks.push({
        category: category as bingoCategories,
        index: rawTasks[category as bingoCategories].indexOf(task)
      });
    }
  }

  return tasks;
}
