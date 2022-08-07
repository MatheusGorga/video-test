import '../App.css'

interface SidebarProps {
  videosEnvi :{
    id: string;
    title: string;
    link: string;
    description: string;
    video: boolean;
  }
  isActiveVideo: (link: any) => void;
}

 const Sidebar = ({videosEnvi, isActiveVideo}:SidebarProps) => {

  function HandleActiveVideo(link: any){
    isActiveVideo(link)
  }

  return (
    <div className='sidebar-container'>
     {videosEnvi?.map( (video:any) => {
        return (

          <div key={video.id}>
            <button type='button' onClick={() => HandleActiveVideo(video.link)}>
            {video.title}
            </button>
           
          </div>
           
        )
     })}
    </div>
  )


}

export default Sidebar;

