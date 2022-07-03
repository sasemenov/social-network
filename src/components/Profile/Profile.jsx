import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return  <div className={s.content}>
  <div>
    <img src='https://thumbs.dreamstime.com/b/panoramic-image-tropical-island-web-site-blog-photo-header-banner-design-travel-tourism-sea-nature-theme-34358154.jpg' alt='Tropical Island'/>
  </div>

  <div>
   ava + description
  </div>
<MyPosts />
 </div>
}

export default Profile