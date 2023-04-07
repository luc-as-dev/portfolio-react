import { FormEvent, KeyboardEvent, useEffect, useRef } from "react";
import "./TextInput.scss";

type Props = {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export default function TextInput({
  value,
  setValue,
  placeholder,
  className,
}: Props) {
  const inputRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (inputRef.current && inputRef.current.innerHTML !== value) {
      inputRef.current.innerHTML = value;
    }
  }, [value]);

  function onKeyDown(e: KeyboardEvent<HTMLSpanElement>) {
    if (e.key === "Enter") {
      if (inputRef.current) {
        inputRef.current.blur();
      }
    }
  }

  function onInput(e: FormEvent<HTMLSpanElement>) {
    if (e.currentTarget.innerHTML) {
      setValue(e.currentTarget.innerHTML);
    }
  }

  return (
    <span
      className={`text-input ${className || ""}`.trim()}
      ref={inputRef}
      contentEditable
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      onInput={onInput}
    ></span>
  );
}
