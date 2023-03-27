"use client";
import { useEffect, useState } from "react";
import headshot_original from "public/headshot_original.png";
import headshot_centered from "public/headshot_centered.png";
import Image from "next/image";
import styles from "./page.module.scss";
import { WindowDimentions } from "./types";

const MIN_WIDTH = 450;

// pulled from https://dev.to/adrien/creating-a-custom-react-hook-to-get-the-window-s-dimensions-in-next-js-135k
const useWindowDimensions = (): WindowDimentions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return (): void => window.removeEventListener("resize", handleResize);
  }, []);
  // Empty array ensures that effect is only run on mount

  return windowDimensions;
};

const Headshot = (): JSX.Element => {
  const trueWidth = useWindowDimensions().width;
  const image = trueWidth >= MIN_WIDTH ? headshot_original : headshot_centered;
  const width = trueWidth >= 700 ? 700 : trueWidth;

  return (
    <Image
      className={styles.headshot}
      src={image}
      alt="Headshot Photo"
      width={width}
      priority
    />
  );
};

export default Headshot;
