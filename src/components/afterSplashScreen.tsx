import Typist from "react-typist";
import loadingAnimation from "./functions/loadingText";
import {useEffect} from "react";

let typingText:string[] = [
    "Hi There ✋😅!",
    "I am Obed",
    "A Software Engineer👨‍💻👨‍💻",
    "Welcome to my portfolio website😁😁",
    "I am a TypeScript React Frontend Engineer🚀💪",
    "I am also a TypeScript Node Backend Engineer🚀💪",
];

const TypingComponent = ():JSX.Element => {

    return (
        <>
            <Typist cursor={
                {
                    show: true,
                    blink: true,
                    element: '|',
                    hideWhenDone: true,
                    hideWhenDoneDelay: 1000,
                }
            }
            className="cursor-vertical-text"
            stdTypingDelay={100}
            avgTypingDelay={100}
            >
                <Typist.Delay ms={4000} />
                <span id={`typing-text-0`}>{typingText[0]}</span>
                <Typist.Backspace count={typingText[0].length} delay={2000} />
                <Typist.Delay ms={500} />
                <span id={`typing-text-1`}>{typingText[1]}</span>
                <Typist.Backspace count={typingText[1].length} delay={2000} />
                <Typist.Delay ms={500} />
                <span id={`typing-text-2`}>{typingText[2]}</span>
                <Typist.Backspace count={typingText[2].length} delay={2000} />
                <Typist.Delay ms={500} />
                <span id={`typing-text-3`}>{typingText[3]}</span>
                <Typist.Backspace count={typingText[3].length} delay={2000} />
                <Typist.Delay ms={500} />
                <span id={`typing-text-4`}>{typingText[4]}</span>
                <Typist.Backspace count={typingText[4].length} delay={2000} />
                <Typist.Delay ms={500} />
                <span id={`typing-text-5`}>{typingText[5]}</span>
                <Typist.Backspace count={typingText[5].length} delay={2000} />
                <Typist.Delay ms={500} />
            </Typist>
        </>
    );
}

export default ():JSX.Element => {

    useEffect(()=>{
        const loadingText:any = loadingAnimation("#loading-text");
        
        return ()=>{
            clearInterval(loadingText);
        };
    },[]);

    return (
        <>
            <div data-testid="second-splash" id="second-splash" className="min-w-full min-h-screen bg-yellow-500">
                <div id="second-splash-child" className="relative mx-auto font-tahoma max-w-[40ch] p-5 px-4 min-h-screen">
                    <blockquote id="typist" className="mt-20 py-2 text-3xl text-gray-700 font-extrabold border-l-4 border-gray-700 stroke-red-600 pl-2 min-h-h45 h-auto mx-auto inline-block">
                        <TypingComponent />
                    </blockquote>
                    <h3 id="loading-text" className="loading-text text-center text-gray-700"></h3>
                </div>
            </div>
        </>
    );
};