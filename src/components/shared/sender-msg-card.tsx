import dayjs from "dayjs";

import { Flex, Grid } from "@radix-ui/themes";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { getAvatarName } from "../../../utils/getAvatarName";

const SenderMsgCard = (props: {
  message: string;
  type: string;
  time: string;
  sender: string;
}) => {
  const date = dayjs().format("MMM D, YYYY");
  const sender = getAvatarName(props.sender);

  return (
    <Grid className="w-full pr-3 gap-1 pb-2">
      {props.type === "Start" && (
        <div className="bg-white/20 py-[2px] px-2 rounded-2xl overflow-hidden mt-2 bg-title mx-auto">
          <h6 className="text-white">{date}</h6>
        </div>
      )}
      <Flex
        align="start"
        justify="end"
        className=" w-full space-x-2 text-secondary-150"
      >
        <div className="bg-blue-500 text-white p-3 rounded-l-lg rounded-br-lg max-w-xs">
          <h6 className="max-w-[250px] font-bold text-xs text-wrap">
            {props.message}
          </h6>
          <h6 className="text-xs w-fit">{props.time}</h6>
        </div>
        <Avatar>
          <AvatarFallback>{sender}</AvatarFallback>
        </Avatar>
      </Flex>
    </Grid>
  );
};

export default SenderMsgCard;
