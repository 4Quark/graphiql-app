import { prettifyQuery } from '../components/queryEditor/QueryEditor.utils';
import { getIntrospectionQuery } from 'graphql';
import { buildClientSchema, printSchema } from 'graphql';

export class GraphiQLService {
  public static baseURL: string = 'https://rickandmortyapi.com/api/character';

  public static updateURL(url: string) {
    this.baseURL = url;
  }

  public static async fetchRequest(query: string) {
    return await fetch(this.baseURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });
  }

  public static async runQuery(query: string) {
    query = prettifyQuery(query);
    query = query.replace(/^#.*?$/gim, '').trim();
    const response = await this.fetchRequest(query);
    const json = await response.json();
    return json;
  }

  public static async schemaRequest() {
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
