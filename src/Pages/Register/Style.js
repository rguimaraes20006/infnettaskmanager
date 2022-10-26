import {
  styled,
  FormControl as MFormControl,
  TextField as MTextField,
  Button as MButton,
} from '@mui/material'

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`
export const Title = styled('div')`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #545454;
`
export const Form = styled('form')`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  row-gap: 26px;
  width: 100%;
  margin-top: 10px;
  padding-top: 9px;
`
export const FormControl = styled(MFormControl)`
  flex: 1 1 auto;
  width: 100%;
  height: 48px;
`
export const TextField = styled(MTextField)`
  width: 100%;
  height: 40px;
  background-color: #ebebeb;
  border-radius: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 36px;
  color: #9c9c9c;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  & label {
    top: -6px;
  }

  & div {
    height: 40px;
  }
`
export const Button = styled(MButton)`
  width: 100%;
  height: 37px;
  text-transform: none;
  border-radius: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`
