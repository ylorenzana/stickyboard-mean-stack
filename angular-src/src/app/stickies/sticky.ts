export class Sticky {
  _id: any;
  text: string = '';
  isCompleted: boolean = false;
  _createdBy: any

  constructor(values: Object = {}){
    Object.assign(this, values)
  }
}
