import React from 'react'
import styled from 'styled-components'

import { colors } from 'styles'

import { Div, Section, Container } from 'components'

import map from 'assets/map.svg'
import photo from 'assets/photo_1.png'
import yellowBox from 'assets/yellow-box.svg'
import russiaIcon from 'assets/icons/russia.svg'
import suitcaseIcon from 'assets/icons/suitcase-blue.svg'
import linkedinLogo from 'assets/logos/linkedin.svg'

export const MapSection = () => (
  <Section background={colors.blue} backgroundImage={map} contain height={900}>
    <Container>
      <MapInfoBox column>
        <Div listLeft={15} itemsCenter>
          <img src={russiaIcon} alt="" />
          <Title>Russia</Title>
        </Div>

        <Div mTop={18} column>
          <div>
            <strong>Loans granted:</strong> 712,380
          </div>
          <div>
            <strong>Total amount:</strong> 77,631,663 €
          </div>
          <div>
            <strong>Office:</strong> Moscow
          </div>
          <div>
            <strong>Products:</strong> Microloans
          </div>
        </Div>

        <Div mTop={26} listLeft={16}>
          <Photo justifyCenter itemsCenter>
            <img src={photo} alt="" />
          </Photo>
          <Div column itemsStart>
            <strong>Dmitry Selivanov</strong>
            <span>Country manager</span>
            <img src={linkedinLogo} alt="" style={{ marginTop: 6 }} />
          </Div>
        </Div>

        <Div
          mTop={24}
          listLeft={12}
          itemsCenter
          style={{ color: colors.blue, fontWeight: 600 }}
        >
          <span>Check Russia openings</span>
          <img src={suitcaseIcon} alt="" />
        </Div>
      </MapInfoBox>
    </Container>
  </Section>
)

const MapInfoBox = Div.extend`
  height: 362px;
  width: 280px;
  padding: 18px 36px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1), 0 5px 10px 0 rgba(0, 0, 0, 0.2);
`

const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
`

const Photo = Div.extend`
  background: url(${yellowBox}) no-repeat center;
  background-size: contain;
`
