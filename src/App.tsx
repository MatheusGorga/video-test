import './App.css'
import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar';
import VideoContent from './components/VideoContent';

export interface AppProps {
  videos: {
    id: string;
    title: string;
    link: string;
    description: string;
    video: boolean;
  }
}

function App() {
  const [videoLesson, setVideoLesson] = useState<never[]>([])
  const [videoActive, setVideoActive] = useState('')

  useEffect(() => {
    const load = async () => {
      const data = await fetch(
        'http://localhost:1337/api/paginas/1?populate=conteudo' ,
      );
      const json = await data.json();
      const pageData = json;
      const dataVideo = pageData.data.attributes.conteudo
      setVideoLesson(dataVideo)
    }

    load();
  }, [])

  function ativarVideo(link) {
    setVideoActive(link)
  }


  return (
    <div className="App">



      <VideoContent videosEnvi={videoLesson} isVideoActive={videoActive} descriptionActiveVideo={videoLesson.filter((video) => video.link === videoActive)} />
      <Sidebar videosEnvi={videoLesson} isActiveVideo={ativarVideo} />

    </div>
  )
}

export default App
