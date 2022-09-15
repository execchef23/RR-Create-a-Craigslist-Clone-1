import Posting from "./Posting";

const Gallery = (props) =>{
    return (
        <div>
            <h2>Gallery</h2>
            {props.postings.map((p,i) => {
                return <Posting posting={p} key={i} />
            })}
        </div>
    )
}

export default Gallery;