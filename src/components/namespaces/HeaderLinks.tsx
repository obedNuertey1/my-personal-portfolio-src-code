import { Link } from "react-router-dom";

namespace HeaderLinks{
    export interface IheaderLink<S, N>{
        className?: S;
        id?: N;
        linkText:S|JSX.Element;
        linkTo: S;
    };

    export type headerLinkJSX = JSX.Element[];

    export class HeaderLinksClass<T extends IheaderLink<string, string>>{
        private headerLinksArray:T[];

        constructor(headerLinksArray:T[]){
            this.headerLinksArray = headerLinksArray;
        }

        public getLinks():headerLinkJSX{
            return this.headerLinksArray.map((elem:T):JSX.Element => {
                return <li className={elem.className} id={elem.id}><Link to={elem.linkTo}>{elem.linkText}</Link>{/*<a href={elem.linkTo}>{elem.linkText}</a>*/}</li>
            });
        };
    }

};

export default HeaderLinks;