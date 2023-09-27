import { useMatches, UIMatch } from "react-router-dom";
export const useBreadcrumbs = () => {
  const matches = useMatches() as UIMatch<unknown, { crumb?: string }>[];
  return matches
    .filter((match) => !!match.handle?.crumb)
    .map((match) => ({ label: match.handle.crumb, to: match.pathname }));
};
