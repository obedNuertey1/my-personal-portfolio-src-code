import PageDescriber from "../namespaces/PageDescriber";

export default ({heading, paragraph, cssSectionClass, cssSectionId}:any):JSX.Element => {
    const className = {
        introduction: cssSectionClass+" py-24",
        introHeading: "intro-children text-4xl mb-4 font-bold",
        introBody: "intro-children font-serif italic text-xl"
    };

    const id:PageDescriber.IcssId = {
        introduction: cssSectionId,
        introHeading: "intro-heading",
        introBody: "intro-body"
    };

    const description:PageDescriber.IpageDescriber<string> = {
        heading,
        paragraph,
        className,
        id
    };

    const pageDescriberInstance = new PageDescriber.PageDescriberClass<PageDescriber.IpageDescriber<string>>(description);
    const getDescription = pageDescriberInstance.getPageDescription();

    return(
        <>
            {getDescription}
        </>
    );
};