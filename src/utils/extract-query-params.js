//?search=Lais&page=2
export function extractQueryParams(query) {
  return query
    .substr(1)
    .split("&")
    .reduce((queryParams, param) => {
      const [key, value] = param.split("="); // ['page', '2']

      queryParams[key] = value; // { search: 'Lais', page: '2' }

      return queryParams;
    }, {}); // reduce with an empty object {}, to create a new object
}
