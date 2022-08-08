// Internal Dependencies
import { Spinner as SpinnerItem } from "./spinner.styled";

export default () => {
  return (
    <div>
      <SpinnerItem viewBox="0 0 50 50">
        <circle
          className={"path"}
          cx="25"
          cy="25"
          r="20"
          strokeWidth={5}
          fill="none"
        ></circle>
      </SpinnerItem>
    </div>
  );
};
