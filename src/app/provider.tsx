"use client";
import { PropsWithChildren } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { Provider } from "react-redux";

import { Theme } from "@radix-ui/themes";

import store from "../../store";
export default function Providers({ children }: PropsWithChildren) {
  return (
    <Theme>
      <Provider store={store}>{children}</Provider>
      <ProgressBar
        height="4px"
        color="#CB0F06"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </Theme>
  );
}
