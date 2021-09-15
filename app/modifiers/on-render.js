import Modifier from 'ember-modifier';

export default class TrackClickModifier extends Modifier {
  didReceiveArguments() {
    const [onRender] = this.args.positional;
    onRender(this.element);
  }
  didInstall() {
    const [onRender] = this.args.positional;
    this.element.addEventListener('load', () => {
      onRender(this.element);
    });
  }
}
