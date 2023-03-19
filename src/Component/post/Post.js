import { Card } from 'antd';
import "./Post.css"
const { Meta } = Card;

const Post = ({src,title,description,onClick}) => (
  <Card 
    onClick={onClick}
    hoverable
    className='Cards'
    style={{
      width: 280
    }}
    cover={<img alt="example" src={src} height="170"/>}
  >
    <Meta  title={title} description={description}/>
  </Card>
)
export default Post;
