import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    .login-subtitle {
        font-size: 18px;
    }
    .form-login {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .form-login > form {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        width: 450px;
        padding: 25px;
        /* width: 728px;
    height: 760px; */
        border-radius: 12px;
        background: #f4ede8;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    }

    .form-login > form > label {
        margin-top: 10px;
        color: #312e38;
        font-size: 18px;
    }

    .custom-input {
        outline: none;
        height: 44px;
        border: 2px solid #ddd;
        border-radius: 8px;
        padding-left: 15px;
    }

    .custom-input:focus {
        border: 3px solid #999591;
    }

    .custom-buttom {
        font-size: 20px;
        margin-top: 40px;
        outline: none;
        height: 44px;
        border: 2px solid #ff9000;
        background-color: #ff9000;
        color: white;
        border-radius: 8px;
        padding-left: 15px;
        transition: 0.3s;
    }

    .custom-buttom:hover {
        opacity: 0.8;
    }

    .custom-buttom:focus {
        outline: none;
    }

    .actions {
        padding-top: 30px;
        display: flex;
        flex-direction: column;
    }

    .actions > a {
        color: #000;
    }

    .actions > p > a {
        color: #000;
        transition: all 0.2s;
    }

    a:hover {
        color: #999591;
        text-decoration: none;
    }

    .actions > p > a:hover {
        color: #999591;
    }
    .actions p {
        color: #999591;
    }
`;
