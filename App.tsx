import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigator from './src/navigator/RootNavigator';
import SplashScreen from './src/screens/splashscreen/SplashScreen';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

function App(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        {isLoading ? (
          <SplashScreen />
        ) : (
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        )}
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
