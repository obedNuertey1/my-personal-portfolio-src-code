import Projects from "../namespaces/Projects";
import {projectDetails} from "../../assets/images/projectDetails";


export default ():JSX.Element => {

    const className = {
        captionGist: "caption-text text-center py-2",
        captionLink: "caption-link text-center p-1 shadow rounded w-10/12 place-self-center  active:shadow-none active:scale-95",
        captionLinks:"caption-text grid grid-cols-2 grid-rows-1 place-conent-center border-b border-gray-200 py-2",
        figcaption: "image-caption grid grid-rows-2 grid-cols-1 place-content-center gap-1",
        figure: "flip project-card flex flex-col rounded-lg w-52 h-auto shadow-md text-xs",
        img: "img-tag w-full rounded-lg rounded-br-none rounded-bl-none"
    };

    const id:Projects.IcssId<string> = {
        captionGist: "caption-gist",
        captionLinks: "caption-links",
        getCode: "get-code", 
        visitPage: "visit-page"
    };


    const projectsArr:Projects.Iprojects<string>[] = projectDetails.map((elem)=>{
        return {captionGistText: elem.captionGistText, className, id, getCodeLink:elem.getCodeLink, getCodeText: "Get Code", image:elem.image, visitPageLink: elem.visitPageLink, visitPageText: "View Site"}
    });

    const projectsInstance = new Projects.ProjectClass<Projects.Iprojects<string>>(projectsArr);
    const getprojects:Projects.projectJSX = projectsInstance.getProjects();


    return <>{getprojects}</>
};