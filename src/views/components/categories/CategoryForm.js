import React, { useState, useEffect } from 'react';
import { Field, reduxForm, propTypes } from 'redux-form';
import TextInput from '../forms/TextInput';
import { connect } from 'react-redux';
import { addCategory, fetchCategory, updateCategory } from '../../../actions';
import { Button, Header } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

const CategoryForm = props => {
    const [redirect, setRedirect] = useState(false);
    const [isFetch, setIsFetch] = useState(false);
    useEffect(() => {
        if (!isFetch) {
            const { id } = props.match.params;
            if (id) {
                props.fetchCategory(id);
            }
            setIsFetch(true);
        }
    }, [props, isFetch]);

    const onSubmit = (category) => {
        if (!props.category._id) {
            props.addCategory(category)
                .then(_ => setRedirect(true))
                .catch(_ => { });
        } else {
            props.updateCategory(category)
                .then(_ => setRedirect(true))
                .catch(_ => { });
        }
    };
    const [isInitialized, setInitialized] = useState(false);
    if (props.category._id && !isInitialized) {
        props.initialize(props.category);
        setInitialized(true);
    }
    const renderForm = () => {
        return (
            redirect ?
                <Redirect to="/categories" /> :
                <div>
                    <Header as="h2" content={props.match.params.id ? "Edit Category" : "Add New Category"} />
                    <form onSubmit={props.handleSubmit(onSubmit)} className='ui form'>
                        <Field name="name" type="text" component={TextInput} label="Name" required />
                        <Field name="description" type="text" component={TextInput} label="Description" required />

                        <Button primary type="submit" disabled={props.pristine} content="Submit" />
                        <Button as="a" href="/categories" content="Cancel" />
                    </form>
                </div>
        );
    };

    return renderForm();
};

CategoryForm.propTypes = {
    ...propTypes
};

const validate = values => {
    const errors = {};
    if (!values.name) errors.name = 'Required';
    if (!values.description) errors.description = 'Required';
    return errors;
};

function mapStateToProps({ categories }) {
    return { category: categories.category };
};

let CategoryFormView = reduxForm({
    validate,
    form: 'categoryForm',
    destroyOnUnmount: false
})(CategoryForm);

export default connect(mapStateToProps, { addCategory, fetchCategory, updateCategory })(CategoryFormView);