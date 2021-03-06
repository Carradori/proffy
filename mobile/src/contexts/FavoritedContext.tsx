import React, { useState, createContext } from "react";
import { AsyncStorage } from "react-native";
import { Teacher } from "../components/TeachersList/TeacherList";

interface ContextProps {
  handleFavoritedToggle: (teacher: Teacher, favorited: boolean) => void;
  isFavorited: boolean;
}

export const TodoContext = createContext<ContextProps>({
  handleFavoritedToggle: (teacher: Teacher, favorited: boolean) => null,
  isFavorited: true,
});

const FavoritedProvider: React.FC = ({ children }) => {
  const [isFavorited, setIsFavorited] = useState<boolean>(true);

  const handleFavoritedToggle = async (
    teacher: Teacher,
    favorited: boolean
  ) => {
    setIsFavorited(favorited);
    const favoriteds = await AsyncStorage.getItem("favorites");

    let favArray = [];

    if (favoriteds) {
      favArray = JSON.parse(favoriteds);
    }
    if (isFavorited) {
      const favoritedIndex = favArray.findIndex(
        (teacherItem: Teacher) => teacherItem.id === teacher.id
      );
      favArray.splice(favoritedIndex, 1);
      setIsFavorited(false);
    } else {
      favArray.push(teacher);
      setIsFavorited(true);
    }
    await AsyncStorage.setItem("favorites", JSON.stringify(favArray));
  };

  return (
    <TodoContext.Provider value={{ isFavorited, handleFavoritedToggle }}>
      {children}
    </TodoContext.Provider>
  );
};

export default FavoritedProvider;
