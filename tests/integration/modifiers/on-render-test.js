import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Modifier | on-render', function (hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function (assert) {
    this.onRender = sinon.stub();
    this.data = { name: 'foo' };
    await render(hbs`<div {{on-render this.onRender this.data}}></div>`);

    assert.ok(this.onRender.called, 'onRender called initially');
    this.set('data', { name: 'bar' });
    assert.ok(this.onRender.calledTwice, 'onRender called on data change');
  });
});
