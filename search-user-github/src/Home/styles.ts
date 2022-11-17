import styled from 'styled-components'
import colors from '../styles/colors'

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
  height: 80%;
  padding: 3rem;
  background-color: #272a37;
  border-radius: 1.2rem;
`
export const Header = styled.header`
  display: flex;
`
export const TextHeader = styled.h1`
  list-style: none;
  margin-right: 5rem;
  color: ${colors.blue500};
  font-size: 2.5rem;
  font-weight: 700;
`
export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const Form = styled.form``

export const FormText = styled.h1`
  color: ${colors.white500};
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 2rem;
`

export const MainInput = styled.input`
  padding: 20px 10px;
  border-radius: 1.2rem;
  width: 400px;
  background-color: ${colors.grey900};
  color: ${colors.white500};
  text-align: center;
  display: block;
  margin-top: 10px;
  cursor: pointer;
  font-weight: 700;
  margin-bottom: 2rem;
  font-size: 1.2rem;
`

export const ButtonSearch = styled.button`
  padding: 20px 10px;
  border-radius: 1.2rem;
  width: 200px;
  background-color: ${colors.grey900};
  color: ${colors.white500};
  text-transform: uppercase;
  text-align: center;
  display: block;
  margin-top: 10px;
  cursor: pointer;
  font-weight: 700;
  font-size: 1rem;
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
