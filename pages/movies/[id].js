import { Container } from "@chakra-ui/react";
import Layout from "../../components/layout/Layout";
import MovieContent from "../../components/movie/MovieContent";

export default function Movie() {
  return (
    <Layout>
      <Container h="full">
        <MovieContent />
      </Container>
    </Layout>
  );
}
