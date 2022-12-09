import { animated } from 'react-spring'
import styled, { css } from 'styled-components'
import colors from '../../../../styles/colors'

const toastTypeVariations = {
  info: css`
    background: ${colors.white500};
    color: ${colors.white500};
  `,
  success: css`
    background: ${colors.white500};
    color: ${colors.white500};
  `,
  error: css`
    background: ${(props) => props.theme.colors.red};
    color: ${colors.white500};
  `,
}

interface IContainerProps {
  type?: 'success' | 'error' | 'info'
}
export const Container = styled(animated.div)<IContainerProps>`
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 6px ${colors.grey700};
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  margin-right: 2rem;
  margin-top: 0.5rem;
  max-width: 25rem;
  padding: 1rem;
  position: relative;
  width: 100%;

  ${(props) => toastTypeVariations[props.type || 'info']};
`

export const Description = styled.div`
  flex: 1;
  margin-left: 1rem;
  position: relative;
`

export const Title = styled.strong`
  font-weight: 500;
`

export const Explain = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
  opacity: 0.8;
`

export const Close = styled.button`
  background: transparent;
  border: 0;
  color: inherit;
  margin-left: 0.5rem;
  width: 1.5rem;
`
