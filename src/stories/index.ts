import { Meta as AsianGames2023 } from "./asian-games-2023/meta";
import { Meta as HeatmapAsianGames2023 } from "./heatmap-asian-games-2023/meta";
import { Meta as Github } from "./github/meta";
import { Meta as IsraeliPalestinianConflict } from "./israeli-palestinian-conflict/meta";
import { Meta as TheHistory  } from "./the-history/meta";

export const StoryMetas = [
  TheHistory,
  Github,
  IsraeliPalestinianConflict,
  AsianGames2023,
  HeatmapAsianGames2023,
];

export { AsianGames2023 } from "./asian-games-2023";
export { HeatmapAsianGames2023 } from "./heatmap-asian-games-2023";
export { Github } from "./github";
export { IsraeliPalestinianConflict } from "./israeli-palestinian-conflict";
export { TheHistory } from "./the-history";
