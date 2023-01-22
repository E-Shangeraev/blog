import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FrontendFeaturesProps {}

const StyledFrontendFeatures = styled.div`
  color: pink;
`;

export function FrontendFeatures(props: FrontendFeaturesProps) {
  return (
    <StyledFrontendFeatures>
      <h1>Welcome to FrontendFeatures!</h1>
    </StyledFrontendFeatures>
  );
}

export default FrontendFeatures;
