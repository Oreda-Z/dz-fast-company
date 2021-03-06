import React from "react";
import PropTypes from "prop-types";
const SelectField = ({ label, value, onChange, defaultOption, options, error }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: optionsArray.find(selectedProf => selectedProf.value === target.value) });
    };
    const getInputClasses = () => {
        return "form-select" + (error ? " is-invalid" : "");
    };

    const optionsArray = !Array.isArray(options) && typeof (options) === "object"
        ? Object.keys(options).map(optionName => ({ name: options[optionName].name, value: options[optionName]._id }))
        : options;
    return (
        <div className={"mb-4"}>
            <label htmlFor="validationCustom04" className="form-label">
                {label}
            </label>
            <select
                className={getInputClasses()}
                id="validationCustom04"
                name={"profession"}
                value={value}
                onChange={handleChange}
            >
                <option disabled value="">
                    {defaultOption}
                </option>
                {
                    optionsArray && optionsArray.map(option => <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.name}
                    </option>)
                }
            </select>
            {error && <div className="invalid-feedback">
                {error}
            </div>}
        </div>
    );
};
SelectField.propTypes = {
    defaultOption: PropTypes.string,
    label: PropTypes.string,
    // value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    value: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};
export default SelectField;
