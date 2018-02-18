import React from 'react'
import styled from 'styled-components'

import { colors } from 'styles'

import { Div, Section, Container, Row, Col, Heading } from 'components'

import map from 'assets/map.svg'
import photo from 'assets/photo_1.png'
import yellowBox from 'assets/yellow-box.svg'
import russiaIcon from 'assets/icons/russia.svg'
import suitcaseIcon from 'assets/icons/suitcase-blue.svg'
import linkedinLogo from 'assets/logos/linkedin.svg'

export const MapSection = () => (
  <StyledSection>
    <Container relative block>
      <Row>
        <Col small={8} offsetSmall={2}>
          <Heading light center>
            We’re growing to provide better access to credit globally
          </Heading>
        </Col>
      </Row>

      <Row mTop={36}>
        <Col small={4} offsetSmall={4}>
          <MapButton>See our growth</MapButton>
          <MapButton active>Markets map</MapButton>
        </Col>
      </Row>

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
  </StyledSection>
)

const StyledSection = Section.extend`
  height: 900px;
  background: ${colors.blue} url(${map}) no-repeat center bottom;
  background-size: 1326px 672px;
  padding: 80px 0 48px;
`

const MapInfoBox = Div.extend`
  position: absolute;
  top: 260px;
  right: 0;
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

const MapButton = styled.button`
  flex: 1;
  color: white;
  padding: 13px 10px 15px;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 4px 0 0 4px;
  background-color: #036ADD;

  ${props => !props.active && 'color: rgba(255, 255, 255, 0.6);'}
`
