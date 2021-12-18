import { Container, VStack } from "@chakra-ui/react";
import Layout from "../components/layout/Layout";
import SearchBar from "../components/search/SearchBar";
import SearchResults from "../components/search/SearchResults";

export default function Search() {
  return (
    <Layout title="Search">
      <Container>
        <VStack spacing={4} align="stretch">
          <SearchBar />
          <SearchResults />
        </VStack>
      </Container>
    </Layout>
  );
}
