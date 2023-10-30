import React from "react";
import { tableData } from "../Data";

const Table = () => {
    return (
        <div>
        <table>
                <tr>
                    <th>name</th>
                    <th>grade</th>
                    <th>lesson</th>
                </tr>
                {tableData.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.grade}</td>
                            <td>{val.lesson}</td>
                        </tr>
                    )
                })}
                

            </table>
            <table style={{width: 300, alignItems: "center" }}><tr><th>Average</th></tr>
            <tr>60</tr>
            </table> 
            </div>

    );
}

export default Table;