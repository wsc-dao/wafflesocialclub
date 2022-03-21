import Image from "next/image";
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
    <Image src={avatar} alt={`${name} - ${title}`} className={middle ? 'middle' : 'outer'} width={400} height={400}/>
    <div>
      {url ? <a href={url} target={'_blank'} rel="noreferrer"><h3>{name}</h3></a> : <h3>{name}</h3>}
      <p>
        The <strong>{title}</strong><br/><br/>
        {role}
      </p>
    </div>
  </Member>;

const Member = styled.article`
  text-align: center;
  position: relative;
  max-width: 27%;
  min-width: 270px;

  div {
    position: absolute;
    top: 60%;
    transform: translate(-50%, -50%);
    width: 60%;
    left: 55%;
  }

  span {
    border-radius: 20px;

    img {
      object-fit: contain;
      background: ${DarkGrey};
      width: 100% !important;
      max-width: 100% !important;
      aspect-ratio: 1/1;
    }
  }

  a:hover {
    h3 {
      color: #FDCD7E;
    }
  }

  h3 {
    margin-top: .5rem;
    margin-bottom: 0;
    letter-spacing: 1px;
    color: #ffedcf;
  }

  p {
    font-size: 14pt;
  }
`;
