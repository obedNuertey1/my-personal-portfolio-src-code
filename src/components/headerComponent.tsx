import HeaderNavLinks from "./partials/headerLinks";
import largeAvatarImg from "../assets/images/large/Hacker-PNG-Image_2.png";

export default ():JSX.Element => {
    return(
        <>
        <div className="fixed top-0 w-full z-10 bg-white shadow-md text-sm select-none">
            <header data-testid="header" className=" flex justify-between items-center w-full max-w-5xl mx-auto px-3">
                <div className="header-items flex items-center justify-center" id="profile">
                    <div id="avatar" className="shadow-sm mr-1 avatar-data w-12 object-cover inline-block border-gray-700 border-spacing-0 p-0 border-solid rounded-full">
                        <img className="w-full" src={largeAvatarImg} alt="avatar" />
                    </div>
                    <div className="avatar-data flex justify-center items-center h-16">
                        <h2 className="m-auto whitespace-nowrap font-extrabold font-lato">OBED NUERTEY</h2>
                    </div>
                </div>
                <nav className="header-items hidden sm:flex sm:justify-center sm:items-center">
                    <ul className="flex gap-4">
                        <HeaderNavLinks className="links font-extrabold font-lato align-middle relative py-2" />
                    </ul>
                </nav>
            </header>

        </div>
        </>
    );
};