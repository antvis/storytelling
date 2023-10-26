import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { kebabCaseToUpperCamelCase } from '../../helper';
import * as StoryComponents from '../../stories';

const { StoryMetas, ...Componets } = StoryComponents;

function getUI(id: string) {
  return (Componets as any)[kebabCaseToUpperCamelCase(id)] || null;
}

export const Story: React.FC = () => {
  const { id } = useParams();
  const Component = getUI(id as string);

  const meta = StoryMetas.find((meta) => meta.id === id);

  useEffect(() => {
    document.title = meta?.title + ' | 图有一思' || '';
  }, []);

  return (
    <>
      <Component />
    </>
  );
}
