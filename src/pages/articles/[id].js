import {useRouter} from 'next/router'

const Post = () => {
  const router = useRouter();
  // request "/articles/100" returns "100"
  const {id} = router.query;
  return <p>ID: {id}</p>
}
export default Post
