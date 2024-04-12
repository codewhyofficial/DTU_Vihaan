import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <>
      <div className="m-2">
        <p className="text-4xl m-4">Student List </p>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="m-8 border border-slate-400 px-4">ID</th>
              <th className="m-8 border border-slate-400 px-4">First Name</th>
              <th className="m-8 border border-slate-400 px-4">Last Name</th>
              <th className="m-8 border border-slate-400 px-4">Age</th>
              <th className="m-8 border border-slate-400 px-4">Email</th>
              <th className="m-8 border border-slate-400 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student, index) => {
              return (
                <tr key={index}>
                  <td className="border border-slate-800 px-4 py-2">{student.student_id}</td>
                  <td className="border border-slate-800 px-4 py-2">{student.first_name}</td>
                  <td className="border border-slate-800 px-4 py-2">{student.last_name}</td>
                  <td className="border border-slate-800 px-4 py-2">{student.age}</td>
                  <td className="border border-slate-800 px-4 py-2">{student.email}</td>
                  <td className="border border-slate-800 px-4 py-2">
                    <button className="border border-cyan-600 m-2 rounded-xl px-4 py-1 hover:bg-cyan-800 hover:text-white">Edit</button>
                    <button className="border border-cyan-600 m-2 rounded-xl px-4 py-1 hover:bg-cyan-800 hover:text-white">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
