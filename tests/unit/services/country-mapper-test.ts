import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | country-name-mapper', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:country-name-mapper');
    assert.ok(service);
  });
});

