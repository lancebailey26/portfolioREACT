import axios from 'axios';

const getBlog = () => {
    try{
        axios.get('http://localhost:3001/blog/blogs')
        .then((response) =>  {
            const blogData = response.data[0].title
            console.log(blogData)
        })
    } catch (err) {
        console.error(err);
      }
}
export default function blog(){
    getBlog()
    return(
        <div className='center'>
        <p>{blogData}</p>
        </div>
    )
}