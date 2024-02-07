import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElements'
import { FaReact } from 'react-icons/fa';

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>This website is made with React<FaReact className="faReact" /></HeroH1>
        <HeroP>
          Scroll down and read more!
        </HeroP>
        <HeroBtnWrapper>
          <Button to="responsive"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
