import React from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import {StyledTimeline} from "../src/components/Timeline"
import Banner from "../src/components/Banner";


function HomePage() {
  const estilosDaHomePage = {
  };
  const [valorDoFiltro, setValorDoFiltro] = React.useState("Angular");

  return (
    <>
      <div style={estilosDaHomePage}>
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>
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
  background-color: ${({ theme }) => theme.backgroundLevel1};
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

function Timeline({searchValue, ...propriedades}) {
  const playlistNames = Object.keys(propriedades.playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
          const videos = propriedades.playlists[playlistName];
          return (
            <section key={playlistName}>
              <h2>{playlistName}</h2>
              <div>
                {videos.filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized);

                }).map((video) => {
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