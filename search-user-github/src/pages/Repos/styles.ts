import styled from 'styled-components'
import colors from '../../styles/colors'

export const Section = styled.div`
  /* height: 550px; */
  width: 650px;
  background: ${colors.grey700};
  border-radius: 0.5rem;
  border-bottom: 0.5rem solid ${colors.blue500};

  @media (max-width: 430px) {
    width: 300px;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
`

export const ContainerBackButton = styled.button`
  align-items: center;
  background-color: transparent;
  display: flex;
  height: 2rem;
  width: 2rem;
  margin-left: 1rem;
  margin-top: 0.5rem;
  & svg {
    color: ${colors.white500};
  }
`

export const Title = styled.h1`
  margin-top: 1rem;
  margin-left: 14rem;
  font-size: 20px;
  color: ${colors.white500};
`
