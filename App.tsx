import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { CharactersProvider } from './src/context/CharactersContext';

import { MainStack } from './src/stacks/Main';

const queryClient = new QueryClient();

function App (): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <CharactersProvider>
          <NavigationContainer>
            <MainStack/>
          </NavigationContainer>
        </CharactersProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;
