import { getRequestConfig } from "next-intl/server";

import { getUserLocale } from "./utils/locale";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();
  const messagesRes = await import(`../public/messages/${locale}.json`);

  return {
    locale,
    messages: messagesRes.default
  };
});
