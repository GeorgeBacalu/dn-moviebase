import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Heading, HStack, Spacer, Stack, useDisclosure } from "@chakra-ui/react";
import MenuItem from "./MenuItem";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="purple.500">
      <Container>
        <Stack as="nav" direction={["column", , "row"]} justify="space-between" wrap="wrap" py="1.5rem">
          <HStack justify="space-between">
            <MenuItem href="/" mr={8}>
              <Heading size="lg">Moviebase</Heading>
            </MenuItem>

            <Box display={["block", , "none"]} onClick={onToggle}>
              <Button variant="outline">
                <HamburgerIcon />
              </Button>
            </Box>
          </HStack>

          <Stack direction={["column", , "row"]} justify="start" align={["start", , "center"]} display={[isOpen ? "flex" : "none", , "flex"]} spacing={4}>
            <MenuItem href="/search">Search</MenuItem>
            <MenuItem href="/" disabled>
              Watchlist
            </MenuItem>
            <MenuItem href="/" disabled>
              History
            </MenuItem>
          </Stack>

          <Spacer />

          <Box display={[isOpen ? "block" : "none", , "block"]}>
            <MenuItem href="/" variant="outline" disabled>
              What to watch
            </MenuItem>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
