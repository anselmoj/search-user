import styled from 'styled-components'
import colors from '../../../styles/colors'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
`

export const EmptyThumbnail = styled.div`
  margin-bottom: 1rem;
  max-height: 11rem;
  max-width: 7rem;
  position: relative;
  width: 100%;
`

export const EmptyImage = styled.img`
  height: 100%;
  width: 100%;
`

export const EmptyMessage = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${colors.white500};
`
