import { AppShell, Navbar } from '@mantine/core';
import { Menu } from '../Menu';

export interface BaseLayoutProps {
  children: any;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => (
  <AppShell
    padding="md"
    navbar={<Menu />}
  >
    {children}
  </AppShell>

)