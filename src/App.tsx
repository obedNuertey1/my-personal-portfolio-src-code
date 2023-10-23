import { lazy, Suspense, ComponentType} from "react";
import SplashScreen from "./components/splashScreen";
import ParentSplashScreen from "./components/parentSplashScreen";
import waiting from "./components/functions/waiting";

const Routes:any = lazy(async ():Promise<{default: ComponentType<JSX.Element>}>=>{
  await waiting(76000);
  return await import("./Routes");
})

const Routes2:any = lazy(async ():Promise<{default: ComponentType<JSX.Element>}>=>{
  return await import("./Routes");
});

const App = ():JSX.Element => {

  if(document.cookie == "myCookie=obednuerteyportfolioxyz"){
    return (
      <Suspense fallback={<SplashScreen />}>
        <Routes2 />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<ParentSplashScreen />}>
      <Routes />
    </Suspense>
  );
};

export default App;
