import axios from 'axios'

const randomJokes =
    axios
      .get('http://api.icndb.com/jokes/random')
      .then(res => res.data.value.joke)
      .catch((err) => console.log(err))



export default randomJokes;
