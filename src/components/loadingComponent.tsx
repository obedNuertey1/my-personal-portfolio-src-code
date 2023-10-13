import { CirclesWithBar } from 'react-loader-spinner';

export default ():JSX.Element => {
    return (
        <div id="in-page-loading" data-testid="in-page-loading" className="w-full min-h-screen flex flex-wrap justify-center items-center">
            <div id="load-spinner" className=" stroke-slate-700">
                <CirclesWithBar
                    height="100"
                    width="100"
                    color=""
                    wrapperStyle={{margin: "auto"}}
                    wrapperClass=""
                    visible={true}
                    outerCircleColor=""
                    innerCircleColor=""
                    barColor=""
                    ariaLabel='circles-with-bar-loading'
                />
            </div>
        </div>
    );
};