export default ():JSX.Element => {
    return(
        <>
            <header data-testid="header">
                <div className="header-items" id="profile">
                    <div id="avatar" className="avatar-data"></div>
                    <div className="avatar-data"></div>
                </div>
                <nav className="header-items">
                    <ul>
                        <li className="links" id="home">HOME</li>
                        <li className="links" id="articles">ARTICLES</li>
                        <li className="links" id="projects">PROJECTS</li>
                        <li className="links" id="work">WORK</li>
                    </ul>
                </nav>
            </header>
        </>
    );
};