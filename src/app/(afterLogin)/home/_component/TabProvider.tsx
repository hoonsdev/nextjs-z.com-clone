'use client';

import { ReactNode, useState, createContext } from 'react';

// Context API 사용 :: createContext 로 생성
// 컨텍스트 api 는 최적화 필요
export const TabContext = createContext({
  tab: 'rec',
  setTab: (value: 'rec' | 'fol') => {},
});

type Props = { children: ReactNode };

export default function TabProvider({ children }: Props) {
  const [tab, setTab] = useState('rec');
  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
