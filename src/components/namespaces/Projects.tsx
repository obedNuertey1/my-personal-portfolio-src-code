namespace Projects{

    export interface IcssClass<S>{
        figure: S;
        img: S;
        figcaption: S;
        captionLinks: S;
        captionLink: S;
        captionGist: S;
    };

    export interface IcssId<T> extends Omit<IcssClass<T>, "figure" | "img" | "figcaption" | "captionLink">{
        getCode: T;
        visitPage: T;
    };

    export interface Iimage<U>{
        src:U;
        alt:U;
    }

    export interface Iprojects<S>{
        className: IcssClass<S>;
        id: IcssId<S>;
        image: Iimage<S>;
        getCodeLink: S;
        visitPageLink: S;
        getCodeText: S;
        visitPageText: S;
        captionGistText: S;
    };

    export type projectJSX = JSX.Element[];

    export class ProjectClass<V extends Iprojects<string>>{
        private projectsArray:V[];

        constructor(projectsArray:V[]){
            this.projectsArray = projectsArray;
        }

        public getProjects():projectJSX{
            return this.projectsArray.map((elem:V):JSX.Element => {
                return (
                    <figure className={elem.className.figure} >
                        <img className={elem.className.img} src={elem.image.src} alt={elem.image.alt} loading="lazy" />
                        <figcaption className={elem.className.figcaption}>
                            <div className={elem.className.captionLinks} id={elem.id.captionLinks}>
                                <div className={elem.className.captionLink} id={elem.id.getCode}><a href={elem.getCodeLink} rel="noreferrer" target="_blank">{elem.getCodeText}</a></div>
                                <div className={elem.className.captionLink} id={elem.id.visitPage}><a href={elem.visitPageLink} rel="noreferrer" target="_blank">{elem.visitPageText}</a></div>
                            </div>
                            <div className={elem.className.captionGist} id={elem.id.captionGist}>{elem.captionGistText}</div>
                        </figcaption>
                    </figure>
                );
            });
        }
    };

};

export default Projects;