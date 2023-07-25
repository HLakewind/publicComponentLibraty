import { createContext, Dispatch, ReactNode, SetStateAction } from 'react';
import { tagCardGroup } from './style.css';

export interface TagCardGroupProps {
  // eslint-disable-next-line react/no-unused-prop-types
  value: string;
  // eslint-disable-next-line react/no-unused-prop-types
  onChange: Dispatch<SetStateAction<string>>;
  children?: ReactNode;
}
export default function TagCardGroup(props: TagCardGroupProps) {
  const { children } = props;
  return (
    <TagCardGroupContext.Provider value={props}>
      <div className={tagCardGroup}>{children}</div>
    </TagCardGroupContext.Provider>
  );
}

export const TagCardGroupContext = createContext<TagCardGroupProps | undefined>(
  undefined,
);
