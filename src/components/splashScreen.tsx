import { Dna } from "react-loader-spinner";
import myImage from "../assets/images/large/Hacker-PNG-Image_2.png"
export default ():JSX.Element => {

    return (
        <div data-testid="splash-screen" id="splash-screen" className="w-full min-h-screen bg-slate-900 flex flex-wrap justify-center items-center">
            <div id="child" className="max-w-sm m-auto flex flex-col justify-center items-center">
                <div className="descendants object-cover w-1/4 hidden">
                    <img src={myImage} alt="hacker-image" loading="eager" />
                </div>
                <div className="descendants object-cover w-1/2 rounded-full">
                    <img className="rounded-full" src="https://i.pinimg.com/originals/77/ca/a3/77caa32884d735d439ade45ba37feaf2.gif" alt="hacking" />
                </div>
                <div className="descendants object-cover mt-5">
                    <Dna
                        visible={true}
                        height="30"
                        width="30"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper"
                    />
                </div>
            </div>
        </div>
    );
};