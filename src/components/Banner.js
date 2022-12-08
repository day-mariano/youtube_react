import styled from "styled-components";

const StyledBanner = styled.div`
  .banner {
    width: 100%;
    height: 100px;
    margin-top: 56px;
  }
`

export default function Banner() {
  return (
    <StyledBanner>
    <img className="banner" src="Banner.png" />
    </StyledBanner>
  );
}