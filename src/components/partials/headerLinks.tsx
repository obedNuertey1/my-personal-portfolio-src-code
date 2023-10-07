import HeaderLinks from "../namespaces/HeaderLinks";

export default ({className}:any):JSX.Element => {

    const headerLinksArray:HeaderLinks.IheaderLink<string, string>[] = [
        {className, id:"home", linkText:"HOME", linkTo:"/"},
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