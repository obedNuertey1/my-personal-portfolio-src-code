import HeaderComponent from "./headerComponent";
import FooterComponent from "./footerComponent";
import { Outlet } from "react-router-dom";
import CircleWithBars from "./loadingComponent";
import {Suspense, useEffect} from "react";
import PhoneNav from "./phoneNav";
import CookieScreen from "./cookieScreen";
import $ from "jquery";
import waiting from "./functions/waiting";

function randomNumGen(min:number, max:number):number{
    return Math.floor(Math.random() * (max+1 - min) + min);
}


export default ():JSX.Element=>{

    const getRandomNumber:number = randomNumGen(15, 25);

    useEffect(()=>{

        // close and hide the cookie page on mount
        $("dialog").hide();
        const dialog:any = document.querySelector("dialog");
        dialog.close();

        (async (num:number)=>{

            if(document.cookie != "myCookie=obednuerteyportfolioxyz"){
                // on component mount, wait for a while before showing cookie page
                await waiting(1000 * num);

                const dialog:any = document.querySelector("dialog");
                dialog.showModal();
                $("dialog").show();
            }else{
                // close and hide cookie page
                const dialog:any = document.querySelector("dialog");
                dialog.close();
                $("dialog").hide();
            }

        })(getRandomNumber);
    });
    return (
        <div className="oblivion relative" >
            <CookieScreen />
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