exports.handler = async (event, context) => {
  const path = event.path.replace(/\.netlify\/functions\/[^\/]+/, '');
  const segments = path.split('/').filter(e => e);

  if (segments.length === 0) {

    return require('./ecommerce/read-all').handler(event, context);
  } else if (segments.length === 1) {
    console.log(segments);
    event.id = segments[0];
    return require('./ecommerce/read').handler(event, context);
  } else {
    return {
      statusCode: 500,
      body:
        'too many segments in GET request, must be either /.netlify/functions/customers or /.netlify/functions/customers/123456'
    }
  }
}