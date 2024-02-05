import React from "react";

const CarList = ({ cars, editCar, deleteCar }) => {
    return (
        <div className="w-75 mx-auto">
            <h1 className="text-center">Car List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Color</th>
                        <th>Year</th>
                        <th>Plate Number</th>
                        <th>Fault</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car) => (
                        <tr key={car.id}>
                            <td>{car.id}</td>
                            <td>{car.make}</td>
                            <td>{car.model}</td>
                            <td>{car.colour}</td>
                            <td>{car.year}</td>
                            <td>{car.plateNumber}</td>
                            <td>{car.fault}</td>
                            <td>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => editCar(car)}
                                >
                                    Edit
                                </button>
                                &nbsp;
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteCar(car.id)}
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

export default CarList;
