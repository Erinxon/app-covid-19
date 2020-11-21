import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Ayuda from './View/Ayuda'
import Inicio from './View/Inicio'
import Prevencion from './View/Prevencion'
import sintomas from './View/Sintomas'
import tratamientos from './View/Tratamientos'
import Image from 'react-native-remote-svg'

const stack = createDrawerNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Inicio">
        <stack.Screen name="Inicio" component={Inicio} options={{
          drawerLabel: 'Inicio',
          drawerIcon: (() => <Image
          source={require('./assets/hogar.svg')}
        />)
        }}/>
        <stack.Screen name="Prevenir" component={Prevencion} options={{
          drawerLabel: 'Prevenir',
          drawerIcon: (() => <Image
          source={require('./assets/mascarilla-medica.svg')}
        />)
        }}/>
        <stack.Screen name="Síntomas" component={sintomas} options={{
          drawerLabel: 'Síntomas',
          drawerIcon: (() => <Image
          source={require('./assets/menusintoma.svg')}
        />)
        }}/>
        <stack.Screen name="Tratamientos" component={tratamientos} options={{
          drawerLabel: 'Tratamientos',
          drawerIcon: (() => <Image
          source={require('./assets/doctor.svg')}
        />)
        }}/>

        <stack.Screen name="Ayuda" component={Ayuda} options={{
          drawerLabel: 'Ayuda',
          drawerIcon: (() => <Image
          source={require('./assets/ayuda.svg')}
        />)
        }} />

      </stack.Navigator>
    </NavigationContainer>
  );
}