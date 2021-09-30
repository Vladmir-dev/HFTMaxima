import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";
import NewsCards from "./NewsCards";
import RowCard from "./Row";

export default function NewsPage() {
  const [newsArticles, setNewsArticles] = useState([]);
 
  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_ALAN_KEY,
      onCommand: ({ command, articles, number }) => {
        if (command === "newsHeadlines") {
          setNewsArticles(articles);
        } else if (command === "open") {
          const parsedNumber =
            number.legnth >= 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];
          if (parsedNumber > 20) {
            alanBtn().playText("Please try that again");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening ...");
          }
        }
      },
    });
  }, []);
  return (
    <div>
      <NewsCards articles={newsArticles} />
      <RowCard articles={newsArticles}/>
    </div>
  );
}
