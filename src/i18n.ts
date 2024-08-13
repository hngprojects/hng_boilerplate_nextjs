import { getRequestConfig } from "next-intl/server";

import { getUserLocale } from "./utils/locale";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();
  const { default: messages } = await import(`../messages/${locale}.json`);

  return {
    locale,
    messages,
  };
});
