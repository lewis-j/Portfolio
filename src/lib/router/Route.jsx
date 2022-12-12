import { useRouter } from "./Router";
export const Route = ({ to, component, children }) => {
  const { route } = useRouter();
  return to === route ? component || children : null;
};
