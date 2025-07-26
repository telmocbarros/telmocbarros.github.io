const Input = (props) => {
  return (
    <>
        <label htmlFor="name">HTML</label><br />
        <input type="text" id="name" name="name" placeholder="Enter name here" />
    </>
  );
};

export default Input;
// This is a simple input component that accepts props and applies default styles.
// It can be used in forms or anywhere an input field is needed.