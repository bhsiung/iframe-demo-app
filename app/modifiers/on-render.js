import Modifier from 'ember-modifier';

export default class TrackClickModifier extends Modifier {
  didReceiveArguments() {
    const [onRender, job] = this.args.positional;
    onRender(this.element, job);
  }
}
