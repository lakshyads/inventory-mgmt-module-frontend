import React, { } from 'react';
import { Field, reduxForm, propTypes } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button, Header, Select, Label } from 'semantic-ui-react';
import TextInput from '../forms/TextInput';
import ToggleInput from '../forms/ToggleInput';
import ItemForm from '../items/ItemForm';

/** FormComponent 
 * @param {*} props onsubmit, fields: { name, type, label, required = false, options = null, value = null }[]
 */
const FormComponent = (props) => {

    const renderField = (field) => {
        const { name, type, label, required = false, options = null, value = null } = field;
        switch (type) {
            case 'hidden':
            case 'text':
                return <Field name={name} type={type} component={TextInput} label={label} required={required} />
            case 'checkbox':
                return <Field name={name} type={type} component={ToggleInput} label={label} />
            case 'select':
                return (
                    <div>
                        <Label horizontal>Category</Label>
                        <Select compact options={options ?? [{ key: null, text: 'No options available', value: null }]}
                            name='categoryOption' value={value ?? null}
                            disabled
                        // onChange={handleChange}
                        />
                    </div>
                );
            default:
                break;
        }
    }

    return (
        <form onSubmit={props.handleSubmit(props.onSubmit)} className='ui form'>
            {props.fields && props.fields.forEach(field => renderField())}
            <Button primary type="submit" disabled={props.pristine} content="Submit" />
        </form>
    )
}

FormComponent.propTypes = {
    ...propTypes
};

const validate = values => {
    const errors = {};
    if (!values.name) errors.name = 'Required';
    return errors;
};

const mapStateToProps = ({ items, categories }) => {
    return { items: items.items, categories: categories.categories };
};
