import dotenv from 'dotenv';
dotenv.config();
const config = {
    env: {
        apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
        database: process.env.DATABASE_URL
    }
}
export default config;