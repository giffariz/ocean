import { Text } from "@mantine/core";

export default function Footer() {
  return (
    <Text
      bg={"#a9e34b"}
      c="black"
      h={"50px"}
      w={"100%"}
      fw={600}
      fz={"h3"}
      ta={"center"}
      style={{
        position: "absolute",
        bottom: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      ocean.giffariz.com
    </Text>
  );
}
