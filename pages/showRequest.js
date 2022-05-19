import { string } from 'prop-types';
import Layout from '../components/Layout';
import getRawBody from 'raw-body';

function showRequest({ bodyString, headers, query }) {
  return (
    <Layout>
      <ul>
        <li>
          headers : <pre>{JSON.stringify(headers)}</pre>
        </li>
        <li>
          query : <pre>{JSON.stringify(query)}</pre>
        </li>
        <li>
          body : <pre>{JSON.stringify(bodyString)}</pre>
        </li>
      </ul>
    </Layout>
  );
}

export default showRequest;

export async function getServerSideProps(context) {
  const body = await getRawBody(context.req);
  console.log(context.req.method, body.toString('utf-8'));

  const headers = context.req.headers;
  console.log(context.req.headers);

  const query = context.query;
  console.log(context.query);

  const bodyString = body.toString('utf-8');
  return {
    props: { bodyString, headers, query },
  };
}