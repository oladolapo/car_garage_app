import React, { useState, useEffect } from "react";

const CarForm = ({ addCar, editCar, carToEdit, setCarToEdit }) => {
    const [formData, setFormData] = useState({
        id: carToEdit ? carToEdit.id : "",
        make: carToEdit ? carToEdit.make : "",
        model: carToEdit ? carToEdit.model : "",
        colour: carToEdit ? carToEdit.colour : "",
        year: carToEdit ? carToEdit.year : "",
        plateNumber: carToEdit ? carToEdit.plateNumber : "",
        fault: carToEdit ? carToEdit.fault : "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (carToEdit) {
            editCar(formData);
            setCarToEdit(null);
        } else {
            addCar(formData);
        }
        setFormData({
            id: "",
            make: "",
            model: "",
            colour: "",
            year: "",
            plateNumber: "",
            fault: "",
        });
    };

    useEffect(() => {
        // Update form data when carToEdit prop changes
        setFormData({
            id: carToEdit ? carToEdit.id : "",
            make: carToEdit ? carToEdit.make : "",
            model: carToEdit ? carToEdit.model : "",
            colour: carToEdit ? carToEdit.colour : "",
            year: carToEdit ? carToEdit.year : "",
            plateNumber: carToEdit ? carToEdit.plateNumber : "",
            fault: carToEdit ? carToEdit.fault : "",
        });
    }, [carToEdit]);

    return (
        <form onSubmit={handleSubmit} className="mt-4 w-25 mx-auto">
            <div className="row g-3">
                <div className="col-md-4">
                    <label htmlFor="id" className="form-label">
                        ID:
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="id"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="make" className="form-label">
                        Make:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="make"
                        name="make"
                        value={formData.make}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="model" className="form-label">
                        Model:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="model"
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="row g-3 mt-3">
                <div className="col-md-4">
                    <label htmlFor="colour" className="form-label">
                        Colour:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="colour"
                        name="colour"
                        value={formData.colour}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="year" className="form-label">
                        Year:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="plateNumber" className="form-label">
                        Plate Number:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="plateNumber"
                        name="plateNumber"
                        value={formData.plateNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="row g-3 mt-3">
                <div className="col-md-4">
                    <label htmlFor="fault" className="form-label">
                        Fault:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="fault"
                        name="fault"
                        value={formData.fault}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="mt-3">
                <button type="submit" className="btn btn-primary">
                    {carToEdit ? "Edit Car" : "Add Car"}
                </button>
            </div>
        </form>
    );
};

export default CarForm;
