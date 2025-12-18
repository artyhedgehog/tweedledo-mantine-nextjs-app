'use client';

import { IconShoppingBagEdit } from '@tabler/icons-react';
import { AppShell, Burger, Center, NavLink, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export default function HomePage() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      padding="md"
      header={{ height: 36 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header display="flex">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="md" />
        <Title flex={1} order={2} ml="sm">
          TweedleDo
        </Title>
        <ColorSchemeToggle />
      </AppShell.Header>

      <AppShell.Navbar>
        <NavLink
          href="https://list.tweedledo.online"
          label="Shopping list"
          leftSection={<IconShoppingBagEdit size={24} stroke={1.5} />}
        />
      </AppShell.Navbar>

      <AppShell.Main>
        <Welcome />
      </AppShell.Main>

      <AppShell.Footer>
        <Center>Created by @artyhedgehog in 2025.</Center>
      </AppShell.Footer>
    </AppShell>
  );
}
