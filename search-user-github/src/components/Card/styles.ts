import styled from 'styled-components'
import colors from '../../styles/colors'

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.grey900};
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${colors.white500};
  padding: 0.5rem;
  align-items: center;
  margin: 2rem 1rem;
`

export const Details = styled.div`
  display: flex;
`

export const Image = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 1rem;
`
export const Text = styled.p`
  margin-top: 0.5rem;
`
