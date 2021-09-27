import { secondMethod, thirdMethod } from './externalMethods.js';

export class Test {
  constructor(props) {}

  firstMethod() {
    console.log('firstMethod');
  }

  secondMethod() {
    secondMethod();
  }

  thirdMethod = thirdMethod;
}
