import loadingAnimation from "./functions/loadingText";
import {useEffect} from "react";
import showTextYellowPage from "./functions/showTextYellowPage";


export default ():JSX.Element => {

    useEffect(()=>{
        const getTimer:any = showTextYellowPage("#typist", 4000);
        const loadingText:any = loadingAnimation("#loading-text");
        
        return ()=>{
            clearInterval(loadingText);
            clearInterval(getTimer);
        };
    },[]);

    return (
        <>
            <div className="min-w-full min-h-screen bg-slate-900">
                <div data-testid="second-splash" id="second-splash" className="second-splash min-w-full min-h-screen bg-yellow-500">
                    <div id="second-splash-child" className="relative mx-auto font-tahoma max-w-[40ch] p-5 px-4 min-h-screen">
                        <blockquote id="typist" className="mt-20 py-2 text-3xl text-gray-700 font-extrabold border-l-4 border-gray-700 stroke-red-600 stroke-2 pl-2 min-h-h45 h-auto mx-auto inline-block text-center typist">
                        </blockquote>
                        <h3 id="loading-text" className="loading-text text-center text-gray-700"></h3>
                    </div>
                </div>
            </div>
        </>
    );
};

