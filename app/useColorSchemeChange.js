import { useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import {useColorScheme} from 'react-native';

const useColorSchemeChange = () => {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme: newColorScheme }) => {
      setColorScheme(newColorScheme);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return colorScheme;
};

export default useColorSchemeChange;
