namespace FooterLinks{
    export interface IfooterLink<T, U>{
        className?: T;
        href?: T;
        rel?: T;
        id?: T|U;
        target?: T;
        linkText?: T|U;
        download?: T;
    }

    export type footerLinkJSX = JSX.Element[];

    export class FooterLinkClass<V extends IfooterLink<string, number>>{
        private linksArray:V[];

        constructor(linksArray:V[]){
            this.linksArray = linksArray;
        }

        public getLinks():footerLinkJSX{
            return this.linksArray.map((elem:V):JSX.Element=>{
                return(<li><a className={elem.className} href={elem.href} rel={elem.rel} target={elem.target} download={elem.download}>{elem.linkText}</a></li>);
            });
        }
    };
};

export default FooterLinks;