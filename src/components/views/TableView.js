import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import SortSelector from "../SortSelector/SortSelector";
import { Table } from "../Table/Table";

const initialState = [
  { id: 1, value: 100 },
  { id: 2, value: 300 },
  { id: 3, value: 500 },
  { id: 4, value: 200 },
  { id: 5, value: 400 },
];

const sortOptions = [
  { value: "ascending", label: "По возрастанию" },
  { value: "descending", label: "По убыванию" },
];

export default function TableView() {
  const [expenses] = useState(initialState);
  const navigate = useNavigate();
  const location = useLocation();

  // const sortOrder = location.search.get("sortBy") ?? "ascending";

  const onSortOrderChange = (order) => {
    // console.log(navigate);
    // console.log(location);
    //  console.log(history);
    // navigate({
    //   ...location,
    //   search: `sortBy=${order}`,
    // });
    //   console.log(navigate);
  };

  useEffect(() => {
    if (location.search !== "") {
      return;
    }
    location.push({ ...location, search: "sortBy=ascending" });
  }, [location, navigate]);

  return (
    <>
      <SortSelector
        options={sortOptions}
        onChange={onSortOrderChange}
        value={"ddd"}
      />

      <Table items={expenses} />
    </>
  );
}
