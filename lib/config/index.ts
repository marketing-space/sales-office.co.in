// import { lodhaAmaraSiteConfig } from "../config/regency-anatham";
import { routes } from "./routes";

import { rahejaLunarisSiteConfig } from "./raheja-lunaris";
import { rahejaJadeCitySiteConfig } from "./raheja-jade-city";
import { todayCloudCitySiteConfig } from "./today-cloud-city";
import { todayPanvelSiteConfig } from "./today-panvel";
import { ashfordRegalSiteConfig } from "./ashford-regal";
import { wadhwaWiseCitySiteConfig } from "./wadhwa-wise-city";
import { neelkanthVerratonSiteConfig } from "./neelkanth-verraton";
// import { siteConfig } from "./site";

const configs = {
  // [routes.default]: lodhaAmaraSiteConfig,
  [routes.RahejaLunaris]: rahejaLunarisSiteConfig,
  [routes.RahejaJadeCity]: rahejaJadeCitySiteConfig,
  [routes.TodayCloudCity]: todayCloudCitySiteConfig,
  [routes.TodayPanvel]: todayPanvelSiteConfig,
  [routes.AshfordRegal]: ashfordRegalSiteConfig,
  [routes.WadhwaWiseCity]: wadhwaWiseCitySiteConfig,
  [routes.NeelkanthVerraton]: neelkanthVerratonSiteConfig,
};

export function getSiteConfig(site?: string) {
  return site
    ? configs[site as keyof typeof configs] || configs[routes.default]
    : configs[routes.default];
}
