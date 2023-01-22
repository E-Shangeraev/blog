import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FrontendWidgetsProps {}

const StyledFrontendWidgets = styled.div`
  color: pink;
`;

export function FrontendWidgets(props: FrontendWidgetsProps) {
  return (
    <StyledFrontendWidgets>
      <h1>Welcome to FrontendWidgets!</h1>
    </StyledFrontendWidgets>
  );
}

export default FrontendWidgets;
