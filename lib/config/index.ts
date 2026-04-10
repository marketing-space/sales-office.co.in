// import { lodhaAmaraSiteConfig } from "../config/regency-anatham";

import { geraImperiumAtmosSiteConfig } from "./gera-imperium-atmos";
import { geraKharadiSiteConfig } from "./gera-kharadi";
import { majesticEvolvusSiteConfig } from "./majestic-evolvus";
import { routes } from "./routes";
import { tayalEnvoug1SiteConfig } from "./tayal-envogue1";

// import { siteConfig } from "./site";

const configs = {
  [routes.default]: majesticEvolvusSiteConfig,
  [routes.MajesticEvolvus]: majesticEvolvusSiteConfig,
  [routes.GeraImperiumAtmos]: geraImperiumAtmosSiteConfig,
  [routes.GeraKharadi]: geraKharadiSiteConfig,
  [routes.TayalEnvogue1]: tayalEnvoug1SiteConfig,
};

export function getSiteConfig(site?: string) {
  return site
    ? configs[site as keyof typeof configs] || configs[routes.default]
    : configs[routes.default];
}
