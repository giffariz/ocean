import { Stack, Image, Button } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function NotFound() {
  return (
    <Stack
      w={"100dvw"}
      h={"100dvh"}
      justify={"center"}
      align={"center"}
      bg={"black"}
    >
      <Image
        src="/404.webp"
        alt="404 Not Found"
        w={{ base: "80%", md: "30%" }}
      />
      <Button
        component="a"
        href="/"
        color="var(--mantine-color-lime-4)"
        w={{ base: "50%", md: "20%" }}
        bdrs={"xl"}
        p={0}
        leftSection={<div></div>}
        rightSection={
          <div
            style={{
              aspectRatio: 1,
              height: "100%",
              padding: "5px",
              background: "black",
              borderRadius: "50px",
            }}
          >
            <IconArrowUpRight color="var(--mantine-color-lime-4)" />
          </div>
        }
        justify="space-between"
        style={{ color: "black", fontSize: "14px" }}
      >
        GO BACK
      </Button>
    </Stack>
  );
}
