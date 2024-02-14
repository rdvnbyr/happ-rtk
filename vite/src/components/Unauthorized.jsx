import {Link} from 'react-router-dom';
import styled from 'styled-components';

export function Unauthorized() {
  return (
    <StyledMissingRoutePage className="container text-center missing-page">
      <h1 className="missing-page-first-title">Unauthorized!</h1>
      <Link to="/" className="btn btn-primary btn-lg m-4">
        Go To Home
      </Link>
    </StyledMissingRoutePage>
  );
}

const StyledMissingRoutePage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .missing-page-first-title {
    margin-bottom: 3rem;
    font-size: 10rem;
    font-weight: 900;
    color: #f8f9fa;
    text-shadow: 0 0 10px #000;
    &::first-letter {
      font-size: 14rem;
    }
  }
`;
