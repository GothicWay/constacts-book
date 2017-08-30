export const callApi = () => {
  const headers = {
    "Access-Control-Allow-Credentials" : "true",
    "Access-Control-Allow-Origin" : '*',
    'Content-Type': 'application/json',
   };
   const requestOptions = {
     headers,
     metod: 'GET',
     mode: 'no-cors'
   };
   return fetch('https://idsi-apps.com/ru/test', requestOptions)
    .then((res) => {
      console.log(res);
      return res;
    })
    .then((json) => {
      console.log({ json });
      if (json.error) {
        return Promise.reject(json);
      }
      return json;
    });
}
