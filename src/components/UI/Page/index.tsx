import { ReactNode } from 'react';
import Box from '../Box';
import H1 from '../H1';

import './Page.css';


interface IProps {
  title?: string,
  children?:ReactNode
}

function Page({ title, children }: IProps)
{

  return (
    <Box
      className="page"
    >
      {title &&
        (
          <H1>
            {title}
          </H1>
        )
      }
      {children}
    </Box>
  );
}

export default Page;
