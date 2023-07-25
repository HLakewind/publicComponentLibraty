import { PropsWithChildren, useContext } from 'react';
import { TagCardGroupContext } from '../TagCardGroup';
import { tagCard } from './style.css';

export interface TagCardProps extends PropsWithChildren<unknown> {
  /** 是否激活状态 */
  active?: boolean;
  /** 值 */
  value: string;
}
export default function TagCard({
  active: activeProp,
  value,
  children,
}: TagCardProps) {
  const groupCtx = useContext(TagCardGroupContext);
  const active = groupCtx ? groupCtx.value === value : activeProp;

  return (
    <button
      className={tagCard({ state: active ? 'active' : 'default' })}
      onClick={
        typeof groupCtx !== 'undefined'
          ? () => groupCtx.onChange(value)
          : undefined
      }
    >
      {children}
    </button>
  );
}
