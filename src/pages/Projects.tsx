import { useEffect } from "react";
export default ():JSX.Element => {

    useEffect(()=>{
        // Reset the scroll bar to the top when leaving the page
        return ()=>{
            window.scrollTo(0, 0);
        };
    });

    return (
        <>
            <h1>This is the Projects Page</h1>
        </>
    );
};