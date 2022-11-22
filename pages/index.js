import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import {StyledTimeline} from "../src/components/Timeline"


function HomePage() {
  const estilosDaHomePage = { 
    //backgroundColor: "red" 
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

/*function Menu() {
  return (
    <div>
      Menu
    </div>
  )
}*/

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
  }
`
function Header() {
  return (
    <StyledHeader>
      {/*<img src="banner" />*/}

      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
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