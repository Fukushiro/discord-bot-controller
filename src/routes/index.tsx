import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { List } from "../pages/List";

export const urls = {
  home: "/",
  list: "/list",
};

export function RouteManager() {
  return (
    <Routes>
      <Route path={urls.home} element={<Home />} />
      <Route path={urls.list} element={<List />} />
    </Routes>
  );
}
