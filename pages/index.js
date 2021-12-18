import { Center, Heading } from "@chakra-ui/react";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <Layout title="Moviebase">
      <Center h="full">
        <Heading as="h2">Moviebase is up and running</Heading>
      </Center>
    </Layout>
  );
}
