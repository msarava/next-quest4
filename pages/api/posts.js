import { sql_query } from '../../lib/db2';
export default async function handler(_, res) {
  try {
    const results = await sql_query('SELECT * FROM campus');

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: 'une erreur' });
  }
}
