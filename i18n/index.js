var en = require("./translations.en.json");
var kr = require("./translations.kr.json");

const i18n = {
  translations: {
    en: en.i18n,
    kr: kr.i18n,
  },
  defaultLang: "kr",
  useBrowserDefault: true,
};

module.exports = i18n;
