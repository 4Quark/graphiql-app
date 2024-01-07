import { getIntrospectionQuery } from 'graphql';

export class GraphiQLService {
  public static baseURL: string = 'no URL';

  public static updateURL(url: string) {
    this.baseURL = url;
  }

  private static async fetchRequest(
    query: string,
    variables: object | null,
    headers: HeadersInit = { 'Content-Type': 'application/json' }
  ) {
    if (!variables) {
      return await fetch(this.baseURL, {
        method: 'POST',
        headers,
        body: JSON.stringify({ query }),
      });
    } else {
      return await fetch(this.baseURL, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          query,
          variables,
        }),
      });
    }
  }

  public static async runQuery(query: string, variables: object | null, headers?: HeadersInit) {
    query = query.replace(/^#.*?$/gim, '').trim();
    const response = await this.fetchRequest(query, variables, headers);
    const json = await response.json();
    return json;
  }

  public static async runSchemaRequest() {
    return await fetch(this.baseURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: getIntrospectionQuery() }),
    }).then((response) => response.json());
  }
}
