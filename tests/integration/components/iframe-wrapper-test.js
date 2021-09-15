import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | iframe-wrapper', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.data = {
      title: 'title1',
      company: 'company1',
      location: 'san jose',
      jobDescription: 'test',
    };
    await render(hbs`
      <IframeWrapper
        id="foo"
        src="/preview"
        @data={{this.data}}
      />
    `);

    // TODO test data
    assert.dom('#foo').hasAttribute('src', '/preview');
  });
});
