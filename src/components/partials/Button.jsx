const Button = ({ type, children, onclickFn = () => {} }) => {
  return (
    <button className={`btn btn-${type} ms-2 text-light`} onClick={e => onclickFn(e)}>{children}</button>
  );
};
export default Button;
