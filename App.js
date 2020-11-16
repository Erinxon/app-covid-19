import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator, DrawerItem  } from '@react-navigation/drawer'
import Ayuda from './View/Ayuda'
import Inicio from './View/Inicio'
import Prevencion from './View/Prevencion'
import sintomas  from './View/Sintomas'
import tratamientos  from './View/Tratamientos'

const stack = createDrawerNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Inicio">
        <stack.Screen name="Inicio" component={Inicio} />
        <stack.Screen name="Prevenir" component={Prevencion} />
        <stack.Screen name="Síntomas" component={sintomas}/>
        <stack.Screen name="Tratamientos" component={tratamientos}/>
        <stack.Screen name="Ayuda" component={Ayuda}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}