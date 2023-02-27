import { IconNavigation } from '@components/IconNavigation';
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { ExercisesStackRoutes } from '@routes/ExercisesStackRoutes';
import { Dashboard } from '@screens/Dashboard';
import { WeekendExercises } from '@screens/WeekendExercises';

export type RootStackParamList = {
  Home: undefined;
  Dashboard: undefined;
  ExercisesStackRoutes: undefined;
  WeekendExercises: undefined;
};

export type RootTabScreenProps<T extends keyof RootStackParamList> =
  BottomTabScreenProps<RootStackParamList, T>;

const Tab = createBottomTabNavigator<RootStackParamList>();

export const TabsRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconNavigation name="home" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="ExercisesStackRoutes"
        component={ExercisesStackRoutes}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconNavigation name="dingding" focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="WeekendExercises"
        component={WeekendExercises}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconNavigation name="calendar" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
