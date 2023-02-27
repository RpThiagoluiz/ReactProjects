import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { ExercisesDetails } from '@screens/ExercisesDetails';
import { Exercises } from '@screens/Exercises';
import { ExercisesType } from '@interface/ExerciseType';

export type ExercisesStackRoutesParamList = {
  ExercisesDetails: { exercise: ExercisesType };
  Exercises: undefined;
};

export type ExercisesStackRoutesProps<
  T extends keyof ExercisesStackRoutesParamList
> = NativeStackScreenProps<ExercisesStackRoutesParamList, T>;

export const ExercisesStackRoutes = () => {
  const Stack = createNativeStackNavigator<ExercisesStackRoutesParamList>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Exercises" component={Exercises} />
      <Stack.Screen name="ExercisesDetails" component={ExercisesDetails} />
    </Stack.Navigator>
  );
};
