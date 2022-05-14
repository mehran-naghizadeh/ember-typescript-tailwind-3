import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

interface GuestCountryCardArgs {
  data: Array<Object>;
}

export default class GuestCountryCard extends Component<GuestCountryCardArgs> {
  @tracked perPage = 5;
  @tracked page = 1;

  get sortedItems() {
    return this.args.data;
  }

  get paginatedItems() {
    const startIndex = (this.page - 1) * this.perPage;
    const endIndex = startIndex + this.perPage;

    return this.sortedItems.slice(startIndex, endIndex);
  }
}
