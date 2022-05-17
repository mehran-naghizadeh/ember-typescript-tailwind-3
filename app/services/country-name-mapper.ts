import Service from '@ember/service';
import { COUNTRY_CODE_MAPPING } from 'gold-ember-ts/vendor/country-mapping';

export default class CountryNameMapper extends Service {
  nameForCode(code: string): string {
    return (COUNTRY_CODE_MAPPING as any)[code] as string;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'country-name-mapper': CountryNameMapper;
  }
}
