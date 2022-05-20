import Layout from '../components/Layout';
import getRawBody from 'raw-body';
import { promisify } from 'util';

function showRequest({ bodyString, headers, query, lastUpdate }) {
  return (
    <Layout>
      <div>
        headers : <pre>{JSON.stringify(headers, null, 2)}</pre>
      </div>

      <div>
        query :
        <pre>
          {JSON.stringify(query) === '{}'
            ? 'No query sent'
            : JSON.stringify(query)}
        </pre>
      </div>
      <div>
        body : <pre>{bodyString}</pre>
      </div>
      <div className='lastUpdate'>Last update : {lastUpdate}</div>
    </Layout>
  );
}

export default showRequest;

export async function getServerSideProps(context) {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  const generationDate = new Date();
  const lastUpdate = generationDate.toString();
  const headers = context.req.headers;
  const query = context.query;
  let bodyString = '';

  if (context.req.method === 'GET') {
    bodyString = 'There is no body in this GET request';
  } else if (context.req.method === 'POST') {
    const body = await getRawBody(context.req);
    // console.log(context.req.method, body.toString('utf-8'));
    bodyString = body.toString('utf-8');
  }

  return {
    props: { bodyString, headers, query, lastUpdate },
  };
}
