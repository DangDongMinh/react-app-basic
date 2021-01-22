import React, { useState } from "react";

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit } = props;

  const [value, setValue] = useState("");

  function handleValueChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!onSubmit) return;

    const formValue = {
      title: value,
    };
    onSubmit(formValue);
    setValue("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleValueChange} />
      </form>
    </div>
  );
}

export default TodoForm;
