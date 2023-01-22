import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FrontendEntitiesProps {}

const StyledFrontendEntities = styled.div`
  color: pink;
`;

export function FrontendEntities(props: FrontendEntitiesProps) {
  return (
    <StyledFrontendEntities>
      <h1>Welcome to FrontendEntities!</h1>
    </StyledFrontendEntities>
  );
}

export default FrontendEntities;
