import { lazy, Suspense } from "react"
import { LazyComponentType, RouterType } from "./type"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Spin } from "antd"
import routersData from "./routersData"

export default function RouterWrapper() {
  return (
    <Router>
      <Routes>
        {routersData.map((item: RouterType) => {
          const LazyComponent: LazyComponentType = lazy(item.component)
          return (
            <Route
              path={item.route}
              key={item.route}
              element={
                <Suspense fallback={<Spin />}>
                  <LazyComponent />
                </Suspense>
              }
            ></Route>
          )
        })}
      </Routes>
    </Router>
  )
}
