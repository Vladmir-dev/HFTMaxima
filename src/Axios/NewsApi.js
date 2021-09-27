import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://forex-news-alerts.p.rapidapi.com/api/v1/ForexNewsUpdates/Req12345678/AUDUSD/20201015',
  headers: {
    'x-rapidapi-host': 'forex-news-alerts.p.rapidapi.com',
    'x-rapidapi-key': '2e73b36f50mshb59795647277647p18c068jsnd351c5df5403'
  }
};

export const fetchNews = () =>{
    axios.request(options).then(({data}) => {
        console.log(data);
    }).catch((error)=> {
        console.error(error);
    });
}