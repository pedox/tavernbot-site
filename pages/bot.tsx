import { useRouter } from "next/router";
import React, { useEffect } from "react";

interface Props {}

const bot = (props: Props) => {
  const { push } = useRouter();
  useEffect(() => {
    push("/");
  });
  return <div></div>;
};

export default bot;
