import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import { Flex, Button, Text, Heading } from "@chakra-ui/react";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <Flex direction="column" alignItems="center" justifyContent="center">
      <Heading>Home</Heading>
      {session ? (
        <>
          <Text>
            Signed in as {session?.user?.email} <br />
            {session?.user?.name}
            <img src={session?.user?.image || "https://i.imgur.com/a7s4g5B.jpeg"}  alt="profile" width={200}></img>
          </Text>
          <Button onClick={() => signOut()}>Sign out</Button>
        </>
      ) : (
        <>
          <Flex direction="column" alignItems="center" justifyContent="center">
            Not signed in <br />
            <Button onClick={() => signIn()}>Sign in</Button>
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default Home;
