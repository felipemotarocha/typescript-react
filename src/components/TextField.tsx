import { useRef, FunctionComponent } from "react";

interface TextFieldProps {
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const TextField: FunctionComponent<TextFieldProps> = ({ onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={onChange} />
    </div>
  );
};

export default TextField;
