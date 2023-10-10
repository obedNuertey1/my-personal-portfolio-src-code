import Articles from "../namespaces/Articles";

export default ({articlesArr}:any):JSX.Element => {
    const className = {
        parent: "sample-article block mb-12",
        articleTime: "article-elem font-serif italic font-medium text-gray-600",
        articleTopic: "article-elem text-3xl font-bold"
    };

    const id = {
        articleTime: "article-time",
        articleTopic: "article-topic",
    }

    const myArticles:Articles.Iarticle<string, Articles.IcssId, Articles.IcssClass<string>>[] = articlesArr.map((elem:any)=>{
        elem["className"] = className;
        elem["id"] = id;
        return elem;
    });

    const articlesInstance = new Articles.ArticlesClass<Articles.Iarticle<string, Articles.IcssId ,Articles.IcssClass<string>>>(myArticles);
    const articles:Articles.articleJSX = articlesInstance.getArticles(); 

    return (
        <>
            {articles}
        </>
    );
};