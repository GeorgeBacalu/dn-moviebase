import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function MenuItem({ href, children, ...props }) {
  return (
    <Link href={href} passHref>
      <Button as="a" variant="link" {...props}>
        {children}
      </Button>
    </Link>
  );
}
