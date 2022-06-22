interface ObjectFormatter<T> {
  // you can make dinamically type of your property in interface by passing generics or <T> and assign it to a property you want
  name: string;
  age: number;
  data: T;
}

export default ObjectFormatter;
