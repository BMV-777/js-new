 import { Routes,Route } from "react-router-dom";
 import { Layout } from "./Layout/Layout";
// import TableView from "./views/TableView";
import { lazy, Suspense } from "react";

const TableView = lazy(() => import("./views/TableView" /*webpackChunkName: "table" */));

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="table" element={<TableView />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
