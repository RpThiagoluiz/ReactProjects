import { useContext } from 'react';
import { ManageExercisesContext } from '../context/manageExercises';

export const useManageExercises = () => useContext(ManageExercisesContext);
