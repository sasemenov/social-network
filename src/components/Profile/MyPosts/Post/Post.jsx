import s from './Post.module.css';

const Post = (props) => {
  return  (
      <div className={s.item}>
      <img src='https://cdn.iconscout.com/icon/free/png-256/science-research-medical-laboratory-chemistry-physics-5-29841.png' alt='React'/>
     { props.message } 
      <div>
      <span>{ props.likes } likes</span>
      </div>
      
      </div>
 )
}

export default Post