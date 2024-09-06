import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {publicRoutes} from "./routes";
import React, {Fragment} from "react";
import DefaultLayout from "./components/layout/DefaultLayout.tsx";

function App() {

    return (
        <Router>
            <div className={"App"}>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page: React.ElementType = route.component;
                        let Layout: React.ElementType | null = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return <Route key={index} path={route.path} element={
                            <Layout>
                                <Page/>
                            </Layout>
                        }/>
                    })}
                </Routes>
            </div>
        </Router>
    )
}

export default App
