export class User {
  email: string;
  password: string;
  tokens: Object;
  
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}