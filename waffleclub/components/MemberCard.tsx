import styled from "styled-components";
import {DarkGrey} from "../consts";

export const MemberCard = ({
                             name = 'TBD',
                             url,
                             role,
                             title = "TBD",
                             avatar = "/chantilly.png",
                             middle
                           }: { name?: string; role?: string; url?: string; title?: string; avatar?: string; middle?: boolean }) =>
  <Member>
    <img src={avatar} alt={`${name} - ${title}`} className={middle ? 'middle' : 'outer'}/>
    <div>
      <h3>{name}</h3>
      <p>
        aka <strong>{title}</strong><br/>
        {role}
      </p>
      {url && <a href={url} target={'_blank'} className="btn btn-primary" rel="noreferrer">twitter</a>}
    </div>
  </Member>;

const Member = styled.article`
text-align: center;
  img {
    object-fit: contain;
    background: ${DarkGrey};
    width: 100% !important;
    max-width: 100% !important;
    aspect-ratio: 1/1;
    border-radius: 5px;
    
    &.outer {
    //  border-radius: 5px 50px;
    }

    &.middle {
     // border-radius: 50px 5px;
    }
  }

  h3 {
    margin-top: .5rem;
    margin-bottom: 0;
    letter-spacing: 1px;
  }

  p {
    font-size: 14pt;
  }
`;
