import React, { useState, useEffect } from "react";
import { getFromLocalStorage, writeToLocalStorage } from "./localStorage.js";
import CarList from "./CarList.js";
import CarForm from "./CarForm.js";
import MechanicList from "./MechanicList.js";
import MechanicForm from "./MechanicForm.js";

const App = () => {
    const [cars, setCars] = useState(getFromLocalStorage("cars"));
    const [carToEdit, setCarToEdit] = useState(null);

    const [mechanics, setMechanics] = useState(
        getFromLocalStorage("mechanics")
    );
    const [mechanicToEdit, setMechanicToEdit] = useState(null);

    const [viewMode, setViewMode] = useState("cars");

    const addCar = (car) => {
        setCars([...cars, car]);
        writeToLocalStorage("cars", [...cars, car]);
    };

    const editCar = (editedCar) => {
        // console.log("Editing car with ID:", editedCar.id);
        setCarToEdit(editedCar);
        const updatedCars = cars.map((car) =>
            car.id === editedCar.id ? editedCar : car
        );
        setCars(updatedCars);
        writeToLocalStorage("cars", updatedCars);
    };

    const deleteCar = (carId) => {
        const updatedCars = cars.filter((car) => car.id !== carId);
        setCars(updatedCars);
        writeToLocalStorage("cars", updatedCars);
    };

    // ... similar logic for mechanics
    const addMechanic = (mechanic) => {
        setMechanics([...mechanics, mechanic]);
        writeToLocalStorage("mechanics", [...mechanics, mechanic]);
    };

    const editMechanic = (editedMechanic) => {
        setMechanicToEdit(editedMechanic);
        const updatedMechanics = mechanics.map((mechanic) =>
            mechanic.id === editedMechanic.id ? editedMechanic : mechanic
        );
        setMechanics(updatedMechanics);
        writeToLocalStorage("mechanics", updatedMechanics);
    };

    const deleteMechanic = (mechanicId) => {
        const updatedMechanics = mechanics.filter(
            (mechanic) => mechanic.id !== mechanicId
        );
        setMechanics(updatedMechanics);
        writeToLocalStorage("mechanics", updatedMechanics);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button
                        className={`btn btn-link ${
                            viewMode === "cars" && "active"
                        }`}
                        onClick={() => setViewMode("cars")}
                    >
                        View Cars
                    </button>
                    <button
                        className={`btn btn-link ${
                            viewMode === "mechanics" && "active"
                        }`}
                        onClick={() => setViewMode("mechanics")}
                    >
                        View Mechanics
                    </button>
                </div>
            </nav>

            {viewMode === "cars" && (
                <>
                    <CarList
                        cars={cars}
                        editCar={editCar}
                        deleteCar={deleteCar}
                    />
                    <CarForm
                        addCar={addCar}
                        editCar={editCar}
                        carToEdit={carToEdit}
                        setCarToEdit={setCarToEdit}
                    />
                </>
            )}

            {viewMode === "mechanics" && (
                <>
                    <MechanicList
                        mechanics={mechanics}
                        editMechanic={editMechanic}
                        deleteMechanic={deleteMechanic}
                    />
                    <MechanicForm
                        addMechanic={addMechanic}
                        editMechanic={editMechanic}
                        mechanicToEdit={mechanicToEdit}
                        setMechanicToEdit={setMechanicToEdit}
                    />
                </>
            )}
        </div>
    );
};

export default App;
