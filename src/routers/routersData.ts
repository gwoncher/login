import { RouterType } from "./type"

const routerData: RouterType[] = [
  { route: "/", component: () => import("../pages/Index") },
  { route: "/login", component: () => import("../pages/Login") },
  { route: "/register", component: () => import("../pages/Register") }
]

export default routerData
