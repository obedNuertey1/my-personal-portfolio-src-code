import FooterLinks from "../namespaces/FooterLinks";

export default ({className}:FooterLinks.IfooterLink<string, number>):JSX.Element=>{

    const linksArray:FooterLinks.IfooterLink<string, number>[] = [
        {className, href: "", linkText: "Twitter", rel:"noreferrer", target: "_blank"},
        {className, href: "", linkText: "GitHub", rel:"noreferrer", target: "_blank"},
        {className, href: "", linkText: "LinkedIn", rel:"noreferrer", target: "_blank"},
        {className, href: "", linkText: "Email", rel:"noreferrer", target: "_blank"}
    ];

    const footerLinksObject = new FooterLinks.FooterLinkClass<FooterLinks.IfooterLink<string, number>>(linksArray);
    const getLinks:FooterLinks.footerLinkJSX = footerLinksObject.getLinks();
    return(
        <>
            {getLinks}
        </>
    );
};