import styled from "styled-components";
import {OffWhite, Red, YellowCream} from "../consts";

const StyledSection = styled.section<{ flex?: boolean }>`
  padding-block: 9rem;
  position: relative;

  &:nth-of-type(even) {
    background: ${YellowCream};
    color: ${Red};
  }

  h2 {
    max-width: 1500px;
    margin: auto;
    text-align: center;
    margin-block-end: 3rem;
  }

  .content {
    padding-left: 2rem;
    padding-right: 2rem;
    max-width: 1500px;
    margin: auto;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    ${p => p.flex ? 'display:flex; flex-direction: column;' : ''};
    @media (min-width: 778px) {
      ${p => p.flex ? 'flex-direction: row;' : ''};
    }

    p {
      max-width: 650px;
      margin: auto;
      margin-block-end: 1rem;
    }

    > span {
      max-width: 90%;
      width: 100% !important;
      filter: drop-shadow(0 0 20px ${OffWhite});
      border-radius: 20px;

      @media (min-width: 778px) {
        max-width: 45%;
      }
    }
  }

  &.private-club {

    .content {
      justify-content: space-evenly;

      p {
        max-width: 650px;
        margin: auto;
        margin-block-end: 1rem;
      }

      > span {
        @media (min-width: 800px) {
          background: green;
          max-width: 40%;
        }
        @media (min-width: 1100px) {
          max-width: 25%;
          background: red;
        }
      }
    }
  }

  &.faq {
    .content {
      max-width: 100%;
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      gap: 2rem;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      @media (min-width: 778px) {
        display: grid;
      }
    }
  }

  &.terms {
    p, ol {
      max-width: 850px;
      margin: auto;
    }

    li {
      margin-top: 2rem;
    }
  }
`;

export const Section = ({
                          title,
                          children,
                          contentStyle,
                          flex,
                          className,
                          ...props
                        }: { flex?: boolean; title?: string; children?: JSX.Element[] | JSX.Element; id?: string; style?: any; contentStyle?: any; className?: string }) =>
  <StyledSection flex={flex} {...props} className={className}>
    {title && <h2>{title}</h2>}
    <div className="content" style={contentStyle || undefined}>
      {children}
    </div>
  </StyledSection>
