const port = process.env.REACT_APP_API_PORT || 1337;
const host = process.env.REACT_APP_API_HOST || 'localhost';

export const fetchApiRoot = () => fetch(`http://${host}:${port}/api`);
