import HeaderComponent from "./headerComponent";
import FooterComponent from "./footerComponent";
import { Outlet } from "react-router-dom";

export default ():JSX.Element=>{
    return (
        <>
            < HeaderComponent />
                <main className="mx-auto font-tahoma max-w-[80ch] p-5 fade-in px-4">
                    <Outlet />
                </main>
            <FooterComponent />
        </>
    );
};