import React from 'react';
import Row from '../components/Row';

function Home() {
  return (
    <div>
        <Row title='HelloWorld' url='/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc' styles=''/>
    </div>
  )
}

export default Home