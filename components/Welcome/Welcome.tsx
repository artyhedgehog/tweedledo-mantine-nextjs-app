import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'teal', to: 'navy' }}>
          TweedleDo
        </Text>
        !
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This website is build with starter Next.js project for Mantine UIKit.
        To learn more on Mantine + Next.js integration follow{' '}
        <Anchor href="https://mantine.dev/guides/next/" size="lg" rel='noref noopener' target='__blank'>
          this guide
        </Anchor>
        . 
      </Text>
    </>
  );
}
