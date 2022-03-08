import axios from 'axios';
// import { useDateStore } from '../zustand/store';
const desiredDate = '2022-04-20';

export const CallTicketAPI = (url) => {
  // const { desiredDate } = useDateStore();

  return new Promise((resolve, reject) => {
    let available = null;
    axios
      .get(url)
      .then((res) => {
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].date == desiredDate) {
            console.log(res.data[i]);
            available = res.data[i].parks.length > 0 ? true : false;
          }
        }
        resolve(available);
      })
      .catch((error) => {
        console.error(error);
        resolve(available);
      });
  });
};
