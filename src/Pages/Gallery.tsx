import InstagramEmbed from "react-instagram-embed";
const Gallery=()=>{

return(
    <div className="text-center m-2">
        <div>
        <h1>Gallery</h1>
        </div>
        <iframe width="876" height="404" src="https://www.youtube.com/embed/6T7eGG8QiNQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <InstagramEmbed
         url='https://www.instagram.com/rhapsodyinternationlacademy/'
         clientAccessToken='1000429754211491 | 9d7b78d140619871259aa1ec00463eb1'
         maxWidth={320}
         hideCaption={false}
         containerTagName='div'
         protocol=''
         injectScript
         onLoading={() => {}}
         onSuccess={() => {}}
         onAfterRender={() => {}}
         onFailure={() => {}}/>
    </div>
)

}

export default Gallery;