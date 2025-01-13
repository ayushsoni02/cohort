    import axios from "axios";

    export default async function({params}:{
        params:{
            postId: string;
        }
    }) {
        const response  = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);

        return <div>
            <h1>{response.data.title}</h1>
            <h1>{response.data.body}</h1>
              </div>
    }