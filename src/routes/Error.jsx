import error from "../assets/img/home/error.jpg";
import { ErrorStyle } from "../css/ErrorStyle";

const Error = () => {
  return (
    <ErrorStyle>
      <>
        <div className="erro">
          <img src={error} alt="Erro" />
        </div>
      </>
    </ErrorStyle>
  );
};
export default Error;
