import { lazy, Suspense, ComponentType } from "react";
import SplashScreen from "./splashScreen";
import waiting from "./functions/waiting";

const AfterSplashScreen:any = lazy(async ():Promise<{default: ComponentType<JSX.Element>}>=>{
    await waiting(4000);
    return await import("./afterSplashScreen");
});



export default ():JSX.Element=>{
    return(
        <Suspense fallback={<SplashScreen/>} >
            <AfterSplashScreen />
        </Suspense>
    );
};
