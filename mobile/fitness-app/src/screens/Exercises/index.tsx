import { type ExercisesStackRoutesProps } from '@routes/ExercisesStackRoutes';
import { ContainerPage } from '@components/ContainerPage';
import { FilterExercises } from './components/FilterExercises';
import { ManageExercisesProvider } from './context/manageExercises';
import { ExerciseList } from './components/ExerciseList';

export const Exercises = ({
  navigation,
}: ExercisesStackRoutesProps<'Exercises'>) => {
  return (
    <ManageExercisesProvider>
      <ContainerPage hasHeader screenTitle="Exercises">
        <FilterExercises />
        <ExerciseList navigation={navigation} />
      </ContainerPage>
    </ManageExercisesProvider>
  );
};
