import { KeyboardEvent, useEffect, useRef, useState } from "react";
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
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.innerHTML = value;
      inputRef.current.focus();
    }
  }, [isEditing]);

  function onClick() {
    setIsEditing((s) => !s);
  }

  function onBlur() {
    if (inputRef.current) setValue(inputRef.current.innerHTML);
    setIsEditing(false);
  }

  function onKeyDown(e: KeyboardEvent<HTMLSpanElement>) {
    if (e.key === "Enter") {
      onBlur();
    }
  }

  if (isEditing) {
    return (
      <span
        className={`text-input editing ${className || ""}`.trim()}
        ref={inputRef}
        contentEditable
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      ></span>
    );
  } else if (!value) {
    return (
      <span
        className={`text-input empty ${className || ""}`.trim()}
        onClick={onClick}
      >
        {placeholder}
      </span>
    );
  }

  return (
    <span className={`text-input ${className || ""}`.trim()} onClick={onClick}>
      {value}
    </span>
  );
}
