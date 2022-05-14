import Route from '@ember/routing/route';

export default class Home extends Route.extend({}) {
  async model() {
    const response = await fetch('https://data.otainsight.com/public-data/frontend-hiring/guest-country-sample.json');
    const data = await response.json();

    return data['guest_country'] as Array<Object>;
  }
}
