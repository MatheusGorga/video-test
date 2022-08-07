import ReactPlayer from 'react-player'
import '../App.css'


interface VideoProps {
  videosEnvi: [
    AppProps: []
  ]
  isVideoActive: string
  descriptionActiveVideo: {
    content: string;
    description: string;
    id: number;
    link: string;
    title: string;
    video: boolean;
  }
}


export const Loading = () => {
  return (
    <div>
      ola mundo
    </div>
  )
}



function VideoContent({ videosEnvi, isVideoActive, descriptionActiveVideo }: VideoProps) {
  const videoParaAssistir = isVideoActive
  const data: any = descriptionActiveVideo

  const title = data[0]?.title || ''
  const description = data[0]?.description || ''

  return (
    <div className='video-container' >
      {videoParaAssistir ? (
        <>
          <section className='video-text'>
            <h3>{title}</h3>
            <p>{description}</p>
          </section>
          <ReactPlayer width='100%' height='75%' controls url={videoParaAssistir} />
        </>
      ) : (
        <span>
          Ola Hoteleiro,
          <br />
          Por favor selecione uma de nossas aulas para assistir
        </span>
      )}

    </div>
  )

}

export default VideoContent;

