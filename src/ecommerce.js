exports.handler = async (event, context) => {
  const path = event.path.replace(/\.netlify\/functions\/[^\/]+/, '')
  const segments = path.split('/').filter(e => e)

  switch (event.httpMethod) {
    case 'GET':
      if (segments.length === 0) {

        return require('./ecommerce/read-all').handler(event, context)
      }
      if (segments.length === 1) {
        event.id = segments[0]
        return require('./ecommerce/read').handler(event, context)
      } else {
        return {
          statusCode: 500,
          body: 'GET request with many data.'
        }
      }

    case 'OPTIONS':
      // CORS
      const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
      }
      return {
        statusCode: 200,
        headers,
        body: 'Preflight call'
      }
  }
  return {
    statusCode: 500,
    body: 'HTTP method unknown. Try GET/OPTIONS.'
  }
}