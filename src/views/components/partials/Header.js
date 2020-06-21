import React from 'react';
import { connect } from 'react-redux';
import { Button, Menu } from 'semantic-ui-react';
import { endpoints, viewRoutes } from '../../../utils/pathUtil';

/** Header Component
 * @param {*} props 
 */
const HeaderComponent = (props) => {
    const renderContent = () => {
        switch (props.auth) {
            case null: return;
            case false:
                return <Menu.Item><Button as="a" primary href={endpoints.AUTH_GOOGLE} content="Login with Google"/></Menu.Item>
            default:
                return [
                    <Menu.Item key={1} name="Categories" href={viewRoutes.CATEGORY_DASHBOARD}></Menu.Item>,
                    <Menu.Item key={2} name="Items" href={viewRoutes.ITEM_DASHBOARD}></Menu.Item>,
                    <Menu.Item key={3}><Button as='a' primary href={endpoints.LOGOUT} content="Logout" /></Menu.Item>,
                ];
        };
    };

    return (
        <Menu secondary size="huge">
            {/* <Menu.Item href={props.auth ? viewRoutes.CATEGORY_DASHBOARD : viewRoutes.LANDING} name="Inventory Management For ABC" /> */}
            <Menu.Header href={props.auth ? viewRoutes.CATEGORY_DASHBOARD : viewRoutes.LANDING} name="Inventory Management For ABC" />
            <Menu.Menu position="right">
                {renderContent()}
            </Menu.Menu>
        </Menu>
    );
};

function mapStateToProps({ auth }) {
    return { auth }
};

export default connect(mapStateToProps)(HeaderComponent);