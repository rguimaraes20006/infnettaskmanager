import {
  styled,
  FormControl as MFormControl,
  TextField as MTextField,
  Button as MButton,
} from '@mui/material'
import Instagram from '../../Assets/instagram.svg'
import LinkedIn from '../../Assets/linked-in.svg'
import Twitter from '../../Assets/twitter.svg'

const socialMediaBg = {
  Instagram,
  LinkedIn,
  Twitter,
}

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
export const SocialMediaLabel = styled('div')`
  display: inline-flex;
  justify-content: center;
  width: 100%;
  margin: 53px 0 36px 0;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #545454;
`
export const SocialMediaLogin = styled('div')`
  display: inline-flex;
  justify-content: center;
  column-gap: 32px;
  width: 100%;
  height: 64px;
`
export const SocialMediaButton = styled('div')`
  width: 64px;
  height: 64px;
  background-image: url(${({ bg }) => `${socialMediaBg[bg]}`});
  background-position-x: center;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`
export const RegisterLabel = styled('div')`
  display: inline-flex;
  justify-content: center;
  width: 100%;
  margin-top: 46px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #545454;
`
export const RegisterButton = styled('div')`
  cursor: pointer;
`
