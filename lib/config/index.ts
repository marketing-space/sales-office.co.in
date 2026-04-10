// import { lodhaAmaraSiteConfig } from "../config/regency-anatham";

import { majesticEvolvusSiteConfig } from "./majestic-evolvus";
import { routes } from "./routes";

// import { siteConfig } from "./site";

const configs = {
  [routes.default]: majesticEvolvusSiteConfig,
  [routes.MajesticEvolvus]: majesticEvolvusSiteConfig,
};

export function getSiteConfig(site?: string) {
  return site
    ? configs[site as keyof typeof configs] || configs[routes.default]
    : configs[routes.default];
}
