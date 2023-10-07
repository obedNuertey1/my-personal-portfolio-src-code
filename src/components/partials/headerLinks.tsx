import HeaderLinks from "../namespaces/HeaderLinks";

export default ({className}:any):JSX.Element => {

    /**
     * interface IheaderLink<S, N>{
        className?: S;
        id?: N;
        linkText:S;
        linkTo: S;
    }
     */

    const headerLinksArray:HeaderLinks.IheaderLink<string, string>[] = [
        {className, id:"home", linkText:"HOME", linkTo:"home"},
        {className, id:"articles", linkText:"ARTICLES", linkTo:"articles"},
        {className, id:"projects", linkText:"PROJECTS", linkTo:"projects"},
        {className, id:"work", linkText:"WORK", linkTo:"work"}
    ];

    const headerLinksObject = new HeaderLinks.HeaderLinksClass<HeaderLinks.IheaderLink<string, string>>(headerLinksArray);
    const getLinks:HeaderLinks.headerLinkJSX = headerLinksObject.getLinks();

    return (
        <>
            {getLinks}
        </>
    );
};