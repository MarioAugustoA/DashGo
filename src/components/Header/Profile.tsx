import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
    showProfileData?: boolean;
}

export function Profile({showProfileData = true}:ProfileProps){
    return(
        <Flex align="center">
                    {showProfileData && (
                        <Box mr="4" textAlign="right">
                            <Text>Mario Augusto</Text>
                            <Text color="gray.300" fontSize="small">
                                mario_abreucardoso@hotmail.com
                                </Text>
                        </Box>
                    )}
                    <Avatar size="md" name="Mario Augusto" src="https://media-exp1.licdn.com/dms/image/C4E03AQEIBYam6NxBdg/profile-displayphoto-shrink_800_800/0/1609442728750?e=1626307200&v=beta&t=16tYkqJ6m6BZkFz7rpNR4qC0vC-bjHFq8gpoZ9k2y64" />
                </Flex>
    );
}