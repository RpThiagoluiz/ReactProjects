import { FlatList, Text } from 'react-native';
import { Divider } from '@components/Divider';
import { ExerciseCard } from '@components/ExerciseCard';
import { LoadingMoreItens } from '../LoadingMoreItens';
import { DividerWrapper } from './styles';
import { useManageExercises } from '@screens/Exercises/hooks/useManageExercises';
import { useInfinityScrollExercises } from '@screens/Exercises/hooks/useInfinityScrollExercises';
import { ExercisesType } from '@interface/ExerciseType';
import { ExercisesStackRoutesParamList } from '@routes/ExercisesStackRoutes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Props {
  navigation: NativeStackNavigationProp<
    ExercisesStackRoutesParamList,
    'Exercises',
    undefined
  >;
}

export const ExerciseList = ({ navigation }: Props) => {
  const { filterByBodyPart } = useManageExercises();
  const { filteredData, flatListonEndReached, loading } =
    useInfinityScrollExercises(filterByBodyPart);

  const handleExercises = (item: ExercisesType) => {
    navigation.navigate('ExercisesDetails', { exercise: item });
  };

  return (
    <FlatList
      ListHeaderComponent={<Text>TODO HEADER</Text>}
      data={filteredData}
      renderItem={({ item }) => (
        <ExerciseCard onPress={handleExercises} data={item} />
      )}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{
        marginBottom: 50,
      }}
      ItemSeparatorComponent={() => (
        <DividerWrapper>
          <Divider color="primary" size="small" />
        </DividerWrapper>
      )}
      onEndReached={flatListonEndReached}
      onEndReachedThreshold={0.1}
      ListFooterComponent={loading ? <LoadingMoreItens /> : null}
    />
  );
};
