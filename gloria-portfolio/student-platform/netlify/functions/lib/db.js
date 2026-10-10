const { Pool } = require('pg')

const connectionString = process.env.DATABASE_URL
if (!connectionString) {
  console.warn('DATABASE_URL not set — DB calls will fail until provided')
}

const pool = new Pool({
  connectionString,
  // allow self-signed certs if needed in some hosting environments
  ssl: connectionString && { rejectUnauthorized: false },
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}
