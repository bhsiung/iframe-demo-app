import Controller from '@ember/controller';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @tracked
  job = {};

  @action
  onChange(e) {
    console.log('onchange');
    const name = e.target.name;
    this.job = {
      ...this.job,
      [name]: e.target.value,
    };
  }
}
