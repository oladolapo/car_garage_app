// src/components/MechanicList.js
import React from "react";

const MechanicList = ({ mechanics, editMechanic, deleteMechanic }) => {
    return (
        <div className="w-75 mx-auto">
            <h1 className="text-center">Mechanic List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Expert Domain</th>
                        <th>Experience (Years)</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {mechanics.map((mechanic) => (
                        <tr key={mechanic.id}>
                            <td>{mechanic.id}</td>
                            <td>{mechanic.fullName}</td>
                            <td>{mechanic.expertDomain}</td>
                            <td>{mechanic.experience}</td>
                            <td>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => editMechanic(mechanic)}
                                >
                                    Edit
                                </button>
                                &nbsp;
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteMechanic(mechanic.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MechanicList;
