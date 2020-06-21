import React, { useEffect, useState } from 'react';
import { Field, reduxForm, propTypes } from 'redux-form';
import TextInput from '../forms/TextInput';
import ToggleInput from '../forms/ToggleInput';
import { addItem, fetchCategories } from '../../../actions';
import { Button, Header, Select, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const ItemForm = (props) => {
    const [redirect, setRedirect] = useState(false);
    const [isFetch, setIsFetch] = useState(false);
    // const [selectedCategory, setSelectedCategory] = useState(props.match.params.mall_id);

    useEffect(() => {
        if (!isFetch) {
            const { category_id } = props.match.params;
            props.fetchCategories();
            props.initialize({ category: category_id, status: true });
            setIsFetch(true);
        }
    }, [props, isFetch]);

    const onSubmit = (item) => {
        // item.category = selectedCategory;
        props.addItem(item)
            .then(_ => setRedirect(true))
            .catch(_ => { });
    };
    // const handleChange = (e, { name, value }) => {
    //     e.preventDefault();
    //     switch (name) {
    //         case 'categoryOption':
    //             if (value !== 'default')
    //                 setSelectedCategory(value);
    //             break;
    //         default:
    //             break;
    //     };
    // };

    const renderItemForm = () => {
        const { category_id } = props.match.params;
        const { categories } = props;
        const options = categories?.map(category => { return { key: category._id, text: category.name, value: category._id } })
        options.push({ key: 'default', text: 'Select Category', value: 'default' })


        return (
            redirect ?
                <Redirect to={`/categories/${category_id}`} /> :
                <div>
                    <Header as="h2" content="Add New Item" />

                    <form onSubmit={props.handleSubmit(onSubmit)} className='ui form'>
                        <Field name="item" type="hidden" component={TextInput} />
                        <Field name="name" type="text" component={TextInput} label="Name" required />
                        <Field name="dimension" type="text" component={TextInput} label="Dimension" />
                        <Field name="brand" type="text" component={TextInput} label="Brand" />
                        <Field name="price" type="text" component={TextInput} label="Price" />
                        <Field name="quantity" type="text" component={TextInput} label="Quantity" />
                        <div>
                            <Label horizontal>Category</Label>
                            <Select compact options={options}
                                name='categoryOption' value={category_id}
                                disabled
                                // onChange={handleChange}
                            />
                        </div>
                        {/* <Field name="category" type="text" component={TextInput} label="Category" /> */}
                        <Field name="isActive" type="checkbox" component={ToggleInput} label="Active" />

                        <Button primary type="submit" disabled={props.pristine} content="Submit" />
                    </form>
                </div>
        );
    };

    return renderItemForm();
}

ItemForm.propTypes = {
    ...propTypes
};

const validate = values => {
    const errors = {};
    if (!values.name) errors.name = 'Required';
    return errors;
};

function mapStateToProps({ items, categories }) {
    return { items: items.items, categories: categories.categories };
};

let ItemFormView = reduxForm({
    validate,
    form: 'itemForm',
    destroyOnUnmount: false
})(ItemForm);

export default connect(mapStateToProps, { addItem, fetchCategories })(ItemFormView);