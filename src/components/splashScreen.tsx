import { Dna } from "react-loader-spinner";
// import smallImage from "../assets/images/splash-screen-images/sm/dope-hacker-small.gif";
import largeImage from "../assets/images/splash-screen-images/lg/dope-hacker.gif";


export default ():JSX.Element => {

    return (
        <div data-testid="splash-screen" id="splash-screen" className="w-full min-h-screen bg-slate-900 flex flex-wrap justify-center items-center">
            <div id="child" className="max-w-sm m-auto flex flex-col justify-center items-center">
                <div className="descendants object-cover w-1/4 hidden">
                </div>
                <div className="descendants object-cover w-1/2 rounded-full">
                    <img className="rounded-full" /*width={375}*/ src={largeImage} alt="hacking" loading="eager" />
                </div>
                <div className="descendants object-cover mt-5">
                    <Dna
                        visible={true}
                        height="30"
                        width="30"
                        ariaLabel="dna-loading"
                        wrapperStyle={{objectFit: "cover"}}
                        wrapperClass="dna-wrapper"
                    />
                </div>
            </div>
        </div>
    );
};