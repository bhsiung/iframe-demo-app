import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class PreviewController extends Controller {
  @tracked
  company;
  @tracked
  title;
  @tracked
  location;
  @tracked
  jobDescription;

  constructor() {
    super(...arguments);
    window.addEventListener('message', (event) => {
      this.company = event.data.company;
      this.title = event.data.title;
      this.location = event.data.location;
      this.jobDescription = event.data.jobDescription;
    });
  }
}
