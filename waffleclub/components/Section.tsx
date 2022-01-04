import styled from "styled-components";

const StyledSection = styled.section`
  max-width: 1500px;
  margin: auto;
  padding-block: 6rem;

  .content {
    max-width: 1200px;
    margin: auto;

    h2 {
      text-align: center;
      margin-block-end: 3rem;
    }

    p {
      max-width: 650px;
      margin: auto;
      margin-block-end: 1rem;
    }
  }
`;

export const Section = ({
                          title,
                          children,
                          ...props
                        }: { title: string; children: JSX.Element[] | JSX.Element; style?: any }) =>
  <StyledSection {...props}>
    <div className="content">
      <h2>{title}</h2>
      {children}
    </div>
  </StyledSection>
