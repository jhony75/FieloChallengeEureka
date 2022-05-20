import axios from 'axios';

const baseURL =
  'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR';
let url = '';

const getBg = () =>
  axios({
    method: 'get',
    url: `${baseURL}`,
  }).then((resp) => {
    url = resp.data.url;
    console.log(url);
  });

function Getbg() {
  return (
    <button
      type="button"
      onClick={() => getBg()}
      aria-label="label"
      label="button"
    >
      Get bg
    </button>
  );
}

export { Getbg };
