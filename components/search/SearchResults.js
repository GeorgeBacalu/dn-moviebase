import { Badge, Button, ListItem, Progress, Text, UnorderedList } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function SearchResults() {
  const { terms } = useRouter().query;
  const { data, error } = useSWR(terms && `/api/search?terms=${terms}`);

  if (!terms) {
    return <Text>Type some terms and submit for a quick search</Text>;
  }
  if (error) {
    return (
      <Text color="red">
        Error fetching movies for {terms}: {JSON.stringify(error)}
      </Text>
    );
  }
  if (!data) {
    return <Progress size="xs" isIndeterminate />;
  }

  if (!data.results.length) {
    return <Text>No results</Text>;
  }

  return (
    <UnorderedList stylePosition="inside">
      {data.results.map(({ id, title, release_date }) => (
        <ListItem key={id}>
          <Link href={`/movies/${id}`} passHref>
            <Button as="a" variant="link" rightIcon={<Badge>{release_date}</Badge>}>
              <Text as="span">{title} </Text>
            </Button>
          </Link>
        </ListItem>
      ))}
    </UnorderedList>
  );
}
