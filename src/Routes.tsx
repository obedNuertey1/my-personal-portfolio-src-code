import {Routes, Route} from "react-router-dom";
// import {ComponentType, lazy, Suspense} from "react";
import PageLayoutComponent from "./components/pageLayoutComponent";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Projects from "./pages/Projects";
import Work from "./pages/Work";

export default ():JSX.Element=>{
    return (
        <>
            <Routes>
                <Route path="/" element={<PageLayoutComponent/>}>
                    <Route index element={<Home />} />
                    <Route path={'/articles'} element={<Articles />}/>
                    <Route path={'/projects'} element={<Projects />}/>
                    <Route path={'/work'} element={<Work />} />
                </Route>
            </Routes>
        </>
    );
};