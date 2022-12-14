import styled from 'styled-components'
import colors from '../../../../styles/colors'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem;
`

export const ErrorImage = styled.img`
  margin-bottom: 2rem;
  max-width: 12rem;
`

export const ErrorMessage = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.white500};
`
