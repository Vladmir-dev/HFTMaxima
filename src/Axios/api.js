const API_KEY = "783bf763c4c1453d8ca40d1e80a67150";
export const requests = {
  everything: `/everything?q=bitcoin&apiKey=${API_KEY}`,
  topHeadlinesUSA: `/top-headlines?country=us&apiKey=${API_KEY}`,
  topHeadlinesBBC: `/top-headlines?sources=bbc-news&apiKey=${API_KEY}`,
  topHeadlinesGermany: `/top-headlines?country=de&category=business&apiKey=${API_KEY}`,
  sources: `/top-headlines/sources?apiKey=${API_KEY}`,
  businessSource: `/top-headlines/sources?category=businessapiKey=${API_KEY}`,
  usaSource: `/top-headlines/sources?country=usapiKey=${API_KEY}`,
};
