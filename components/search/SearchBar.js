import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function SearchBar() {
  const router = useRouter();
  console.log(router);
  const { terms } = router.query;
  const [text, setText] = useState("");

  // Update text input when route changes (ex when user goes back/forward)
  useEffect(() => {
    setText(terms || "");
  }, [terms]);

  // Update router history if a search was performed
  const handleSearch = event => {
    event.preventDefault();
    if (text !== terms) {
      router.push(`/search/?terms=${text}`, undefined, { shallow: true });
    }
  };

  return (
    <InputGroup as="form" onSubmit={handleSearch}>
      <Input placeholder="Search for a movie..." value={text} onChange={event => setText(event.target.value)} />
      <InputRightElement>
        <IconButton aria-label="Search for a movie" icon={<SearchIcon />} type="submit" />
      </InputRightElement>
    </InputGroup>
  );
}
