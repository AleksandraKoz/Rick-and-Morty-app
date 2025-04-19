import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { MainStack } from './src/stacks/Main';
import { CharactersProvider } from './src/context/CharactersContext';

const queryClient = new QueryClient();

function App (): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <CharactersProvider>
        <NavigationContainer>
          <MainStack/>
        </NavigationContainer>
      </CharactersProvider>
    </QueryClientProvider>
  );
}

export default App;
