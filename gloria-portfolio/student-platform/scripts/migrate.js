const fs = require('fs')
const path = require('path')
const { Client } = require('pg')

async function main() {
  const databaseUrl = process.env.DATABASE_URL || 'postgres://student:studentpass@localhost:5432/student_platform'
  const client = new Client({ connectionString: databaseUrl })
  await client.connect()
  try {
    const dbDir = path.resolve(__dirname, '..', 'db')
    const files = fs.readdirSync(dbDir).filter(f => f.endsWith('.sql')).sort()
    for (const file of files) {
      const sqlPath = path.join(dbDir, file)
      console.log('Applying', file)
      const sql = fs.readFileSync(sqlPath, 'utf8')
      const statements = sql
        .split(';')
        .map(s => s.trim())
        .filter(Boolean)
      for (const stmt of statements) {
        console.log('Running:', stmt.substring(0, 80).replace(/\n/g, ' '), '...')
        await client.query(stmt)
      }
    }
    console.log('Migration completed')
  } catch (err) {
    console.error('Migration failed:', err)
    process.exitCode = 1
  } finally {
    await client.end()
  }
}

if (require.main === module) main()
