"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import React from "react";

const Dashboard: React.FC = () => {
  const router = useRouter();
  return (
    <Box className="p-4">
      <Grid columns="2" gap="3">
        <Card
          onClick={() =>
            router.push("/chatting?sender=than-soe&receiver=john-wick")
          }
        >
          <CardContent>
            <Flex
              direction="column"
              justify="center"
              align="center"
              className="p-4"
            >
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>TS</AvatarFallback>
              </Avatar>
              <h2 className="font-semibold pt-4">Than Soe</h2>
            </Flex>
          </CardContent>
        </Card>
        <Card
          onClick={() =>
            router.push("/chatting?sender=john-wick&receiver=than-soe")
          }
        >
          <CardContent>
            <Flex
              direction="column"
              justify="center"
              align="center"
              className="p-4"
            >
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>JW</AvatarFallback>
              </Avatar>
              <h2 className="font-semibold pt-4">Jhon Wick</h2>
            </Flex>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default Dashboard;
