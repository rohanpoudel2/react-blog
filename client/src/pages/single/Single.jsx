import './single.scss'
import SideBar from '../../components/sidebar/SideBar';
import SinglePost from '../../components/singlepost/SinglePost';

const Single = () => {
  return (
    <div className="single">
      <SinglePost />
      <SideBar />
    </div>
  )
}

export default Single