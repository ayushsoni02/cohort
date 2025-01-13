export default function({params}:{
    params:{
        folderIds:string[];
    }
}) {
    return <div>
        {JSON.stringify(params.folderIds)};
    </div>
}