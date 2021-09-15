import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class PreviewController extends Controller {
  @tracked
  job;

  constructor() {
    super(...arguments);
    window.addEventListener('message', (event) => {
      this.job = event.data;
    });
  }
}
