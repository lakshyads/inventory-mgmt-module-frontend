import React from 'react';
import CategoryList from './CategoryList';
import { Button, Segment, Header } from 'semantic-ui-react';
import { viewRoutes } from '../../../utils/pathUtil';

const CategoryDashboardPage = () => {
	return (
		<div>
			<Segment clearing>
				<Header as='h2' content="List of Categories" floated="left" />
				<Header floated="right">
					<Button as="a" href={viewRoutes.CATEGORY_CREATE} primary content="Add Category" icon="add" />
				</Header>
			</Segment>

			<CategoryList />
		</div>
	);
};

export default CategoryDashboardPage;