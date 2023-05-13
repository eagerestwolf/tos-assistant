import { Center, Loader, Space, Stack, Text, Title } from "@mantine/core";

export function Loading(): JSX.Element {
  return (
    <Center sx={{ height: "100vh", width: "100vw" }}>
      <Stack>
        <Title order={1}>One moment please</Title>
        <Center>
          <Text>Getting things ready...</Text>
        </Center>
        <Space h="xl" />
        <Center>
          <Loader size="xl" variant="bars" />
        </Center>
      </Stack>
    </Center>
  );
}
