export default() => ({
    environment: process.env.NODE_ENV || 'development',
    database:{
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_POST, 10) || 5432,
    },
});