import TanstackQueryProvider from "@/lib/tanstack-query/TanstackQueryProvider";
import ReduxProvider from "@/lib/redux/ReduxProvider";
import NextThemeProvider from "@/lib/next-themes/NextThemeProvider";
import { childrenProps } from "@/@types";

const Wrapper = ({ children }: childrenProps) => {
  return (
    <TanstackQueryProvider>
      <ReduxProvider>
        <NextThemeProvider>{children}</NextThemeProvider>
      </ReduxProvider>
    </TanstackQueryProvider>
  );
};

export default Wrapper;
