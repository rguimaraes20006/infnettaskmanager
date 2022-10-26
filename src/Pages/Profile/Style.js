import { Input as MInput, styled } from '@mui/material'

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  width: 100%;
  padding: 0 22px;
`
export const Title = styled('div')`
  margin: 40px 0 18px 0;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
`
export const Input = styled(MInput)`
  width: 100%;
  height: 43px;
  padding: 0 17px;
  background-color: #ebebeb;
  border-radius: 30px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #221a1a;
  box-shadow: 2px 2px 23px 21px rgba(0, 0, 0, 0.05);
`
export const Row = styled('div')`
  display: inline-flex;
  justify-content: center;
  column-gap: 26px;
  width: 100%;
  margin-bottom: 25px;
`
export const Button = styled('div')`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 133px;
  height: 43px;
  margin-top: 101px;
  background: #f8f8f8;
  border-radius: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  cursor: pointer;
`
