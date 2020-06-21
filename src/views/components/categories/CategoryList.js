import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchCategories, deleteCategory } from '../../../actions';
import { Card, Button, Loader } from 'semantic-ui-react';

const CategoryList = props => {
    const [isFetch, setIsFetch] = useState(false);
    useEffect(() => {
        if (!isFetch) {
            props.fetchCategories();
            setIsFetch(true);
        }
    }, [props, isFetch]);
    // <Loader active inline='centered' />
    const renderCategories = () => {
        const { categories } = props;
        return (
            <Card.Group itemsPerRow={3}>
                {!categories.length ? '' : categories.map(category => {
                    return (
                        <Card key={category._id} link>
                            <Card.Content href={`/categories/${category._id}`}>
                                <Card.Header>{category.name}</Card.Header>
                                <Card.Meta>{new Date(category.createdAt).toDateString() || 'no'}</Card.Meta>
                                <Card.Description>{category.description}</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='green' content="Edit" href={`/categories/edit/${category._id}`} />
                                    <Button basic color='red' content="Delete" onClick={(e) => props.deleteCategory(category._id)} />
                                </div>
                            </Card.Content>
                        </Card>
                    )
                })}
            </Card.Group>
        )
    }

    const renderList = () => {
        return (
            <div>
                {renderCategories()}
            </div>
        );
    };

    return renderList();
}

function mapStateToProps({ categories }) {
    return { categories: categories.categories };
}

export default connect(mapStateToProps, { fetchCategories, deleteCategory })(CategoryList);