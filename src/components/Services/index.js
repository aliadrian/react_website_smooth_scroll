import React from 'react'
import Icon1 from '../../images/svg-12.svg'
import Icon2 from '../../images/svg-16.svg'
import Icon3 from '../../images/svg-11.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP, ServicesBtnWrapper } from './ServicesElements';
import { Button } from '../ButtonElements';

const Services = () => {
  return (
    <ServicesContainer id="work">
      <ServicesH1>Most Recent Work</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Countries API</ServicesH2>
          <ServicesP>Web app featuring search, filters, and detailed views, with a bonus dark/light mode toggle.</ServicesP>
          <ServicesBtnWrapper>
            <Button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://countries-api-by-adrian.vercel.app/', '_blank');
              }}>Visit</Button>
          </ServicesBtnWrapper>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Web Shop</ServicesH2>
          <ServicesP>A fully functional eCommerce application using commerce.js.</ServicesP>
          <ServicesBtnWrapper>
            <Button type="button"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://commercejsmystore.web.app/', '_blank');
              }}>Visit</Button>
          </ServicesBtnWrapper>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Online Store</ServicesH2>
          <ServicesP>Website adaptable to all devices with an online store and UI components.</ServicesP>
          <ServicesBtnWrapper>
            <Button type="button"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://www.heavymetale.eu/', '_blank');
              }}>Visit</Button>
          </ServicesBtnWrapper>
        </ServicesCard>
      </ServicesWrapper>

    </ServicesContainer>
  )
}

export default Services
