namespace PageDescriber{

    // I want to make the className loosely coupled
    export interface IcssClass<S>{
        introduction?: S;
        introHeading?: S;
        introBody?: S;
    };

    export interface IcssId extends IcssClass<string>{}; //I want to make the id attribute loosely coupled

    export interface IpageDescriber<T>{
        heading?: T;
        paragraph?: T;
        className: IcssClass<string>; //I want to make the className loosely coupled to allow for flexibility using tailwindcss
        id: IcssId;
    };

    export class PageDescriberClass<U extends IpageDescriber<string>>{
        private pageDescriberObj: U;

        constructor(pageDescriberObj:U){
            this.pageDescriberObj = pageDescriberObj;
        }

        public getPageDescription():JSX.Element{
            return (
                <section id={this.pageDescriberObj.id.introduction} className={this.pageDescriberObj.className.introduction}>
                    <h1 id={this.pageDescriberObj.id.introHeading} className={this.pageDescriberObj.className.introHeading}>{this.pageDescriberObj.heading}</h1>
                    <h2 id={this.pageDescriberObj.id.introBody} className={this.pageDescriberObj.className.introBody}>{this.pageDescriberObj.paragraph}</h2>
                </section>
            );
        };
    };
};

export default PageDescriber;