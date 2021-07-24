import {useRouter} from 'next/router'

export async function getStaticPaths() {
  return {
    paths: [{params: {id: '1'}}, {params: {id: '2'}}],
    fallback: false
  }
}

const Post = () => {
  const router = useRouter();
  // request "/articles/100" returns "100"
  const {id} = router.query;
  return <p>ID: {id}</p>
}
export default Post
