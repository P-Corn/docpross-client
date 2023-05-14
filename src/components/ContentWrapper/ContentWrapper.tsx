import { Card } from 'primereact/card';
import React from 'react';

interface Item {
    name: string;
}

interface Props {
    title: string;
    items: Item[];
}

const ContentWrapper: React.FC<Props> = ({ title, items }) => {
  return (
    <div>
      <h5>{title}</h5>
        <div className="grid">
          {items.map((item, index) => {
            return (
              <div className="col-4">
                <Card className="content-card bg-primary-100" key={index}>
                  test
                </Card>
              </div>
            );
          })}
        </div>
    </div>
  )
}

export default ContentWrapper;
