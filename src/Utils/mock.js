import { DateTime } from 'luxon'
import { v4 as uuidV4 } from 'uuid'

export const mockTasks = [
  {
    id: uuidV4(),
    category: 'Pessoal',
    title: 'Cortar o cabelo',
    date: DateTime.utc().plus({ days: -1 }).set({ hour: 10, minutes: 0 }).toString(),
    status: 'completed',
  },
  {
    id: uuidV4(),
    category: 'Outros',
    title: 'Treino de força na academia',
    date: DateTime.utc().plus({ days: -1 }).set({ hour: 19, minutes: 0 }).toString(),
    status: 'completed',
  },
  {
    id: uuidV4(),
    category: 'Profissional',
    title: 'Reunião de trabalho com cliente',
    date: DateTime.utc().plus({ days: 0 }).set({ hour: 11, minutes: 0 }).toString(),
    status: 'incomplete',
  },
  {
    id: uuidV4(),
    category: 'Pessoal',
    title: 'Almoço com a mãe e irmãos',
    date: DateTime.utc().plus({ days: 0 }).set({ hour: 15, minutes: 0 }).toString(),
    status: 'incomplete',
  },
  {
    id: uuidV4(),
    category: 'Outros',
    title: 'Treino cardio na academia',
    date: DateTime.utc().plus({ days: 0 }).set({ hour: 21, minutes: 0 }).toString(),
    status: 'incomplete',
  },
  {
    id: uuidV4(),
    category: 'Outros',
    title: 'Treino de força na academia',
    date: DateTime.utc().plus({ days: 1 }).set({ hour: 21, minutes: 0 }).toString(),
    status: 'incomplete',
  },
]
