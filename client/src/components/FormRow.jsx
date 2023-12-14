const FormRow = ({type, name, labelText, defaultValue}) => {
    return (
        <div className="form-row">
            <label htmlFor={name} className="form-label">
                {labelText || name}
            </label>
            <input
                type={type}
                id={name}
                required
                defaultValue={defaultValue || ''}
                name={name}
                className="form-input" 
            />
        </div>
    )
}

export default FormRow