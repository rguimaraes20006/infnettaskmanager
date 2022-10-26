import { styled } from '@mui/material'
import TaskIncomplete from '../../Assets/task-incomplete.svg'
import TaskCompleted from '../../Assets/task-completed.svg'

const bgCategories = {
  Pessoal: '#C7E7E9E5',
  Profissional: '#E0E34D',
  Outros: '#57A050E5',
}

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  column-gap: 20px;
  width: 100%;
  height: 100%;
  margin-top: 24px;
`
export const Task = styled('div')`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 55px;
  margin-bottom: 26px;
  padding: 13px 8px 8px 13px;
  background-color: ${({ bg }) => bgCategories[bg]};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #000;
`
export const TaskDate = styled('div')`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 18px 0 26px 0;
`
export const Date = styled('div')`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 329px;
  height: 29px;
  padding-bottom: 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  border-bottom: 1px solid rgba(200, 200, 200, 0.5);
`
export const TaskStatus = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 100%;
  cursor: pointer;

  &::after {
    content: '';
    width: 44px;
    height: 44px;
    background-image: url(${({ status }) =>
      status === 'completed' ? TaskCompleted : TaskIncomplete});
  }
`
