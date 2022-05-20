import Layout from '../components/Layout';
import getRawBody from 'raw-body';
import { promisify } from 'util';

function showRequest({ bodyString, headers, query }) {
  return (
    <Layout>
      <div>
        headers : <pre>{JSON.stringify(headers)}</pre>
      </div>

      <div>
        query : <pre>{JSON.stringify(query)}</pre>
      </div>
      <div>
        body : <pre>{JSON.stringify(bodyString)}</pre>
      </div>
    </Layout>
  );
}

export default showRequest;

export async function getServerSideProps(context) {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  const headers = context.req.headers;
  const query = context.query;
  let bodyString = '';
  if (context.req.method === 'GET') {
    bodyString = 'There is no body in GET request';
  }

  if (context.req.method === 'POST') {
    const body = await getRawBody(context.req);
    // console.log(context.req.method, body.toString('utf-8'));
    bodyString = body.toString('utf-8');
  }

  return {
    props: { bodyString, headers, query },
  };
}
