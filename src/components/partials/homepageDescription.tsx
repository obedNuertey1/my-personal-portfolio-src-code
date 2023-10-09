import PageDescriber from "../namespaces/PageDescriber";

export default ():JSX.Element => {
    const className:PageDescriber.IcssClass<string> = {
        introduction: "homepage-section",
        introHeading: "intro-children",
        introBody: "intro-children"
    };

    const id:PageDescriber.IcssId = {
        introduction: "introduction",
        introHeading: "intro-heading",
        introBody: "intro-body"
    };

    const description:PageDescriber.IpageDescriber<string> = {
        heading: "Hello, my name is Obed.",
        paragraph: "I am a Software Engineer based in Accra, Ghana. Currently I'm working on some personal projects",
        className: className,
        id: id
    };

    const pageDescriberInstance = new PageDescriber.PageDescriberClass<PageDescriber.IpageDescriber<string>>(description);
    const getDescription = pageDescriberInstance.getPageDescription();

    return(
        <>
            {getDescription}
        </>
    );
};