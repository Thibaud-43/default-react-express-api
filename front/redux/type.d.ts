type State = {
  main: NameState;
};

type NameState = {
  name: string;
};

type NameAction = {
  type: string;
  name: IName;
};

type DispatchType = (args: NameAction) => NameAction;
