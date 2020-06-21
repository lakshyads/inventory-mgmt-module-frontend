import React, { useEffect, useState } from 'react';
import { Segment, Header, Button } from 'semantic-ui-react';
import { fetchCategory } from '../../../actions';
import ItemList from '../items/ItemList';
import { connect } from 'react-redux';

const CategoryDetail = props => {
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
    
    const renderDetail = () => {
        const { items } = props.category;
        return (
            <div>
                <Segment clearing>
                    <Header as='h2' content={props.category.name} subheader={props.category.description} floated="left" />
                    <Header floated="right">
                        <Button as="a" href={`/categories/${props.match.params.id}/items/new/form`} primary content="Add Item" icon="add" />
                    </Header>
                </Segment>

                <ItemList items={items} />
            </div>
        );
    };

    return renderDetail();
};

function mapStateToProps({ categories }) {
    return { category: categories.category };
};

export default connect(mapStateToProps, { fetchCategory })(CategoryDetail);