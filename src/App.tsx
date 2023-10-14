import { lazy, Suspense, ComponentType } from "react";
// import Routes from "./Routes";
import SplashScreen from "./components/splashScreen";
const Routes:any = lazy(async ():Promise<{default: ComponentType<JSX.Element>}>=>{
  return await import("./Routes");
})


const App = ():JSX.Element => {
  return (
    <Suspense fallback={<SplashScreen />}>
      <Routes />
    </Suspense>
  );
};

export default App;
