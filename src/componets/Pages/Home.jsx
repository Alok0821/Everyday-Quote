import React from 'react'
import Cards from '../cards/Cards'
import Slider from '../slider/Slider';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const Home = () => {
  return (
    <>
      <h3 className='home-headling'  style={{
        color:"black"
      }}>EVERYDAY QUOTE .. <AutoStoriesIcon/></h3>
      <Slider/>
      <Cards />
    </>
  )
}

export default Home
