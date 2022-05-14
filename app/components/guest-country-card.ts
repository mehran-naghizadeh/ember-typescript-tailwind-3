import Component from '@glimmer/component';

interface GuestCountryCardArgs {
  data: Array<Object>;
}

export default class GuestCountryCard extends Component<GuestCountryCardArgs> {
  get sortedItems() {
    return this.args.data.sort((a: any, b: any) => {
      const aRooms = a.value.nr_of_rooms;
      const bRooms = b.value.nr_of_rooms;

      if (aRooms > bRooms) return -1;
      if (aRooms < bRooms) return 1;
      return 0;
    });
  }
}
