import React, { useState } from 'react';
import { Input, Button, Select } from 'semantic-ui-react';
import { searchItems } from '../../../actions';
import { connect } from 'react-redux';

const ItemSearchForm = props => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchOption, setSearchOption] = useState('name');

    // Reset search bar
    // const resetSearchBar = () => {
    //     setSearchQuery('');
    //     setSearchOption('name');
    // }

    const handleChange = (e, { name, value }) => {
        e.preventDefault();
        switch (name) {
            case 'searchOption':
                setSearchOption(value);
                break;
            case 'searchQuery':
                setSearchQuery(value);
                break;
            default:
                break;
        };
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        props.searchItems({ query: searchQuery, searchBy: searchOption });
        // resetSearchBar();
    };

    const renderForm = () => {
        const options = [
            { key: 'name', text: 'By Name', value: 'name' },
            { key: 'category', text: 'By Category', value: 'category' },
            { key: 'brand', text: 'By Brand', value: 'brand' },
            { key: 'isActive', text: 'By Availability', value: 'isActive' },
        ];
        return (
            <div>
                <Input type='text' placeholder='Search...' action name='searchQuery' value={searchQuery} onChange={handleChange}>
                    <input />
                    <Select compact options={options} name='searchOption' value={searchOption} onChange={handleChange} />
                    <Button type='submit' onClick={handleSearchSubmit}>Search</Button>
                </Input>
            </div>
        );
    };

    return renderForm();
};

function mapStateToProps({ items }) {
    return { items: items };
};

export default connect(mapStateToProps, { searchItems })(ItemSearchForm);