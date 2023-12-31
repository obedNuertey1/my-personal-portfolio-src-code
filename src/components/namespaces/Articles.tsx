namespace Articles {
    export interface IcssClass<S>{
        parent: S;
        articleTime: S;
        articleTopic: S;
    };

    export interface IcssId extends Omit<IcssClass<string>, "parent">{};

    export interface Iarticle<S, U extends IcssId, T extends IcssClass<string>>{
        time?: S;
        $h3?: S;
        id: U;
        className: T;
        $href?: S;
    };

    export type articleJSX = JSX.Element[];

    export class ArticlesClass<U extends Iarticle<string, IcssId, IcssClass<string>>>{
        private articlesArray: U[];

        constructor(articlesArray:U[]){
            this.articlesArray = articlesArray;
        }

        public getArticles():articleJSX{
            return this.articlesArray.map((elem:U):JSX.Element => {
                return (
                    <>
                        <article className={elem.className.parent}>
                            <time id={elem.id.articleTime} className={elem.className.articleTime}>{elem.time}</time>
                            <h3 id={elem.id.articleTopic} className={elem.className.articleTopic}><a href={elem.$href} target="_blank">{elem.$h3}</a></h3>
                        </article>
                    </>
                );
            });
        }
    };

};
export default Articles;