import { keyframes } from 'styled-components'

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const disappear = keyframes`
  from {
    opacity: 1;
  } 
  to {
    opacity: 0;
  }
`

const leftIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-3.5rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const leftOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-4rem);
  }
`

const rightIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(3.5rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const rightOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(4rem);
  }
`

const shimmer = keyframes`
  from {
    background-position: -1000px 0;
  }
  to {
    background-position: 1000px 0;
  }
`

const loadingBar = keyframes`
  from {
    transform: translateX(-10rem);
  }
  to {
    transform: translateX(25rem);
  }
`

export default {
  appear,
  disappear,
  leftIn,
  leftOut,
  loadingBar,
  rightIn,
  rightOut,
  shimmer,
}
