import { Pool } from 'pg'

// Create a connection pool
// Neon requires SSL connections, so we always enable it
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required for Neon's managed SSL certificates
  },
})

// Test the connection
pool.on('connect', () => {
  console.log('Database connected successfully')
})

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

export default pool

