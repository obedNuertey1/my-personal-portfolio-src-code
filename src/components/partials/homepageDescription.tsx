import PageDescriber from "../namespaces/PageDescriber";

export default ({className, id}:PageDescriber.IpageDescriber<string>):JSX.Element => {
    const description:PageDescriber.IpageDescriber<string> = {
        heading: "Hello, my name is Obed.",
        paragraph: "I am a Software Engineer based in Accra, Ghana. Currently I'm working on some personal projects",
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