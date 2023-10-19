import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import waiting from "./functions/waiting";


export default ():JSX.Element=>{

    useEffect(()=>{
        $("dialog").hide();
        const dialog:any = document.querySelector("dialog");
        dialog.close();
    },[]);

    // close and set cookie on clicked
    const handleAcceptCookie = async ()=>{
        const currentDate:number = new Date().getTime();
        const newTimeDate:number = currentDate + 10000000; // make the cookie expire the next day
        const cookieExpDate:string = new Date(newTimeDate).toUTCString();
        document.cookie = `myCookie=obednuerteyportfolioxyz; expires=${cookieExpDate}; path=/`;

        await waiting(1200);
        $("dialog").hide();
        const dialog:any = document.querySelector("dialog");
        dialog.close();
        $("dialog").removeClass("dialog-vanish");
    };

    // close cookie page on clicked
    const handleRegectCookie = async()=>{
        await waiting(1200);
        
        $("dialog").hide();
        const dialog:any = document.querySelector("dialog");
        dialog.close();
    };

    return (
        <dialog data-testid="cookie" id="cookie" className="cookie text-xxs p-5 h-auto max-h-fit bg-white flex flex-col justify-center items-center gap-5 rounded-lg max-w-[60ch] mx-auto z-40">
            <article className="text-center z-30">
                <p className="text-lg font-extrabold">Cookies!<span className="text-amber-700 stroke-black fill-black text-xl"><FontAwesomeIcon icon={faCookieBite} /></span></p>
                <p>Hi there ✋😁!</p>
                <p>This site uses cookies to enhance user experience.</p>
                <p>For instance the yellow introductory page that greeted you is controlled by cookies</p>
                <p>When cookie is accepted it won't show upon reload. However, when cookie is rejected it shows up anytime the page reloads</p>
                <p className="mt-1">Would you like to enable cookies?</p>
            </article>
            <article className="flex flex-row gap-2 flex-nowrap">
                <button onClick={handleAcceptCookie} className="border-green-600 border-2 rounded-md p-1 bg-transparent relative cookie-green-button z-30">I Accept Cookies!</button>
                <button onClick={handleRegectCookie} className="border-red-600 border-2 rounded-md p-1 bg-transparent relative cookie-red-button z-30">I Reject Cookies!</button>
            </article>
        </dialog>
    );
}