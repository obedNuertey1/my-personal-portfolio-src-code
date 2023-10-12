namespace Projects{

    export interface IcssClass<S>{
        figure: S;
        img: S;
        figcaption: S;
        captionLinks: S;
        captionLink: S;
        captionGist: S;
    };

    export interface IcssId<T> extends Omit<IcssClass<string>, "figure" | "img" | "figcaption">{
        getCode: T;
        visitPage: T;
    };

    export interface Iimage<U>{
        src:U;
        alt:U;
        loading:U;
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

    

};

export default Projects;