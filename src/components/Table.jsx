import React, { useContext } from "react";
import columns from "../static/columns";
import colleges from "../static/colleges";
import context from "../context";
import handleSortingLogic from "./handleSortingLogic";

export default function Table() {
  const sort = useContext(context);
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            {columns.map((col) => (
              <th style={{ backgroundColor: "cyan" }} scope="col" key={col}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sort?.sort === "1"
            ? colleges
                .sort((col1, col2) =>
                  col1?.name
                    .toLowerCase()
                    .localeCompare(col2?.name.toLowerCase())
                )
                .filter((college) =>
                  college?.name
                    .toLowerCase()
                    .startsWith(sort.name?.toLowerCase())
                )
                .map((college) => (
                  <tr>
                    <th scope="row">
                      {college?.rank ? college.rank : "Not Available"}
                    </th>
                    <td>{college?.name ? college.name : "Not Available"}</td>
                    <td>{college?.fees ? college.fees : "Not Available"}</td>
                    <td>
                      {college?.placement ? college.placement : "Not Available"}
                    </td>
                    <td>
                      {college?.reviews ? college.reviews : "Not Available"}
                    </td>
                    <td>
                      {college?.rankings ? college.rankings : "Not Available"}
                    </td>
                  </tr>
                ))
            : sort?.sort === "2"
            ? colleges
                .sort((col1, col2) => col1?.rank - col2?.rank)
                .filter((college) =>
                  college?.name
                    .toLowerCase()
                    .startsWith(sort.name?.toLowerCase())
                )
                .map((college) => (
                  <tr>
                    <th scope="row">
                      {college?.rank ? college.rank : "Not Available"}
                    </th>
                    <td>{college?.name ? college.name : "Not Available"}</td>
                    <td>{college?.fees ? college.fees : "Not Available"}</td>
                    <td>
                      {college?.placement ? college.placement : "Not Available"}
                    </td>
                    <td>
                      {college?.reviews ? college.reviews : "Not Available"}
                    </td>
                    <td>
                      {college?.rankings ? college.rankings : "Not Available"}
                    </td>
                  </tr>
                ))
            : sort?.sort === "3"
            ? colleges
                .sort((col1, col2) =>
                  handleSortingLogic(col1?.fees, col2?.fees,"fees")
                )
                .filter((college) =>
                  college?.name
                    .toLowerCase()
                    .startsWith(sort.name?.toLowerCase())
                )
                .map((college) => (
                  <tr>
                    <th scope="row">
                      {college?.rank ? college.rank : "Not Available"}
                    </th>
                    <td>{college?.name ? college.name : "Not Available"}</td>
                    <td>{college?.fees ? college.fees : "Not Available"}</td>
                    <td>
                      {college?.placement ? college.placement : "Not Available"}
                    </td>
                    <td>
                      {college?.reviews ? college.reviews : "Not Available"}
                    </td>
                    <td>
                      {college?.rankings ? college.rankings : "Not Available"}
                    </td>
                  </tr>
                ))
            : sort?.sort === "4"
            ? colleges
                .sort((col1, col2) => col2?.rank - col1?.rank)
                .filter((college) =>
                  college?.name
                    .toLowerCase()
                    .startsWith(sort.name?.toLowerCase())
                )
                .map((college) => (
                  <tr>
                    <th scope="row">
                      {college?.rank ? college.rank : "Not Available"}
                    </th>
                    <td>{college?.name ? college.name : "Not Available"}</td>
                    <td>{college?.fees ? college.fees : "Not Available"}</td>
                    <td>
                      {college?.placement ? college.placement : "Not Available"}
                    </td>
                    <td>
                      {college?.reviews ? college.reviews : "Not Available"}
                    </td>
                    <td>
                      {college?.rankings ? college.rankings : "Not Available"}
                    </td>
                  </tr>
                ))
            : sort?.sort === "5"
            ? colleges
                .sort((col1, col2) =>
                  handleSortingLogic(col1?.reviews,col2?.reviews,"reviews")
                )
                .filter((college) =>
                  college?.name
                    .toLowerCase()
                    .startsWith(sort.name?.toLowerCase())
                )
                .map((college) => (
                  <tr>
                    <th scope="row">
                      {college?.rank ? college.rank : "Not Available"}
                    </th>
                    <td>{college?.name ? college.name : "Not Available"}</td>
                    <td>{college?.fees ? college.fees : "Not Available"}</td>
                    <td>
                      {college?.placement ? college.placement : "Not Available"}
                    </td>
                    <td>
                      {college?.reviews ? college.reviews : "Not Available"}
                    </td>
                    <td>
                      {college?.rankings ? college.rankings : "Not Available"}
                    </td>
                  </tr>
                ))
            : colleges
                .filter((college) =>
                  college?.name
                    .toLowerCase()
                    .startsWith(sort.name?.toLowerCase())
                )
                .map((college) => (
                  <tr>
                    <th scope="row">
                      {college?.rank ? college.rank : "Not Available"}
                    </th>
                    <td>{college?.name ? college.name : "Not Available"}</td>
                    <td>{college?.fees ? college.fees : "Not Available"}</td>
                    <td>
                      {college?.placement ? college.placement : "Not Available"}
                    </td>
                    <td>
                      {college?.reviews ? college.reviews : "Not Available"}
                    </td>
                    <td>
                      {college?.rankings ? college.rankings : "Not Available"}
                    </td>
                  </tr>
                ))}
        </tbody>
      </table>
    </>
  );
}
