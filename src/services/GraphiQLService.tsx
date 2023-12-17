import { prettifyQuery } from '../components/queryEditor/QueryEditor.utils';

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
}
