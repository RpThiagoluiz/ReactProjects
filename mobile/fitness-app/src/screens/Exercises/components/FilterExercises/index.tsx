import { BodyPartCard } from '@components/BodyPartCard';
import { useManageExercises } from '@screens/Exercises/hooks/useManageExercises';
import { FlatList } from 'react-native';
import { fakeBodyPartsData } from 'src/mocks/fakeBodyPartsData';
import { Container } from './styles';

export function FilterExercises() {
  const { changeFilterByBodyPart, filterByBodyPart } = useManageExercises();

  return (
    <Container>
      <FlatList
        data={fakeBodyPartsData}
        keyExtractor={(item) => item}
        contentContainerStyle={{
          marginBottom: 30,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <BodyPartCard
            isActive={filterByBodyPart === item}
            onPressBodyPart={changeFilterByBodyPart}
            bodyPart={item}
          />
        )}
      />
    </Container>
  );
}
