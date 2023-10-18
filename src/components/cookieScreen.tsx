export default ():JSX.Element=>{

    return (
        <>
            <div data-testid="cookie" id="cookie" className="cookie text-xxs p-5 h-auto bg-white flex flex-col justify-center items-center gap-5 backdrop:bg-gray-900 backdrop-blur-sm backdrop-opacity-20 rounded-lg border border-black border-solid max-w-[60ch] mx-auto z-40">
                <article className="text-center z-30">
                    <p>Hi there ✋😁!</p>
                    <p>This site uses cookies to enhance user experience.</p>
                    <p className="mt-1">Would you like to enable cookies?</p>
                </article>
                <article className="flex flex-row gap-2 flex-nowrap">
                    <button className="border-green-600 border-2 rounded-md p-1 bg-transparent relative cookie-green-button z-30">I Accept Cookies!</button>
                    <button className="border-red-600 border-2 rounded-md p-1 bg-transparent relative cookie-red-button z-30">I Reject Cookies!</button>
                </article>
            </div>
        </>
    );
}