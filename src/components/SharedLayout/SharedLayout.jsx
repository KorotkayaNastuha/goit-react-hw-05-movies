import { Suspense } from "react";
import { NavLink } from "react-router-dom";
import css from '../SharedLayout/SharedLayout.module.css';
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
    return (
        <div className={css.container}>
            <header className={css.header}>
                <nav className={css.nav}>
                    <NavLink  to="/"
                        className={({ isActive }) => isActive ? css.nav_active : null}>
                        Home
                    </NavLink>
                    <NavLink to="/movies" className={({ isActive }) => isActive ? css.nav_active : null}>
                        Movies
                    </NavLink>
                </nav>
            </header>
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
        </div>
    )
}