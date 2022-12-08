import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import {StyledTimeline} from "../src/components/Timeline"
import Banner from "../src/components/Banner";


function HomePage() {
  const estilosDaHomePage = {
  };

  return (
    <>
      <CSSReset />
      <div style={estilosDaHomePage}>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists}>
          Conteúdo
        </Timeline>
      </div>
    </>
  ) 
}

export default HomePage

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`

const StyledHeader = styled.div`
  .user-info {
    margin-top: 10px;
    display: flex;
    align-items: center;
    width: 100%;
  }
`
function Header() {
  return (
    <StyledHeader>
      <Banner />
      <section className="user-info">
        <Avatar src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.description}</p>
        </div>
      </section>
    </StyledHeader>
  )
}

function Timeline(props) {
  const playlistNames = Object.keys(props.playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
          const videos = props.playlists[playlistName];
          console.log(videos);
          return (
            <section key={playlistName}>
              <h2>{playlistName}</h2>
              <div>
                {videos.map((video) => {
                  return (
                    <a key={video.url} href={video.url}>
                      <img src={video.thumb}/>
                      <span>
                        {video.title}
                      </span>
                    </a>
                  )
                })}

              </div>
            </section>
          )
      })}
    </StyledTimeline>
  )
}