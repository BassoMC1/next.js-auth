import { Heading, Flex } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";
import {  Button, Text, } from "@chakra-ui/react";

const profile = () => {
  const { data: session } = useSession();
  return (
    <Flex justifyContent="center">
      <Heading>Profile</Heading>
      
      {session ? (
        <>
          <Text>
            Signed in as {session?.user?.email} <br />
            <img src={session?.user?.image || "https://i.imgur.com/a7s4g5B.jpeg"}  alt="" width={200}></img>
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

export default profile;
