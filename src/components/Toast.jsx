const Toast = ({ message }) => {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="alert alert-success shadow-lg">
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
