import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class IframeWrapperComponent extends Component {
  @action
  onRender(iframe) {
    iframe.contentWindow.postMessage(this.args.job);
  }
}
