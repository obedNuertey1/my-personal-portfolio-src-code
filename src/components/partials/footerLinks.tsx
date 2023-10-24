import FooterLinks from "../namespaces/FooterLinks";
import resume from "../../assets/text-and-other-files/Obed_Nuertey_Resume.pdf";

export default ({className}:FooterLinks.IfooterLink<string, number>):JSX.Element=>{

    const linksArray:FooterLinks.IfooterLink<string, number>[] = [
        {className, href: resume, linkText: "Resume", download: "obed-resume.pdf"},
        {className, href: "https://twitter.com/obedNuertey1", linkText: "Twitter", rel:"noreferrer", target: "_blank", download: "false"},
        {className, href: "https://github.com/obedNuertey1", linkText: "GitHub", rel:"noreferrer", target: "_blank", download: "false"},
        {className, href: "https://www.linkedin.com/in/obed-nuertey-60b63b227/", linkText: "LinkedIn", rel:"noreferrer", target: "_blank", download:"false"},
        {className, href: "mailto:onuertey1997@gmail.com?subject=Email from your website", linkText: "Email", rel:"noreferrer", target: "_blank", download: "false"}
    ];

    const footerLinksObject = new FooterLinks.FooterLinkClass<FooterLinks.IfooterLink<string, number>>(linksArray);
    const getLinks:FooterLinks.footerLinkJSX = footerLinksObject.getLinks();
    return(
        <>
            {getLinks}
        </>
    );
};