import dotenv from 'dotenv'

dotenv.config()

const definitions = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.SERVER_PORT,
  DB: {
    HOST: process.env.DB_HOST,
    USER: process.env.MYSQL_USER,
    PASSWORD: process.env.MYSQL_PASSWORD,
    DATABASE: process.env.MYSQL_DATABASE,
    CONNECTION_LIMIT: Number(process.env.DB_CONNECTION_LIMIT),
  },
  SECRET: process.env.SECRET,
  PASSWORD_SALT_ROUNDS: process.env.PASSWORD_SALT_ROUNDS,
  AUDIENCE: process.env.AUDIENCE,
  ISSUER: process.env.ISSUER,
}

export default definitions
