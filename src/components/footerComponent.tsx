export default ():JSX.Element=>{
    return(
        <>
            <footer data-testid="footer" className="mx-auto max-w-[80ch] py-12 fade-in px-4">
                <h2 id="connect">CONNECT</h2>
                <address id="address">
                    <ul>
                        <li className="social-list font-normal not-italic"><a href="" rel="noreferrer" target="_blank">Twitter</a></li>
                        <li className="social-list font-normal not-italic"><a href="" rel="noreferrer" target="_blank">GitHub</a></li>
                        <li className="social-list font-normal not-italic"><a href="" rel="noreferrer" target="_blank">LinkedIn</a></li>
                        <li className="social-list font-normal not-italic"><a href="" rel="noreferrer" target="_blank">Email</a></li>
                    </ul>
                </address>
            </footer>
        </>
    );
}