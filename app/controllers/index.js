import Controller from '@ember/controller';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @tracked
  job = {
    title: 'title1',
    company: 'company1',
    location: 'san jose',
    jobDescription: 'test',
  };

  @action
  onChange(e) {
    const name = e.target.name;
    this.job = {
      ...this.job,
      [name]: e.target.value,
    };
  }
}
