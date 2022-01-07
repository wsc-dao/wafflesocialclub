import styled from "styled-components";

const StyledSection = styled.section`
  padding-block: 6rem;

  h2 {
    max-width: 1500px;
    margin: auto;
    text-align: center;
    margin-block-end: 3rem;
  }

  .content {
    max-width: 1500px;
    margin: auto;


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
                          contentStyle,
                          ...props
                        }: { title: string; children?: JSX.Element[] | JSX.Element; id?: string; style?: any; contentStyle?: any }) =>
  <StyledSection {...props}>
    <h2>{title}</h2>
    <div className="content" style={contentStyle || undefined}>
      {children}
    </div>
  </StyledSection>
