// src/components/MechanicForm.js
import React, { useState, useEffect } from "react";

const MechanicForm = ({
    addMechanic,
    editMechanic,
    mechanicToEdit,
    setMechanicToEdit,
}) => {
    const [formData, setFormData] = useState({
        id: mechanicToEdit ? mechanicToEdit.id : "",
        fullName: mechanicToEdit ? mechanicToEdit.fullName : "",
        expertDomain: mechanicToEdit ? mechanicToEdit.expertDomain : "",
        experience: mechanicToEdit ? mechanicToEdit.experience : "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mechanicToEdit) {
            editMechanic(formData);
            setMechanicToEdit(null);
        } else {
            addMechanic(formData);
        }
        setFormData({
            id: "",
            fullName: "",
            expertDomain: "",
            experience: "",
        });
    };

    useEffect(() => {
        // Update form data when mechanicToEdit prop changes
        setFormData({
            id: mechanicToEdit ? mechanicToEdit.id : "",
            fullName: mechanicToEdit ? mechanicToEdit.fullName : "",
            expertDomain: mechanicToEdit ? mechanicToEdit.expertDomain : "",
            experience: mechanicToEdit ? mechanicToEdit.experience : "",
        });
    }, [mechanicToEdit]);

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
                    <label htmlFor="fullName" className="form-label">
                        Full Name:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="expertDomain" className="form-label">
                        Expert Domain:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="expertDomain"
                        name="expertDomain"
                        value={formData.expertDomain}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="row g-3 mt-3">
                <div className="col-md-4">
                    <label htmlFor="experience" className="form-label">
                        Experience (in years):
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="mt-3">
                <button type="submit" className="btn btn-primary">
                    {mechanicToEdit ? "Edit Mechanic" : "Add Mechanic"}
                </button>
            </div>
        </form>
    );
};

export default MechanicForm;
