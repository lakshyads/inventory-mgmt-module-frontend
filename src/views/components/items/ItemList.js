import React from 'react';
import { Card, Label, Loader, Icon } from 'semantic-ui-react';

const ItemList = props => {

    const renderAssets = () => {
        const { items } = props;
        {/* <Loader active inline='centered' /> */ }
        return (
            <Card.Group itemsPerRow={5}>
                {(!(items || []).length) ? '' : items.reverse().map(item => {
                    return (
                        <Card key={item._id} color={item.isActive ? 'green' : 'red'}>
                            <Card.Content>
                                <Label color={item.isActive ? 'green' : 'red'} attached="top left">
                                    {item.isActive ? 'Available' : 'Unavailable'}
                                </Label>
                                <Label color={item.isActive ? 'blue' : 'grey'} attached="top right">
                                    <Icon name="rupee sign" />{`${item.price ?? '00.0'}`}
                                </Label>
                            </Card.Content>
                            <Card.Content>
                                <Card.Header>{item.name}</Card.Header>
                                <Card.Meta>{item.brand}</Card.Meta>
                                <Card.Description>
                                    <Icon name="time" />
                                    {`${new Date(item.createdAt).toDateString()}` || 'Created Time not available'}
                                </Card.Description>
                                <Card.Description>
                                    <Icon name="weight" />
                                    {item.dimension || "No Dimension Yet"}
                                </Card.Description>
                                <Card.Description>
                                    <Icon name="tm" />{item.brand || "Brand not available"}
                                </Card.Description>
                                <Card.Description>
                                    <Icon name="shopping cart" />{item.quantity || "Quantity not available"}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Icon name="building" />
                                {item?.category?.name ?? "Category not available"}
                            </Card.Content>
                        </Card>
                    )
                })}
            </Card.Group>
        );
    };

    return (
        <div>
            {renderAssets()}
        </div>
    );

};

export default ItemList;