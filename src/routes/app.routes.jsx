import { Route, Routes } from "react-router-dom";

import { Menu } from "../pages/Menu";

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Menu />} />
    </Routes>
  )
}