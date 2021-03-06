import styled from 'styled-components';

export const Container = styled.div`
    /* width: 100vw;
    height: 100vh; */
`;
export const Header = styled.header`
    padding: 10px 0;
    background: #28262e;
`;

export const HeaderContent = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    > img {
        height: 80px;
    }

    button {
        margin-left: auto;
        background: transparent;
        border: 0;

        svg {
            color: #999591;
            width: 20px;
            height: 20px;
            transition: color 0.2s;
        }

        svg:hover {
            color: #ff9000;
        }
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 80px;

    img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    div {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;

        span {
            color: #f4ede8;
        }

        a {
            text-decoration: none;
            color: #ff9000;
            transition: opacity 0.2s;

            &:hover {
                opacity: 0.8;
            }
        }
    }
`;
