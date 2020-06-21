import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { connect } from 'react-redux';
import { fetchItems } from '../../../actions';
import { Segment, Header } from 'semantic-ui-react';
import ItemSearchForm from './ItemSearchForm';

const ItemDashboard = (props) => {
    const [isFetch, setIsFetch] = useState(false);
    useEffect(() => {
        if (!isFetch) {
            props.fetchItems();
            setIsFetch(true);
        }
    }, [props, isFetch]);

    return (
        <div>
            <Segment clearing>
                <Header as='h2' content="List of Items" floated="left" />
                <ItemSearchForm />
            </Segment>

            <ItemList items={props.items} />
        </div>
    );
};


const mapStateToProps = ({ items }) => {
    return { items: items.items };
};

export default connect(mapStateToProps, { fetchItems })(ItemDashboard);