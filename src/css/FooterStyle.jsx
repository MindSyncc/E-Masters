import styled from "styled-components";

export const FooterStyle = styled.section`
  background-color: rgb(32, 32, 32);

  .rede {
    margin-top: 12px;
    font-size: 1.5rem;
  }

  /*.container {
  width: 80%;
  margin: -260px 700px;
  }*/

  .footer-contact {
    max-width: 400px;
  }

  .footer-contact h3 {
    margin-bottom: 10px;
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    background-color: #ff6600;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #ff8533;
  }

  #fundodiv {
    font-family: "Roboto", sans-serif;
    padding: 5% 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  ul {
    margin-top: 20px;
  }

  .footer-col {
    flex: 1 1 200px; /* Base flex grow e shrink para responsividade */
    margin-top: -30px; /* Reduz a margem superior para mover o footer-col mais para cima */
    padding: 30px;
    color: white;
    font-size: 1.5rem;
  }

  .footer-col ul {
    list-style: none;
  }

  .footer-col h4 {
    font-size: 2rem;
    color: #ffffff;
    text-transform: capitalize;
    margin-bottom: 15px;
    font-weight: 500;
    position: relative;
  }

  .footer-col h4::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: #220404;
    height: 2px;
    box-sizing: border-box;
    width: 50px;
  }

  .footer-col ul li:not(:last-child) {
    margin-bottom: 10px;
  }

  .footer-col ul li a {
    font-size: 1.8rem;
    text-transform: capitalize;
    color: #ffffff;
    text-decoration: none;
    font-weight: 300;
    color: #bbbbbb;
    display: block;
    transition: all 0.3s ease;
    font-weight: 200;
  }

  .footer-col ul li a:hover {
    color: #ffffff;
    padding-left: 8px;
  }

  .footer-col .social-links a {
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: #ffffff;
    transition: all 0.5s ease;
  }

  .footer-col .social-links a:hover {
    color: #24262b;
    background-color: #ffffff;
  }

  .direitos {
    color: #ffffff;
    text-align: center;
    margin-top: 40px;
    width: 100%;
  }

  .direitos p {
    font-size: 1.8rem;
  }

  .fab {
    font-size: 15px;
    margin-top: 12px;
  }

  /* Media Queries para responsividade */
  @media (max-width: 768px) {
    #fundodiv {
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }

    .footer-col {
      margin-top: 0;
      padding: 0;
      text-align: center;
    }

    .footer-col ul li a {
      font-size: 1.6rem;
    }

    .direitos{
      margin-top: 2px;
    }

    .footer-col h4 {
      font-size: 1.8rem;
    }
    .direitos p {
      font-size: 1.6rem;
    }
  }
`;
