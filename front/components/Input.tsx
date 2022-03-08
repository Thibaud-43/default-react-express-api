import { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { setInfo } from "../redux/actions/main";

interface Props extends PropsFromRedux {
  name: string;
  setInfo: (name: string | any) => void;
}
// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}

const Input: React.FC<Props> = (props) => {
  const { name, setInfo } = props;
  const [newName, setName] = useState("");
  return (
    <div>
      <p>Enter a Name {name}:</p>
      <input
        type="text"
        value={newName}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => setInfo(newName)}>Submit</button>
    </div>
  );
};
const mapStateToProps = (state: State) => {
  return { name: state.main.name };
};

const mapDispatchToProps = {
  setInfo,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Input);
