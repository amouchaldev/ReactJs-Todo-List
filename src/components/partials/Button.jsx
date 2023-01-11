const Button = ({ type, children }) => {
  return (
    <button className={`btn btn-${type} ms-2 text-light`}>{children}</button>
  );
};
export default Button;
