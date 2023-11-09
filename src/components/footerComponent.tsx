import SocialLinks from "./partials/footerLinks";

export default ():JSX.Element=>{
    return(
        <>
            <footer data-testid="footer" className="mx-auto font-tahoma max-w-[80ch] py-12 fade-in px-4">
                <h2 id="connect" className="text-blue-900 text-sm mb-5 font-bold">CONNECT</h2>
                <address id="address">
                    <ul className="flex flex-col sm:gap-2">
                        <SocialLinks className="social-list my-1 text-lg font-normal not-italic underline hover:no-underline text-gray-700" />
                    </ul>
                </address>
            </footer>
        </>
    );
}