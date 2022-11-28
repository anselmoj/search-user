import styled from 'styled-components'
import colors from '../../styles/colors'

export const GeneralContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const ContainerApp = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.grey200};
  display: flex;
  align-items: center;
  padding: 3rem;
  justify-content: center;
`
export const Container = styled.div`
  width: 80%;
  height: auto;
  padding: 3rem;
  background-color: ${colors.grey700};
  border-radius: 1.2rem;
`
export const ContentHeader = styled.header`
  display: flex;
  justify-content: center;
`

export const TitleHeader = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
`
export const TextHeader = styled.h1`
  list-style: none;
  margin-bottom: 1rem;
  color: ${colors.white500};
  font-size: 2rem;
  font-weight: 700;
`

export const Form = styled.div`
  align-items: center;
  display: flex;
`

export const MainInput = styled.input`
  padding: 1rem 0.5rem;
  border-radius: 1.2rem;
  background-color: ${colors.grey900};
  color: ${colors.white500};
  text-align: center;
  display: block;
  margin-top: 0.5rem;
  cursor: pointer;
  font-weight: 700;
  margin-bottom: 2rem;
  font-size: 1.2rem;
`

export const ButtonSearch = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 1rem;
  border: none;
  background: ${colors.blue500};
  margin-left: 10px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white500};
  transition: ease 0.3s;

  &:hover {
    transform: scale(1.05);
    transition: ease 0.3s;
    cursor: pointer;
  }
`
export const ContainerDetails = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`

export const Content = styled.div`
  width: 700px;
  height: 500px;
  background-color: ${colors.grey900};
  border-radius: 1.2rem;
  padding: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const ContentImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid ${colors.blue500};
`
export const ContentText = styled.h1`
  color: ${colors.white500};
  font-size: 30px;
  font-weight: 700;
  margin-top: 2rem;
`
export const ContentBio = styled.p`
  color: ${colors.white500};
  font-size: 20px;
  font-weight: 700;
  margin-top: 2rem;
`

export const ContentFollowers = styled.div`
  color: ${colors.white500};
  font-size: 20px;
  font-weight: 700;
  margin-top: 2rem;
`
export const ContainerHorizontal = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const ContentNumber = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const TextDetails = styled.h1`
  font-size: 1.3rem;
  text-align: center;
  color: ${colors.white500};
  margin: 0;
`
export const NumberDetails = styled.h2`
  font-size: 0.8rem;
  text-align: center;
  color: ${colors.white500};
  margin: 0;
`
