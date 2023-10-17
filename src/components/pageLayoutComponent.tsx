import HeaderComponent from "./headerComponent";
import FooterComponent from "./footerComponent";
import { Outlet } from "react-router-dom";
import CircleWithBars from "./loadingComponent";
import {Suspense, useEffect} from "react";
import PhoneNav from "./phoneNav";

export default ():JSX.Element=>{
    useEffect(()=>{
        document.cookie = "myCookie=obednuerteyportfolioxyz; path=/";
    });
    return (
        <div className="oblivion relative">
            <PhoneNav className="mx-auto fixed z-10 font-tahoma w-full p-2 fade-in px-2 bottom-0 shadow-lg bg-white rounded-t-lg opacity-95 phone-nav sm:hidden" />
            < HeaderComponent />
                <main className="mx-auto font-tahoma max-w-[80ch] p-5 fade-in px-4">
                    <Suspense fallback={<CircleWithBars />}>
                        <Outlet />
                    </Suspense>
                </main>
            <FooterComponent />
        </div>
    );
};