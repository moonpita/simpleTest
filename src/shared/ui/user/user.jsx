import { Icon } from '@/shared/icons';
import s from './user.module.scss';

export const User = ({ name, id, image, nodeId, className }) => {
  return (
    <div className={`${s.card} ${className}`}>
      <img src={image} className={s.image} />
      <div className={s.content}>
        <div className={s.name}><Icon.User /><span>{name}</span></div>
        <div className={s.info}>
          <span>ID</span>
          <span>NodeId</span>
          <div>{id}</div>
          <div>{nodeId}</div>
        </div>
      </div>
    </div>
  )
}