import AppBar from "components/AppBar/AppBar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <container>
            <AppBar/>

            <Suspense>
                <Outlet/>
            </Suspense>
        </container>
    )
}