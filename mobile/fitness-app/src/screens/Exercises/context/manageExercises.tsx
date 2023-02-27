import { createContext, useState, useMemo } from 'react';
import { fakeBodyPartsData } from 'src/mocks/fakeBodyPartsData';

interface ManageExercisesContextProps {
  filterByBodyPart: string;
  changeFilterByBodyPart: (bodyPart: string) => void;
}

interface ManageExercisesProviderProps {
  children: React.ReactNode;
}

export const ManageExercisesContext = createContext(
  {} as ManageExercisesContextProps
);

export const ManageExercisesProvider = ({
  children,
}: ManageExercisesProviderProps) => {
  const bodyParts = useMemo(() => fakeBodyPartsData, []);

  const [filterByBodyPart, setFilterByBodyPart] = useState(bodyParts[0]);

  const changeFilterByBodyPart = (bodyPart: string) => {
    setFilterByBodyPart(bodyPart);
  };

  return (
    <ManageExercisesContext.Provider
      value={{
        filterByBodyPart,
        changeFilterByBodyPart,
      }}
    >
      {children}
    </ManageExercisesContext.Provider>
  );
};
