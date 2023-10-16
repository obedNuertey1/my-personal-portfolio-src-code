import { lazy, Suspense, ComponentType } from "react";
import SplashScreen from "./splashScreen";

const AfterSplashScreen:any = lazy(async ():Promise<{default: ComponentType<JSX.Element>}>=>{
    return await import("./afterSplashScreen");
});



export default ():JSX.Element=>{
    return(
        <Suspense fallback={<SplashScreen/>} >
            <AfterSplashScreen />
        </Suspense>
    );
};
