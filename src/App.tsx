import { lazy, Suspense, ComponentType } from "react";
import SplashScreen from "./components/splashScreen";
import ParentSplashScreen from "./components/parentSplashScreen";
import waiting from "./components/functions/waiting";

const Routes:any = lazy(async ():Promise<{default: ComponentType<JSX.Element>}>=>{
  await waiting(100000);
  return await import("./Routes");
})


const App = ():JSX.Element => {
  return (
    <Suspense fallback={<ParentSplashScreen />}>
      <Routes />
    </Suspense>
  );
};

export default App;
