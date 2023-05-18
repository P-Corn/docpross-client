import { Card } from 'primereact/card';
import React from 'react';

interface Item {
  name: string;
}

interface ContentWrapperProps<T> {
  title: string;
  items: T[];
  component: React.FC<{item: T, index: number}>;
}

const ContentWrapper = <T extends Item>({ title, items, component: Component }: ContentWrapperProps<T>) => {
  return (
    <div>
      <h5>{title}</h5>
        <div className="grid">
          {items.map((item, index) => {
            return (
              <Component item={item} index={index} key={index} />
            );
          })}
        </div>
    </div>
  )
} 

export default ContentWrapper;
