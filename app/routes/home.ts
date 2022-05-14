import Route from '@ember/routing/route';

export default class Home extends Route.extend({}) {
  async model() {
    const response = await fetch('https://data.otainsight.com/public-data/frontend-hiring/guest-country-sample.json');
    const data = (await response.json())['guest_country'] as Array<Object>;

    const maxRooms = Math.max(...data.map((item: any) => item.value.nr_of_rooms));

    return data.map((item: any) => ({
      ...item,
      change: item.value.nr_of_rooms - item.reference_value.nr_of_rooms,
      ratio: 100 * item.value.nr_of_rooms / maxRooms,
    }));
  }
}
