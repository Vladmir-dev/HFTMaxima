import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { requests } from "../../Axios/api";
import { api } from "../../Axios/NewsApi";
import Image from "./Image";

export default function Images() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    async function fetchNews() {
      const { data } = await api.get(requests.everything);
      setNews(
        data.articles[Math.floor(Math.random() * data.articles.length - 1)]
      );
      return data;
    }
    fetchNews();
  }, []);

  return (
    <Grid container alignItems="center">
       {news.map(n => (
           <Grid key={n.id}>
                <Image src={n.urlToImage} alt={n.title}/>
           </Grid>
       ))}
    </Grid>
  );
}
