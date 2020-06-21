/** Endpoints for available apis */
const endpoints = {
    FETCH_USER: '/api/current_user',
    CATEGORY: '/api/categories',
    ITEM: '/api/items',
    SEARCH_ITEMS: '/api/items/search',
    AUTH_GOOGLE: '/api/auth/google',
    LOGOUT: '/api/logout',
};

const viewRoutes = {
    LANDING: '/',
    CATEGORY_DASHBOARD: '/categories',
    CATEGORY_CREATE: '/categories/new/form',
    CATEGORY_DETAIL: '/categories/:id',
    CATEGORY_EDIT: '/categories/edit/:id',
    ITEM_DASHBOARD: '/items',
    ITEM_CREATE: '/categories/:category_id/items/new/form',
};

export { endpoints, viewRoutes };