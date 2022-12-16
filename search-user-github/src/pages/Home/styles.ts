import styled from 'styled-components'
import colors from '../../styles/colors'
import { Form } from 'formik'

export const GeneralContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerApp = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1.5rem;
  padding: 4rem;
  background-color: ${colors.grey700};
  border-radius: 1.2rem;

  @media screen and (max-width: 768px) {
    position: relative;
    width: calc(100vw - 1rem);
  }
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

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`

export const FormikForm = styled(Form)`
  align-items: center;
  display: flex;
`

export const Input = styled.input`
  padding: 1rem 4rem;
  border-radius: 1rem 0 0 1rem;
  background-color: ${colors.grey900};
  outline: ${colors.grey700};
  color: ${colors.white500};
  text-align: center;
  display: block;
  margin-top: 0.5rem;
  cursor: pointer;
  font-weight: 700;
  margin-bottom: 2rem;
  font-size: 1.2rem;

  ::placeholder {
    @media screen and (max-width: 320px) {
      font-size: 0.4rem;
    }
  }

  @media screen and (max-width: 480px) {
    position: relative;
    height: 3rem;
    width: 12rem;
  }
`

export const ClearButton = styled.button`
  width: 54px;
  height: 54px;
  border: none;
  background: ${colors.grey900};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white500};
  transition: ease 0.3s;

  &:hover {
    transition: ease 0.3s;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    height: 3rem;
    width: 2rem;
  }
`

export const SearchButton = styled.button`
  width: 54px;
  height: 54px;
  border-radius: 0 1rem 1rem 0;
  border: none;
  background: ${colors.blue500};
  margin-bottom: 1.5rem;
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

  @media screen and (max-width: 480px) {
    height: 3rem;
    width: 2rem;
  }
`

export const ContainerInfo = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 700px;
  height: 500px;
  background-color: ${colors.grey900};
  border-radius: 1.2rem;
  padding: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    position: relative;
    width: calc(100vw - 4rem);
  }
`

export const UserImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid ${colors.blue500};
`

export const UserText = styled.h1`
  color: ${colors.white500};
  font-size: 30px;
  font-weight: 700;
  margin-top: 2rem;
`

export const UserBio = styled.p`
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

export const ContainerStats = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const ContentStats = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:hover {
    cursor: pointer;
    background: ${colors.grey200};
    transition: 0.4s ease;
    border-radius: 0.4rem;
  }

  @media screen and (max-width: 480px) {
    position: relative;
  }
`

export const NumberStats = styled.h1`
  font-size: 1.3rem;
  text-align: center;
  color: ${colors.white500};
  margin: 0;
`

export const TextStats = styled.h2`
  font-size: 0.8rem;
  text-align: center;
  color: ${colors.white500};
  margin: 0;

  @media screen and (max-width: 480px) {
    position: relative;
    width: calc(100vw - 4rem);
  }
`

export const EmptyThumbnail = styled.div`
  margin-bottom: 1rem;
  max-height: 11rem;
  max-width: 10rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const UserNotFundImage = styled.img`
  height: 100%;
  width: 100%;
`

export const EmptyMessage = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.white500};
  width: 100%;
`
