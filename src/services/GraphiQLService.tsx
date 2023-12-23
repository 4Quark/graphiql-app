import { getIntrospectionQuery } from 'graphql';
import { buildClientSchema, printSchema } from 'graphql';

export class GraphiQLService {
  public static baseURL: string = 'no URL';

  public static updateURL(url: string) {
    this.baseURL = url;
  }

  private static async fetchRequest(query: string, variables?: object) {
    if (!variables) {
      return await fetch(this.baseURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
    } else {
      return await fetch(this.baseURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query,
          variables,
        }),
      });
    }
  }

  public static async runQuery(query: string, variables?: object) {
    query = query.replace(/^#.*?$/gim, '').trim();
    const response = await this.fetchRequest(query, variables);
    const json = await response.json();
    return json;
  }

  private static async schemaRequest() {
    return await fetch(this.baseURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: getIntrospectionQuery() }),
    })
      .then((response) => response.json())
      .then((schema) => printSchema(buildClientSchema(schema.data)));
  }

  public static async runSchemaRequest() {
    const response = await this.schemaRequest();
    return response;
  }
}
