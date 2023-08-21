import {React, useState, useEffect} from 'react'
import axios from 'axios'


const MainSection = ({UpcomingMoviesAPI}) => {
  const [upcomingFlix, setUpcomingflix] = useState([]);
  // const [mappedFlix, setMappedFlix] = useState ([{}]);

  useEffect(() => {
    axios.request(UpcomingMoviesAPI)
    .then(res => {
      setUpcomingflix(res.data.results);
      console.log(upcomingFlix);
    },[])
  });

  return (
    <div>
        {upcomingFlix.map((flix, idx) => (
          <div key={idx}>
            <div>
              <h4>
                Movie Title
              </h4>
              <p>
                {flix.titleText.text}
              </p>
              <img src={flix.primaryImage.url} alt='' />
            </div>
            <div>
              <h4>
                Release Date Year
              </h4>
              <p>
                {flix.releaseDate.year}
              </p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default MainSection
