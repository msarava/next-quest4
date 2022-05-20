import Layout from '../components/Layout';
import { getCampusesFromDb } from '../db';

function Campuses({ results, lastUpdate }) {
  // const generationDate = new Date();
  return (
    <Layout>
      <h2>La liste des campus :</h2>
      <div className='campusList'>
        {results.map((campus) => (
          <div className='campusItem' key={campus.id}>
            {campus.name}
          </div>
        ))}
      </div>
      <div className='lastUpdate'>Last update : {lastUpdate}</div>
    </Layout>
  );
}

export default Campuses;

export async function getStaticProps() {
  const results = await getCampusesFromDb();
  const generationDate = new Date();
  const lastUpdate = generationDate.toString();
  return {
    props: { results, lastUpdate },
  };
}
