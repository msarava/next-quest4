import Layout from '../components/Layout';
import { getCampusesFromDb } from '../db';

function Campuses({ results }) {
  return (
    <Layout>
      <h2>La liste des campus : </h2>
      <div>
        {results.map((campus) => (
          <div>{campus.name}</div>
        ))}
      </div>
    </Layout>
  );
}

export default Campuses;

export async function getServerSideProps() {
  const results = await getCampusesFromDb();
  return {
    props: { results },
  };
}
