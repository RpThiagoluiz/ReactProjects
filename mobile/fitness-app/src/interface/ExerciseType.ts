export type ExercisesType = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
};

export type FormattedDataType = {
  [key: string]: ExercisesType[];
};
