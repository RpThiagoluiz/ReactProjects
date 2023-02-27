import { useState, useEffect } from 'react';
import { ExercisesType, type FormattedDataType } from '@interface/ExerciseType';
import { arrayGroupByKey } from '@utils/arrayGroupByKey';
import { fakeExercisesData } from 'src/mocks/fakeExercisesData';

export const useInfinityScrollExercises = (filterByBodyPart: string) => {
  const formattedExercisesData: FormattedDataType = arrayGroupByKey(
    fakeExercisesData,
    'bodyPart'
  );
  const [perPage, setPerPage] = useState(5);
  const [filteredData, setFilteredData] = useState<ExercisesType[]>([]);
  const [loading, setLoading] = useState(false);

  const formattedData = formattedExercisesData[filterByBodyPart];

  //TODO: ajuste de performance

  useEffect(() => {
    setPerPage(5);
    const initialData = formattedData?.slice(0, 5);
    setFilteredData(initialData);
  }, [filterByBodyPart]);

  const flatListonEndReached = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setPerPage((prevState) => prevState + 5);
      setFilteredData(formattedData?.slice(0, perPage));
    }, 500);
  };

  return {
    formattedExercisesData,
    loading,
    filteredData,
    flatListonEndReached,
  };
};
