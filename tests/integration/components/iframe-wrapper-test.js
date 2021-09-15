import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, waitUntil } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import settled from '@ember/test-helpers/settled';

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

    assert.dom('#foo').hasAttribute('src', '/preview');

    // wait for:
    // 1. iframe loaded
    // 2. data injected
    await waitUntil(
      () =>
        document
          .getElementById('foo')
          .contentWindow.document.querySelector('[data-test-name="location"]')
          ?.textContent === 'san jose'
    );

    // has to manually query the dom becasue assert.dom does NOT support
    // selector within another window (iframe)
    const iframeDoc = document.getElementById('foo').contentWindow.document;
    assert.equal(
      iframeDoc.querySelector('[data-test-name="location"]').textContent,
      this.data.location
    );
    assert.equal(
      iframeDoc.querySelector('[data-test-name="title"]').textContent,
      this.data.title
    );
    assert.equal(
      iframeDoc.querySelector('[data-test-name="company"]').textContent,
      this.data.company
    );
    assert.equal(
      iframeDoc.querySelector('[data-test-name="jobDescription"]').textContent,
      this.data.jobDescription
    );
  });
});
