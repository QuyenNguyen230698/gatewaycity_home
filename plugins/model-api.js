import seoAPI from "./model-api/seo-api";
import brochureAPI from "./model-api/brochure-api";

export default defineNuxtPlugin(() => {
  const { $moment, $filters, $_ } = useNuxtApp();
  const config = useRuntimeConfig().public;
  return {
    provide: {
      modelAPI: {
        seoAPI:seoAPI(config,$moment, $filters, $_),
        brochureAPI:brochureAPI(config,$moment, $filters, $_)
      },
    }
  }
});