import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FrontendProcessesProps {}

const StyledFrontendProcesses = styled.div`
  color: pink;
`;

export function FrontendProcesses(props: FrontendProcessesProps) {
  return (
    <StyledFrontendProcesses>
      <h1>Welcome to FrontendProcesses!</h1>
    </StyledFrontendProcesses>
  );
}

export default FrontendProcesses;
