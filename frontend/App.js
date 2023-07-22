const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import loginpage from "./screens/loginpage";
import AndroidSmall2 from "./screens/AndroidSmall2";
import AndroidSmall4 from "./screens/AndroidSmall4";
import AndroidSmall16 from "./screens/AndroidSmall16";
import AndroidSmall5 from "./screens/AndroidSmall5";
import AndroidSmall3 from "./screens/AndroidSmall3";
import Exportpage from "./screens/exportpage";
import Transferpage from "./screens/transferpage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const AppStateContext = React.createContext();

const App = () => {

  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [productName, setProductName] = React.useState("");
  const [userData, setUserData] = React.useState({});

  const contextValues = {
      productName,
      setProductName,
      userData,
      setUserData,
    };

  return (
    <>
      <NavigationContainer>
        <AppStateContext.Provider value={contextValues}>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="loginpage"
              component={loginpage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidSmall2"
              component={AndroidSmall2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidSmall4"
              component={AndroidSmall4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidSmall16"
              component={AndroidSmall16}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidSmall5"
              component={AndroidSmall5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidSmall3"
              component={AndroidSmall3}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="exportpage"
              component={Exportpage}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="transferpage"
              component={Transferpage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
        </AppStateContext.Provider>
      </NavigationContainer>
    </>
  );
};
export default App;
