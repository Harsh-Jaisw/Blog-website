import { Card } from 'antd';
import "./Post.css"
const { Meta } = Card;

const Post = ({src,title,description}) => (
  <Card
    hoverable
    className='Cards'
    style={{
      width: 280,
    //   backgroundColor:"rgb(86, 79, 79)",
      
      
    }}
    cover={<img alt="example" src={src} height="170"/>}
  >
    <Meta  title={title} description={description}/>
  </Card>
);
export default Post;
