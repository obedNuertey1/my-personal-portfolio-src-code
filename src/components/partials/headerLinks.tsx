import HeaderLinks from "../namespaces/HeaderLinks";

export default ({className, linkTexts, id}:any):JSX.Element => {

    const headerLinksArray:HeaderLinks.IheaderLink<string, string>[] = [
        {className, id:id.home, linkText:linkTexts.home, linkTo:"/"},
        {className, id:id.articles, linkText:linkTexts.articles, linkTo:"articles"},
        {className, id:id.projects, linkText:linkTexts.projects, linkTo:"projects"},
        {className, id:id.work, linkText:linkTexts.work, linkTo:"work"}
    ];

    const headerLinksObject = new HeaderLinks.HeaderLinksClass<HeaderLinks.IheaderLink<string, string>>(headerLinksArray);
    const getLinks:HeaderLinks.headerLinkJSX = headerLinksObject.getLinks();

    return (
        <>
            {getLinks}
        </>
    );
};