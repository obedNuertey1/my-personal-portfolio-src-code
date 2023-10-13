import {Routes, Route} from "react-router-dom";
import {ComponentType, lazy} from "react";
import PageLayoutComponent from "./components/pageLayoutComponent";
// import Home from "./pages/Home";
// import Articles from "./pages/Articles";
// import Projects from "./pages/Projects";
// import Work from "./pages/Work";

const Home:any = lazy(async ():Promise<{default: ComponentType<JSX.Element>}>=>{
    return await (import("./pages/Home"));
});
const Articles:any = lazy(async ():Promise<{default: ComponentType<JSX.Element>}>=>{
    return await (import("./pages/Articles"));
});
const Projects:any = lazy(async ():Promise<{default: ComponentType<JSX.Element>}>=>{
    return await (import("./pages/Projects"));
});
const Work:any = lazy(async ():Promise<{default: ComponentType<JSX.Element>}>=>{
    return await (import("./pages/Work"));
});

export default ():JSX.Element=>{
    return (
        <>
            <Routes>
                <Route path="/" element={<PageLayoutComponent/>}>
                    <Route index element={<Home />} />
                    <Route path={'/articles/'} element={<Articles />}/>
                    <Route path={'/projects/'} element={<Projects />}/>
                    <Route path={'/work/'} element={<Work />} />
                </Route>
            </Routes>
        </>
    );
};